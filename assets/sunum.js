/* YZM205 sunum kipi: gezinme, adım adım beliren parçalar, sınıfça tahmin, görev sayacı, animasyonu yeniden oynatma.
   Kullanım: body içinde <div class="deste"> altında her ekran <section class="s" id="..."> ; en sonda <script src="../../assets/sunum.js"></script>.
   Sunuma özel kurulum: window.SUNUM = { bolumler:[{ad:"CSS nedir", ilk:"css-nedir"}, …], girince:{ "ekran-id": function(el){…} } }  (isteğe bağlı) */
(function () {
  "use strict";
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const ayar = window.SUNUM || {};
  const ekranlar = $$(".deste > .s");
  if (!ekranlar.length) return;
  let i = 0, sayacZaman = null, sayacKalan = 0, sayacEl = null;

  // çerçeve
  const ilerleme = document.createElement("div"); ilerleme.className = "ilerleme"; document.body.appendChild(ilerleme);
  const no = document.createElement("div"); no.className = "sayfa-no"; document.body.appendChild(no);
  const sol = document.createElement("div"); sol.className = "cerceve-sol";
  sol.innerHTML = '<a href="index.html" title="Uzun ders notu">Ders notu</a><span>·</span><a href="#" data-yardim>? yardım</a>';
  document.body.appendChild(sol);
  const yardim = document.createElement("div"); yardim.className = "yardim";
  yardim.innerHTML = '<div><h3 style="margin:0 0 .6em">Tuşlar</h3><p><kbd>→</kbd> <kbd>←</kbd> ekran · <kbd>Boşluk</kbd> sıradaki parça · <kbd>F</kbd> tam ekran · <kbd>T</kbd> sayacı başlat/durdur · <kbd>R</kbd> animasyonu yeniden oynat · <kbd>V</kbd> ekrandaki videoyu başlat · <kbd>D</kbd> koyu/açık · <kbd>1</kbd>…<kbd>9</kbd> bölüme atla · <kbd>Esc</kbd> kapat</p><p class="kucuk">Tıklama: sağ yarı ileri, sol yarı geri. Adres çubuğundaki #numara ekranı gösterir.</p></div>';
  document.body.appendChild(yardim);
  let cizgi = null;
  if (ayar.bolumler && ayar.bolumler.length) {
    cizgi = document.createElement("div"); cizgi.className = "bolum-cizgi";
    cizgi.innerHTML = ayar.bolumler.map((b) => '<i title="' + b.ad + '"></i>').join("");
    document.body.appendChild(cizgi);
  }

  const adimlar = (el) => $$("[data-adim]", el).sort((a, b) => Number(a.dataset.adim) - Number(b.dataset.adim));
  function oynat(el) {
    $$(".sahne, .harita, .zaman", el).forEach((s) => { s.classList.remove("oynuyor"); void s.offsetWidth; s.classList.add("oynuyor"); });
  }
  // video: tıklayınca ya da V ile YouTube klibi yüklenir; ekrandan çıkınca kaldırılır (ses kesilir)
  function videoAc(vk) {
    if (!vk || vk.classList.contains("acik")) return;
    const id = vk.dataset.yt; if (!id) return;
    const bas = Number(vk.dataset.bas || 0), son = Number(vk.dataset.son || 0);
    const f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0&modestbranding=1" + (bas ? "&start=" + bas : "") + (son ? "&end=" + son : "");
    f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen"; f.title = "video";
    vk.appendChild(f); vk.classList.add("acik");
  }
  function videoKapat() { $$(".video-kutu.acik").forEach((vk) => { $$("iframe", vk).forEach((f) => f.remove()); vk.classList.remove("acik"); }); }
  $$(".video-kutu[data-yt]").forEach((vk) => {
    if (!$("img", vk)) { const im = document.createElement("img"); im.alt = ""; im.loading = "lazy"; im.src = "https://i.ytimg.com/vi/" + vk.dataset.yt + "/hqdefault.jpg"; vk.prepend(im); }
    if (!$(".oynat", vk)) { const o = document.createElement("div"); o.className = "oynat"; o.textContent = vk.dataset.yazi || "Oynat (V)"; vk.appendChild(o); }
  });
  function bolumIndeksi(k) {
    if (!ayar.bolumler) return -1;
    let b = -1;
    for (let j = 0; j <= k; j++) { const id = ekranlar[j].id; const bi = ayar.bolumler.findIndex((x) => x.ilk === id); if (bi >= 0) b = bi; }
    return b;
  }
  function goster(k, sonAdim) {
    k = Math.max(0, Math.min(ekranlar.length - 1, k));
    if (sayacZaman) sayacDurdur();
    ekranlar.forEach((e, j) => e.classList.toggle("aktif", j === k));
    i = k;
    const el = ekranlar[i];
    const a = adimlar(el);
    a.forEach((x) => x.classList.toggle("goster", !!sonAdim));
    $$(".secenekler", el).forEach((s) => s.classList.remove("acildi"));
    $$(".cevap", el).forEach((c) => c.classList.remove("goster"));
    videoKapat();
    oynat(el);
    sayacEl = $(".sayac", el);
    if (sayacEl) sayacKur(sayacEl);
    ilerleme.style.width = ((i + 1) / ekranlar.length * 100) + "%";
    no.textContent = (i + 1) + " / " + ekranlar.length;
    history.replaceState(null, "", "#" + (i + 1));
    if (cizgi) { const b = bolumIndeksi(i); $$("i", cizgi).forEach((x, j) => { x.classList.toggle("bitti", j < b); x.classList.toggle("aktif", j === b); }); }
    if (ayar.girince && ayar.girince[el.id]) { try { ayar.girince[el.id](el); } catch (e) { console.error(e); } }
    document.title = (el.querySelector("h1,h2") ? el.querySelector("h1,h2").textContent.trim() + " · " : "") + (ayar.baslik || "Sunum");
  }
  function ileri() {
    const a = adimlar(ekranlar[i]);
    const gizli = a.find((x) => !x.classList.contains("goster"));
    if (gizli) { gizli.classList.add("goster"); return; }
    goster(i + 1, false);
  }
  function geri() {
    const a = adimlar(ekranlar[i]);
    const acik = a.filter((x) => x.classList.contains("goster"));
    if (acik.length) { acik[acik.length - 1].classList.remove("goster"); return; }
    goster(i - 1, true);
  }

  // sayaç
  function sayacKur(el) {
    sayacKalan = Number(el.dataset.sure || 180);
    sayacYaz(el);
    el.classList.remove("bitti");
    el.onclick = sayacDegistir;
  }
  function sayacYaz(el) {
    const d = Math.floor(sayacKalan / 60), s = sayacKalan % 60;
    el.innerHTML = d + ":" + (s < 10 ? "0" : "") + s + "<small>" + (sayacZaman ? "durdurmak için T" : "başlatmak için T") + "</small>";
  }
  function sayacDegistir() {
    if (!sayacEl) return;
    if (sayacZaman) { sayacDurdur(); return; }
    sayacZaman = setInterval(() => {
      sayacKalan = Math.max(0, sayacKalan - 1);
      sayacYaz(sayacEl);
      if (!sayacKalan) { sayacDurdur(); sayacEl.classList.add("bitti"); }
    }, 1000);
    sayacYaz(sayacEl);
  }
  function sayacDurdur() { clearInterval(sayacZaman); sayacZaman = null; if (sayacEl) sayacYaz(sayacEl); }

  // sınıfça tahmin: seçeneğe tıklayınca doğru belirir
  document.addEventListener("click", (ev) => {
    const sec = ev.target.closest(".secenek");
    if (sec) { sec.closest(".secenekler").classList.add("acildi"); const c = sec.closest(".s").querySelector(".cevap"); if (c) c.classList.add("goster"); return; }
    if (ev.target.closest(".yeniden")) { oynat(ekranlar[i]); return; }
    const vk = ev.target.closest(".video-kutu");
    if (vk) { videoAc(vk); return; }
    if (ev.target.closest("[data-yardim]")) { ev.preventDefault(); yardim.classList.toggle("acik"); return; }
    if (ev.target.closest(".yardim")) { yardim.classList.remove("acik"); return; }
    if (ev.target.closest("a, button, input, textarea, select, .sayac, pre, .sahne")) return;
    if (ev.clientX > window.innerWidth / 2) ileri(); else geri();
  });
  document.addEventListener("keydown", (ev) => {
    if (ev.target.matches("input, textarea, select")) return;
    const k = ev.key;
    if (k === "ArrowRight" || k === "PageDown" || k === "Enter") { ev.preventDefault(); ileri(); }
    else if (k === "ArrowLeft" || k === "PageUp") { ev.preventDefault(); geri(); }
    else if (k === " ") { ev.preventDefault(); ileri(); }
    else if (k === "Home") goster(0, false);
    else if (k === "End") goster(ekranlar.length - 1, true);
    else if (k === "f" || k === "F") { if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen().catch(() => {}); }
    else if (k === "t" || k === "T") sayacDegistir();
    else if (k === "r" || k === "R") oynat(ekranlar[i]);
    else if (k === "v" || k === "V") videoAc($(".video-kutu", ekranlar[i]));
    else if (k === "d" || k === "D") { const kok = document.documentElement; kok.dataset.theme = kok.dataset.theme === "dark" ? "light" : "dark"; try { localStorage.setItem("yzm205.sunum.tema", kok.dataset.theme); } catch (e) {} }
    else if (k === "?") yardim.classList.toggle("acik");
    else if (k === "Escape") yardim.classList.remove("acik");
    else if (/^[1-9]$/.test(k) && ayar.bolumler) { const b = ayar.bolumler[Number(k) - 1]; if (b) { const j = ekranlar.findIndex((e) => e.id === b.ilk); if (j >= 0) goster(j, false); } }
  });
  try { const t = localStorage.getItem("yzm205.sunum.tema"); if (t) document.documentElement.dataset.theme = t; } catch (e) {}

  const bas = parseInt((location.hash || "#1").slice(1), 10);
  goster(isNaN(bas) ? 0 : bas - 1, false);
  window.Sunum = { goster: (n) => goster(n - 1, false), ileri, geri, oynat: () => oynat(ekranlar[i]), videoAc, videoKapat, ekranlar };
})();
