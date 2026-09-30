// Lab grupları: "takim" etiketli açık kayıtları (issue) okur, doğrular, takimlar.json'u üretir,
// hatalı kayda yorum yazar, yedi günü dolan kaydı kilitler. GitHub Actions içinde çalışır.
import fs from "node:fs";

const TAKIM_BOYU = 4;
const KILIT_GUN = 7;
const TOKEN = process.env.GITHUB_TOKEN;
const REPO = process.env.REPO;
const ESKI_JSON = process.env.ESKI_JSON || "";
const YENI_JSON = process.env.YENI_JSON || "takimlar.json";
const IZINLI = (process.env.OGRENCI_NUMARALARI || "").split(/[\s,;]+/).filter(Boolean);

// ---------- ayrıştırma ----------

export function alan(body, baslik) {
  const rx = new RegExp("^### " + baslik.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*\\n([\\s\\S]*?)(?=^### |\\s*$(?![\\s\\S]))", "m");
  const m = (body || "").replace(/\r/g, "").match(rx);
  if (!m) return "";
  let s = m[1].trim();
  s = s.replace(/^```[a-z]*\n?/i, "").replace(/\n?```$/, "").trim();
  if (s === "_No response_") return "";
  return s;
}

export function ayristir(body) {
  const temiz = (s, n) => String(s || "").replace(/\s+/g, " ").trim().slice(0, n);
  const uyeler = [];
  for (const satir of alan(body, "Üyeler").split("\n")) {
    const t = satir.trim();
    if (!t) continue;
    const m = t.match(/^(\d[\d\s]*?)\s*[,;:\-–]?\s+(.+)$/);
    if (m) uyeler.push({ no: m[1].replace(/\s/g, ""), ad: temiz(m[2], 60) });
    else uyeler.push({ no: "", ad: temiz(t, 60) });
  }
  return {
    takim: temiz(alan(body, "Takım adı"), 40),
    uyeler,
    konu: temiz(alan(body, "Proje konusu"), 300),
    site: temiz(alan(body, "Sitenin adresi"), 200),
    klasor: temiz(alan(body, "Dosya klasörü"), 300),
  };
}

// ---------- doğrulama ----------

export function dogrulaHepsi(kayitlar) {
  const kullanilan = new Map();   // numara -> takım adı
  const adlar = new Map();        // küçük harf ad -> takım adı
  for (const k of kayitlar) {
    if (k.donuk) {                // kilitli ve daha önce geçerli sayılmış kayıt: dokunma, yalnız numaralarını ayır
      for (const u of k.uyeler) kullanilan.set(u.no, k.takim);
      adlar.set(k.takim.toLocaleLowerCase("tr"), k.takim);
      continue;
    }
    const hata = [];
    if (k.takim.length < 2) hata.push("Takım adı en az iki karakter olmalı.");
    const anahtar = k.takim.toLocaleLowerCase("tr");
    if (adlar.has(anahtar)) hata.push(`"${k.takim}" adı başka bir takımda kullanılıyor.`);
    if (k.konu.length < 5) hata.push("Proje konusu için en az bir cümle yazın.");
    if (k.site && !/^https?:\/\/\S+$/.test(k.site)) hata.push("Sitenin adresi https:// ile başlamalı.");
    if (k.klasor && !/^https?:\/\/\S+$/.test(k.klasor)) hata.push("Dosya klasörü adresi https:// ile başlamalı.");
    const gorulen = new Set();
    for (const u of k.uyeler) {
      if (!/^\d{5,15}$/.test(u.no)) hata.push(`Öğrenci numarası rakamlardan oluşmalı ve satır "numara ad soyad" biçiminde olmalı: "${u.no || u.ad}".`);
      if (u.ad.length < 3) hata.push(`Ad soyad eksik: "${u.no}".`);
      if (u.no && gorulen.has(u.no)) hata.push(`Aynı numara iki kez yazılmış: ${u.no}.`);
      gorulen.add(u.no);
      if (u.no && kullanilan.has(u.no)) hata.push(`${u.no} numaralı öğrenci zaten "${kullanilan.get(u.no)}" takımında kayıtlı.`);
      if (IZINLI.length && u.no && !IZINLI.includes(u.no)) hata.push(`${u.no} numarası sınıf listesinde yok.`);
    }
    if (k.uyeler.length !== TAKIM_BOYU) hata.push(`Takım tam olarak ${TAKIM_BOYU} kişi olmalı (şu an ${k.uyeler.length} satır var).`);
    k.hatalar = hata;
    k.durum = hata.length ? "hatali" : "gecerli";
    if (k.durum === "gecerli") {
      for (const u of k.uyeler) kullanilan.set(u.no, k.takim);
      adlar.set(anahtar, k.takim);
    }
  }
  return kayitlar;
}

// ---------- GitHub ----------

async function api(yol, secenek = {}) {
  const r = await fetch("https://api.github.com" + yol, {
    ...secenek,
    headers: {
      Authorization: `Bearer ${TOKEN}`, Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28", "Content-Type": "application/json", ...(secenek.headers || {}),
    },
  });
  if (r.status === 204) return null;
  const veri = await r.json().catch(() => null);
  if (!r.ok && r.status !== 422) throw new Error(`${secenek.method || "GET"} ${yol} -> ${r.status} ${JSON.stringify(veri)}`);
  return veri;
}

async function kayitlariCek() {
  const hepsi = [];
  for (let sayfa = 1; sayfa <= 5; sayfa++) {
    const parca = await api(`/repos/${REPO}/issues?labels=takim&state=open&per_page=100&page=${sayfa}`);
    if (!Array.isArray(parca) || !parca.length) break;
    hepsi.push(...parca.filter((i) => !i.pull_request));
    if (parca.length < 100) break;
  }
  return hepsi.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
}

async function etiketleriHazirla() {
  const etiketler = [
    { name: "takim", color: "2352D9", description: "Lab grubu kaydı" },
    { name: "hatali", color: "B42318", description: "Kayıt eksik ya da hatalı, listeye girmedi" },
    { name: "kilitli", color: "5B6577", description: "Düzenleme süresi doldu" },
    { name: "acik", color: "0A6F62", description: "Hoca süresini uzattı, kayıt düzenlenebilir" },
  ];
  for (const e of etiketler) await api(`/repos/${REPO}/labels`, { method: "POST", body: JSON.stringify(e) });
}

async function etiketEkle(no, ad) { await api(`/repos/${REPO}/issues/${no}/labels`, { method: "POST", body: JSON.stringify({ labels: [ad] }) }); }
async function etiketSil(no, ad) { await api(`/repos/${REPO}/issues/${no}/labels/${encodeURIComponent(ad)}`, { method: "DELETE" }); }
async function yorum(no, metin) { await api(`/repos/${REPO}/issues/${no}/comments`, { method: "POST", body: JSON.stringify({ body: metin }) }); }

// ---------- ana akış ----------

async function main() {
  await etiketleriHazirla();
  const eski = new Map();
  if (ESKI_JSON && fs.existsSync(ESKI_JSON)) {
    try { for (const k of JSON.parse(fs.readFileSync(ESKI_JSON, "utf8")).takimlar || []) eski.set(k.id, k); } catch (e) { /* ilk çalışma */ }
  }
  const simdi = new Date();
  const issues = await kayitlariCek();
  const kayitlar = [];
  for (const i of issues) {
    const etiketler = (i.labels || []).map((l) => (typeof l === "string" ? l : l.name));
    const olusturma = new Date(i.created_at);
    const kilit = new Date(olusturma.getTime() + KILIT_GUN * 86400000);
    const kilitli = !etiketler.includes("acik") && simdi > kilit;
    const onceki = eski.get(i.number);
    let k;
    if (kilitli && onceki && onceki.durum === "gecerli") {
      k = { ...onceki, donuk: true };
    } else {
      k = ayristir(i.body);
    }
    Object.assign(k, {
      id: i.number, olusturma: olusturma.toISOString(), kilit: kilit.toISOString(), kilitli,
      github: i.html_url, yazar: i.user ? i.user.login : "", guncelleme: i.updated_at,
      _etiketler: etiketler, _kilitliMi: !!i.locked, _baslik: i.title, _onceki: onceki,
    });
    kayitlar.push(k);
  }
  dogrulaHepsi(kayitlar);

  for (const k of kayitlar) {
    const no = k.id;
    if (!k.donuk) {
      if (k.durum === "gecerli" && k.takim && k._baslik !== `Takım: ${k.takim}`) {
        await api(`/repos/${REPO}/issues/${no}`, { method: "PATCH", body: JSON.stringify({ title: `Takım: ${k.takim}` }) });
      }
      if (k.durum === "hatali") {
        if (!k._etiketler.includes("hatali")) await etiketEkle(no, "hatali");
        const oncekiHata = k._onceki ? (k._onceki.hatalar || []).join("|") : null;
        if (oncekiHata !== k.hatalar.join("|")) {
          await yorum(no, "Kayıt henüz listeye girmedi, şunlar düzeltilmeli:\n\n" + k.hatalar.map((h) => "- " + h).join("\n")
            + "\n\nDüzenlemek için sağ üstteki üç noktadan **Edit** deyin; kaydettikten sonra bir iki dakika içinde yeniden kontrol edilir.");
        }
      } else if (k._etiketler.includes("hatali")) {
        await etiketSil(no, "hatali");
        await yorum(no, "Kayıt geçerli. Takım ders sitesindeki Lab grupları sayfasında görünüyor.");
      }
    }
    if (k.kilitli) {
      if (!k._etiketler.includes("kilitli")) await etiketEkle(no, "kilitli");
      if (!k._kilitliMi) {
        await api(`/repos/${REPO}/issues/${no}/lock`, { method: "PUT", body: JSON.stringify({ lock_reason: "resolved" }) });
        await yorum(no, "Düzenleme süresi doldu, kayıt kilitlendi. Değişiklik gerekirse hocaya yazın.");
      }
    } else if (k._etiketler.includes("kilitli")) {
      await etiketSil(no, "kilitli");
    }
  }

  const cikti = {
    guncelleme: simdi.toISOString(),
    ayar: { takimBoyu: TAKIM_BOYU, kilitGun: KILIT_GUN },
    takimlar: kayitlar.map((k) => ({
      id: k.id, takim: k.takim, uyeler: k.uyeler, konu: k.konu, site: k.site, klasor: k.klasor,
      olusturma: k.olusturma, kilit: k.kilit, kilitli: k.kilitli, durum: k.durum, hatalar: k.hatalar || [],
      github: k.github, yazar: k.yazar, guncelleme: k.guncelleme,
    })),
  };
  fs.writeFileSync(YENI_JSON, JSON.stringify(cikti, null, 2) + "\n", "utf8");
  console.log(`${cikti.takimlar.length} kayıt, ${cikti.takimlar.filter((t) => t.durum === "gecerli").length} geçerli, ${cikti.takimlar.filter((t) => t.kilitli).length} kilitli`);
}

if (TOKEN && REPO) {
  main().catch((e) => { console.error(e); process.exit(1); });
}
