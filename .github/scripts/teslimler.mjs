// Lab teslimleri: "teslim" etiketli açık kayıtları (issue) okur, doğrular, teslimler.json'u üretir,
// hatalı kayda yorum yazar. GitHub Actions içinde çalışır. Kilit yoktur: kayıt istenildiği zaman düzenlenebilir.
import fs from "node:fs";

const TOKEN = process.env.GITHUB_TOKEN;
const REPO = process.env.REPO;
const ESKI_JSON = process.env.ESKI_JSON || "";
const YENI_JSON = process.env.YENI_JSON || "teslimler.json";

export const HAFTALAR = [
  "Hafta 2 · HTML",
  "Hafta 3 · CSS",
  "Hafta 4 · JavaScript 1",
  "Hafta 5 · JavaScript 2",
  "Hafta 7 · Sunucu",
  "Hafta 8 · Veritabanı",
  "Hafta 9 · Git",
  "Hafta 10 · Yapay zekâ ile geliştirme",
  "Hafta 11 · Güvenlik",
  "Hafta 12 · Yapay zekâ API",
  "Hafta 13 · Yayına alma",
];

// ---------- ayrıştırma ----------

// gruplar.mjs'teki işlevin kopyası (oradan içe aktarmak oranın ana akışını da başlatırdı).
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
  const tek = (s, n) => String(s || "").replace(/\s+/g, " ").trim().slice(0, n);
  const cok = (s, n) => String(s || "").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim().slice(0, n);
  const haftaAd = tek(alan(body, "Hafta"), 80);
  const hm = haftaAd.match(/^Hafta (\d+) ·/);
  return {
    hafta: HAFTALAR.includes(haftaAd) && hm ? Number(hm[1]) : null,
    haftaAd,
    numara: tek(alan(body, "Öğrenci numarası"), 30).replace(/\s/g, ""),
    ad: tek(alan(body, "Ad soyad"), 80),
    yayin: tek(alan(body, "Yayındaki sayfanın adresi"), 300),
    depo: tek(alan(body, "Deponun adresi"), 300),
    bozuk: tek(alan(body, "Düzeltilmiş bozuk paketin adresi"), 300),
    yzNotu: cok(alan(body, "Yapay zekâ notu"), 1500),
    takildigi: cok(alan(body, "Takıldığın yer"), 1000),
    birlikte: tek(alan(body, "Birlikte çalıştığın kişi"), 120),
  };
}

// ---------- doğrulama ----------

export function dogrula(k) {
  const hata = [];
  if (k.hafta == null) hata.push("Haftayı listeden seçmelisin.");
  if (!/^\d{5,15}$/.test(k.numara)) hata.push("Öğrenci numarası yalnız rakamlardan oluşmalı ve 5 ile 15 hane olmalı.");
  if (k.ad.length < 3) hata.push("Ad soyad en az üç karakter olmalı.");
  if (!/^https:\/\/\S+$/.test(k.yayin)) hata.push("Yayındaki sayfanın adresi https:// ile başlamalı.");
  if (!/^https:\/\/\S+$/.test(k.depo)) hata.push("Deponun adresi https:// ile başlamalı.");
  if (k.bozuk && !/^https:\/\/\S+$/.test(k.bozuk)) hata.push("Düzeltilmiş bozuk paketin adresi https:// ile başlamalı. Yoksa boş bırak.");
  if (k.yzNotu.length < 10) hata.push("Yapay zekâ notunu doldur: nerede, ne için kullandığını ya da kullanmadığını yaz.");
  return hata;
}

// Kayıtların her birini doğrular; aynı (hafta, numara) için geçerli kayıtlardan en son oluşturulanı gecerli_son yapar.
export function dogrulaHepsi(kayitlar) {
  const son = new Map();   // "hafta|numara" -> en son geçerli kayıt
  for (const k of kayitlar) {
    k.hatalar = dogrula(k);
    k.durum = k.hatalar.length ? "hatali" : "gecerli";
    k.gecerli_son = false;
    if (k.durum !== "gecerli") continue;
    const anahtar = k.hafta + "|" + k.numara;
    const onceki = son.get(anahtar);
    if (!onceki || new Date(k.olusturma) > new Date(onceki.olusturma)
        || (new Date(k.olusturma).getTime() === new Date(onceki.olusturma).getTime() && k.id > onceki.id)) son.set(anahtar, k);
  }
  for (const k of son.values()) k.gecerli_son = true;
  return kayitlar;
}

// Çıktı sırası: hafta (hafta seçilmemişler sonda), numara, oluşturma zamanı.
export function sirala(kayitlar) {
  return [...kayitlar].sort((a, b) =>
    (a.hafta == null) - (b.hafta == null)
    || (a.hafta || 0) - (b.hafta || 0)
    || String(a.numara).localeCompare(String(b.numara))
    || new Date(a.olusturma) - new Date(b.olusturma));
}

export function cikti(kayitlar, simdi) {
  return {
    guncelleme: simdi.toISOString(),
    teslimler: sirala(kayitlar).map((k) => ({
      id: k.id, hafta: k.hafta, haftaAd: k.haftaAd, numara: k.numara, ad: k.ad,
      yayin: k.yayin, depo: k.depo, bozuk: k.bozuk, yzNotu: k.yzNotu, takildigi: k.takildigi, birlikte: k.birlikte,
      olusturma: k.olusturma, guncelleme: k.guncelleme, durum: k.durum, hatalar: k.hatalar || [],
      gecerli_son: k.gecerli_son, github: k.github, yazar: k.yazar,
    })),
  };
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
  for (let sayfa = 1; sayfa <= 30; sayfa++) {
    const parca = await api(`/repos/${REPO}/issues?labels=teslim&state=open&per_page=100&page=${sayfa}`);
    if (!Array.isArray(parca) || !parca.length) break;
    hepsi.push(...parca.filter((i) => !i.pull_request));
    if (parca.length < 100) break;
  }
  return hepsi.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
}

async function etiketleriHazirla() {
  const etiketler = [
    { name: "teslim", color: "0A6F62", description: "Lab teslimi" },
    { name: "hatali", color: "B42318", description: "Kayıt eksik ya da hatalı, listeye girmedi" },
  ];
  for (const e of etiketler) await api(`/repos/${REPO}/labels`, { method: "POST", body: JSON.stringify(e) });
}

async function etiketEkle(no, ad) { await api(`/repos/${REPO}/issues/${no}/labels`, { method: "POST", body: JSON.stringify({ labels: [ad] }) }); }
async function etiketSil(no, ad) { await api(`/repos/${REPO}/issues/${no}/labels/${encodeURIComponent(ad)}`, { method: "DELETE" }); }
async function yorum(no, metin) { await api(`/repos/${REPO}/issues/${no}/comments`, { method: "POST", body: JSON.stringify({ body: metin }) }); }

// ---------- ana akış ----------

async function main() {
  await etiketleriHazirla();
  const eski = new Map();   // yalnız aynı hata için yorumu tekrarlamamak üzere okunur
  if (ESKI_JSON && fs.existsSync(ESKI_JSON)) {
    try { for (const k of JSON.parse(fs.readFileSync(ESKI_JSON, "utf8")).teslimler || []) eski.set(k.id, k); } catch (e) { /* ilk çalışma */ }
  }
  const simdi = new Date();
  const issues = await kayitlariCek();
  const kayitlar = [];
  for (const i of issues) {
    const k = ayristir(i.body);
    Object.assign(k, {
      id: i.number, olusturma: new Date(i.created_at).toISOString(), guncelleme: i.updated_at,
      github: i.html_url, yazar: i.user ? i.user.login : "",
      _etiketler: (i.labels || []).map((l) => (typeof l === "string" ? l : l.name)),
      _baslik: i.title, _onceki: eski.get(i.number),
    });
    kayitlar.push(k);
  }
  dogrulaHepsi(kayitlar);

  for (const k of kayitlar) {
    const no = k.id;
    if (k.durum === "gecerli") {
      const baslik = `Teslim: Hafta ${k.hafta} · ${k.numara}`;
      if (k._baslik !== baslik) await api(`/repos/${REPO}/issues/${no}`, { method: "PATCH", body: JSON.stringify({ title: baslik }) });
      if (k._etiketler.includes("hatali")) {
        await etiketSil(no, "hatali");
        await yorum(no, "Teslim alındı. Teslimler sayfasında görünüyor.");
      }
    } else {
      if (!k._etiketler.includes("hatali")) await etiketEkle(no, "hatali");
      const oncekiHata = k._onceki ? (k._onceki.hatalar || []).join("|") : null;
      if (oncekiHata !== k.hatalar.join("|")) {
        await yorum(no, "Teslim henüz listeye girmedi, şunlar düzeltilmeli:\n\n" + k.hatalar.map((h) => "- " + h).join("\n")
          + "\n\nDüzeltmek için sağ üstteki üç noktadan **Edit** de; kaydettikten sonra bir iki dakika içinde yeniden kontrol edilir.");
      }
    }
  }

  const c = cikti(kayitlar, simdi);
  fs.writeFileSync(YENI_JSON, JSON.stringify(c, null, 2) + "\n", "utf8");
  const t = c.teslimler;
  console.log(`${t.length} kayıt, ${t.filter((x) => x.durum === "gecerli").length} geçerli, ${t.filter((x) => x.durum === "hatali").length} hatalı, ${t.filter((x) => x.gecerli_son).length} güncel teslim`);
}

if (TOKEN && REPO) {
  main().catch((e) => { console.error(e); process.exit(1); });
}
