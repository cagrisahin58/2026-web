/* YZM205 ders notu ortak betiği. Bağımlılık yok, modül yok; file:// ve GitHub Pages'te çalışır.
   Belirtim: hoca-ozel/TASARIM_YENI_PLAN.md §10.3. Galeri: hoca-ozel/kit/ornek.html */
(function () {
  'use strict';

  var doc = document, root = doc.documentElement;
  root.classList.add('ders-js');

  /* ---------- yardımcılar ---------- */
  function $(sel, r) { return (r || doc).querySelector(sel); }
  function $$(sel, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(sel)); }
  function el(tag, cls, text) {
    var e = doc.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  /* ters tırnak içini <code> yapar */
  function fmt(s) { return esc(s).replace(/`([^`]+)`/g, '<code>$1</code>'); }
  /* localStorage: değer verilmezse okur, null verilirse siler; hata yutulur */
  function store(k, v) {
    try {
      if (v === undefined) return localStorage.getItem(k);
      if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, String(v));
    } catch (e) { return null; }
    return null;
  }
  /* id, seçici ya da eleman kabul eder */
  function pick(x) {
    if (!x) return null;
    if (typeof x !== 'string') return x;
    var byId = doc.getElementById(x.replace(/^#/, ''));
    if (byId) return byId;
    try { return doc.querySelector(x); } catch (e) { return null; }
  }
  function week() {
    var b = doc.body;
    return b ? (parseInt(b.getAttribute('data-week'), 10) || 0) : 0;
  }
  function reduced() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }
  function bindOnce(node, name) {
    var k = 'ders' + name;
    if (node.dataset[k]) return false;
    node.dataset[k] = '1';
    return true;
  }
  /* herhangi bir CSS rengini [r, g, b] yapar; görev kontrolünde işe yarar */
  function rgb(c) {
    var re = /rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/, m = re.exec(String(c || ''));
    if (m) return [+m[1], +m[2], +m[3]];
    if (!doc.body) return null;
    var t = el('span'); t.style.color = c; doc.body.appendChild(t);
    m = re.exec(getComputedStyle(t).color); t.remove();
    return m ? [+m[1], +m[2], +m[3]] : null;
  }
  /* konsol paneline satır yazar: tür 'log' | 'warn' | 'err' */
  function log(con, text, type) {
    con = pick(con);
    if (!con) return;
    con.appendChild(el('div', type === 'err' ? 'err' : type === 'warn' ? 'warn' : 'log', text));
    con.scrollTop = con.scrollHeight;
  }

  /* ---------- tema ---------- */
  var TKEY = 'yzm205.tema';
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return !!(mq && mq.matches);
  }
  function paintTheme() {
    $$('.themebtn').forEach(function (b) { b.textContent = isDark() ? 'Açık tema' : 'Koyu tema'; });
  }
  function applySaved() {
    var s = store(TKEY);
    if (s === 'dark' || s === 'light') root.setAttribute('data-theme', s);
  }
  applySaved(); /* sayfa çizilmeden önce, yanıp sönmesin */
  function theme() {
    applySaved();
    $$('.themebtn').forEach(function (b) {
      if (!bindOnce(b, 'Theme')) return;
      if (!b.getAttribute('type')) b.setAttribute('type', 'button');
      b.addEventListener('click', function () {
        var n = isDark() ? 'light' : 'dark';
        root.setAttribute('data-theme', n);
        store(TKEY, n);
        paintTheme();
      });
    });
    if (mq && !theme.bound) {
      theme.bound = true;
      if (mq.addEventListener) mq.addEventListener('change', paintTheme); else if (mq.addListener) mq.addListener(paintTheme);
    }
    paintTheme();
  }

  /* ---------- kod blokları: numara ve kopyala ---------- */
  function lineHTML(inner, i, hot) {
    return '<span class="l' + (hot ? ' hot' : '') + '"><span class="no">' + (i + 1) + '</span><span class="tx">' + (inner || ' ') + '</span></span>';
  }
  function number(pre) {
    if (!bindOnce(pre, 'Num')) return;
    var old = $(':scope > .copy', pre);
    if (old) old.remove();
    var html = pre.innerHTML.replace(/^\n/, '').replace(/\s+$/, '');
    pre.innerHTML = html.split('\n').map(function (l, i) { return lineHTML(l, i, /class="ln-hot"/.test(l)); }).join('');
  }
  function codeText(pre) {
    var ls = $$(':scope > .l', pre);
    if (ls.length) {
      return ls.map(function (l) { var t = $('.tx', l); return t ? t.textContent : ''; })
        .join('\n').replace(/[ \t]+$/gm, '').replace(/\s+$/, '');
    }
    var c = pre.cloneNode(true);
    $$('.copy', c).forEach(function (x) { x.remove(); });
    return c.textContent.replace(/^\n+/, '').replace(/\s+$/, '');
  }
  function copyText(text) {
    return new Promise(function (res) {
      function fallback() {
        var ta = el('textarea'); ta.value = text; ta.setAttribute('readonly', '');
        ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none';
        doc.body.appendChild(ta); ta.select();
        var ok = false;
        try { ok = doc.execCommand('copy'); } catch (e) { ok = false; }
        ta.remove(); res(ok);
      }
      if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(function () { res(true); }, fallback);
      } else fallback();
    });
  }
  function copy() {
    $$('pre.code.numbered').forEach(number);
    $$('pre.code.hascopy').forEach(function (pre) {
      if ($(':scope > .copy', pre)) return;
      var b = el('button', 'copy', 'Kopyala'); b.type = 'button';
      pre.appendChild(b);
    });
    $$('pre.code .copy').forEach(function (b) {
      if (!bindOnce(b, 'Copy')) return;
      b.addEventListener('click', function () {
        copyText(codeText(b.parentElement)).then(function (ok) {
          b.textContent = ok ? 'Kopyalandı' : 'Seçip kopyala';
          clearTimeout(b._t);
          b._t = setTimeout(function () { b.textContent = 'Kopyala'; }, 1600);
        });
      });
    });
  }

  /* ---------- sorular ---------- */
  var LET = 'ABCDEF';
  function quizKey(k) { return 'yzm205.h' + week() + '.quiz.' + k; }
  function hash(s) { var h = 7; for (var i = 0; i < s.length; i++) h = (Math.imul(h, 31) + s.charCodeAt(i)) >>> 0; return h; }
  /* tohumlu karıştırma: her açılışta aynı sıra */
  function seeded(n, seed) {
    var ord = [], i;
    for (i = 0; i < n; i++) ord.push(i);
    for (i = n - 1; i > 0; i--) {
      seed = (Math.imul(seed, 1103515245) + 12345) >>> 0;
      var j = seed % (i + 1), t = ord[i]; ord[i] = ord[j]; ord[j] = t;
    }
    return ord;
  }
  function codeBlock(lines, num) {
    return '<pre class="code">' + lines.map(function (l, i) {
      return num ? lineHTML(esc(l), i, false) : esc(l);
    }).join(num ? '' : '\n') + '</pre>';
  }
  function drawQuiz(box) {
    var key = box.getAttribute('data-quiz'), data = (window.QUIZ || {})[key];
    box.classList.add('quiz');
    box.innerHTML = '';
    if (!data || !data.qs || !data.qs.length) {
      box.appendChild(el('p', 'muted small', 'Soru verisi bulunamadı: ' + key));
      return;
    }
    var qs = data.qs, right = 0, answered = 0;
    var start = data.start || 1, prefix = data.prefix == null ? 'S' : data.prefix;
    var head = el('div', 'qhead');
    head.appendChild(el('h3', null, data.title || 'Kendini sına'));
    var row = el('div', 'btnrow'), score = el('span', 'qscore');
    score.setAttribute('aria-live', 'polite');
    var again = el('button', 'btn', 'Yeniden dene'); again.type = 'button';
    again.addEventListener('click', function () {
      drawQuiz(box);
      var f = $('.opt', box); if (f) f.focus();
    });
    row.appendChild(score); row.appendChild(again); head.appendChild(row); box.appendChild(head);
    var prev = store(quizKey(key));
    function upd() {
      var t = right + ' / ' + qs.length + ' doğru';
      if (answered < qs.length) t += ' · ' + (qs.length - answered) + ' soru kaldı';
      if (answered === 0 && prev != null) t += ' · önceki denemen ' + prev + ' / ' + qs.length;
      score.textContent = t;
    }
    qs.forEach(function (q, qi) {
      var item = el('div', 'q'), n = start + qi, o = q.o || [];
      var h = '<div class="qt"><span class="qn">' + esc(prefix) + n + '</span>';
      if (q.d) h += '<span class="chip theory">' + esc(data.dLabel || 'Derste') + '</span>';
      if (q.tag) h += '<span class="chip tag">' + esc(q.tag) + '</span>';
      h += fmt(q.q) + '</div>';
      if (q.c) h += codeBlock(q.c, q.num === undefined ? true : !!q.num);
      else if (q.code != null) h += codeBlock(String(q.code).replace(/\n+$/, '').split('\n'), !!q.num);
      h += '<div class="opts" role="group" aria-label="Seçenekler"></div><div class="exp" aria-live="polite"></div>';
      item.innerHTML = h;
      var opts = $('.opts', item), exp = $('.exp', item);
      var keep = data.shuffle === false || /satır\.?$/.test(String(o[0]));
      var ord = keep ? o.map(function (_, i) { return i; }) : seeded(o.length, hash(key) + n * 7919);
      var ans = ord.indexOf(q.a);
      ord.forEach(function (oi, pos) {
        var b = el('button', 'opt'); b.type = 'button';
        b.innerHTML = '<span class="k">' + LET.charAt(pos) + '</span><span>' + fmt(o[oi]) + '</span>';
        b.addEventListener('click', function () {
          if (item.classList.contains('done')) return;
          item.classList.add('done', pos === ans ? 'right' : 'wrong');
          answered++;
          $$('.opt', opts).forEach(function (x, xi) {
            x.setAttribute('aria-disabled', 'true');
            if (xi === ans) x.classList.add('right');
          });
          if (pos === ans) {
            right++;
            exp.innerHTML = '<b class="verdict">Doğru.</b> ' + fmt(q.e || '');
          } else {
            b.classList.add('wrong');
            exp.innerHTML = '<b class="verdict">Yanlış. Doğru: ' + LET.charAt(ans) + '.</b> ' + fmt(q.e || '');
          }
          upd();
          if (answered === qs.length) { store(quizKey(key), right); prev = right; ring(); }
        });
        opts.appendChild(b);
      });
      box.appendChild(item);
    });
    upd();
  }
  /* bütün [data-quiz] kutularını ya da verilen tek kutuyu çizer */
  function quiz(target) {
    if (target) { var t = pick(target); if (t) drawQuiz(t); ring(); return; }
    $$('[data-quiz]').forEach(drawQuiz);
    ring();
  }

  /* ---------- lab adımları ---------- */
  var labDone = null;
  function labKey() { return 'yzm205.h' + week() + '.lab'; }
  function paintSteps() {
    var boxes = $$('input[data-done]'), n = 0, prog = doc.getElementById('labProg');
    boxes.forEach(function (b) {
      var on = !!labDone[b.getAttribute('data-done')];
      b.checked = on;
      var s = b.closest('.step'); if (s) s.classList.toggle('done', on);
      if (on) n++;
    });
    if (prog) prog.textContent = n + ' / ' + boxes.length + ' adım';
    ring();
  }
  function steps() {
    if (!labDone) {
      try { labDone = JSON.parse(store(labKey()) || '{}') || {}; } catch (e) { labDone = {}; }
    }
    $$('input[data-done]').forEach(function (b) {
      if (!bindOnce(b, 'Step')) return;
      b.addEventListener('change', function () {
        labDone[b.getAttribute('data-done')] = b.checked;
        store(labKey(), JSON.stringify(labDone));
        paintSteps();
      });
    });
    paintSteps();
  }

  /* ---------- Bugün akışında canlı işaretçi ---------- */
  var nowTimer = null;
  function toMin(s) {
    var m = /^(\d{1,2})[:.](\d{2})$/.exec(String(s || '').trim());
    return m ? (+m[1]) * 60 + (+m[2]) : null;
  }
  function now() {
    var rows = $$('.tl .row[data-start][data-end]');
    if (!rows.length) return;
    var d = new Date(), cur = d.getHours() * 60 + d.getMinutes(), day = String(d.getDay());
    rows.forEach(function (row) {
      var a = toMin(row.getAttribute('data-start')), b = toMin(row.getAttribute('data-end'));
      var dd = row.getAttribute('data-day');
      var dayOk = dd == null || dd.trim() === '' || dd.split(',').map(function (x) { return x.trim(); }).indexOf(day) > -1;
      var on = a != null && b != null && cur >= a && cur < b && dayOk;
      row.classList.toggle('now', on);
      var chip = $('.now-chip', row);
      if (on) {
        row.setAttribute('aria-current', 'time');
        if (!chip) {
          chip = el('span', 'chip now-chip', 'şu an');
          var host = row.children[1] || row;
          host.insertBefore(chip, host.firstChild);
        }
      } else {
        row.removeAttribute('aria-current');
        if (chip) chip.remove();
      }
    });
    if (!nowTimer) nowTimer = setInterval(now, 60000);
  }

  /* ---------- kavram kartları ---------- */
  function flip() {
    $$('.kart').forEach(function (k) {
      if (!bindOnce(k, 'Flip')) return;
      var isBtn = k.tagName === 'BUTTON';
      if (isBtn && !k.getAttribute('type')) k.setAttribute('type', 'button');
      if (!isBtn) {
        if (!k.hasAttribute('tabindex')) k.tabIndex = 0;
        k.setAttribute('role', 'button');
      }
      function set(on) {
        k.classList.toggle('flipped', on);
        k.setAttribute('aria-pressed', on ? 'true' : 'false');
        var f = $('.kart-on', k), b = $('.kart-arka', k);
        if (f) f.setAttribute('aria-hidden', on ? 'true' : 'false');
        if (b) b.setAttribute('aria-hidden', on ? 'false' : 'true');
      }
      set(k.classList.contains('flipped'));
      k.addEventListener('click', function () { set(!k.classList.contains('flipped')); });
      if (!isBtn) {
        k.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault();
            set(!k.classList.contains('flipped'));
          }
        });
      }
    });
  }

  /* ---------- görünüme girince belirme ---------- */
  function reveal() {
    var items = $$('.reveal:not(.in)');
    if (!items.length) return;
    if (!('IntersectionObserver' in window) || reduced()) {
      items.forEach(function (x) { x.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    items.forEach(function (x) { io.observe(x); });
  }

  /* ---------- sekmeler ---------- */
  function tabs() {
    $$('[role="tablist"]').forEach(function (list) {
      if (!bindOnce(list, 'Tabs')) return;
      var ts = $$(':scope > [role="tab"]', list);
      if (!ts.length) return;
      function panel(t) { var id = t.getAttribute('aria-controls'); return id ? doc.getElementById(id) : null; }
      function sel(i, focus) {
        ts.forEach(function (t, j) {
          var on = j === i;
          t.setAttribute('aria-selected', on ? 'true' : 'false');
          t.tabIndex = on ? 0 : -1;
          var p = panel(t); if (p) p.hidden = !on;
        });
        if (focus) ts[i].focus();
      }
      var cur = 0;
      ts.forEach(function (t, j) {
        if (t.getAttribute('aria-selected') === 'true') cur = j;
        if (t.tagName === 'BUTTON' && !t.getAttribute('type')) t.setAttribute('type', 'button');
        t.addEventListener('click', function () { sel(j); });
        t.addEventListener('keydown', function (e) {
          var n = null;
          if (e.key === 'ArrowRight') n = (j + 1) % ts.length;
          else if (e.key === 'ArrowLeft') n = (j - 1 + ts.length) % ts.length;
          else if (e.key === 'Home') n = 0;
          else if (e.key === 'End') n = ts.length - 1;
          if (n != null) { e.preventDefault(); sel(n, true); }
        });
      });
      sel(cur);
    });
  }

  /* ---------- ilerleme halkası ve rozet ---------- */
  var RING_SVG = '<svg viewBox="0 0 36 36" aria-hidden="true" focusable="false"><circle class="bg" cx="18" cy="18" r="15.5"/><circle class="fg" cx="18" cy="18" r="15.5" pathLength="100"/></svg>';
  function ring() {
    var r = doc.getElementById('ring'), badge = doc.getElementById('badge');
    if (!r && !badge) return;
    var groups = $$('[data-quiz]'), boxes = $$('input[data-done]');
    var total = groups.length + boxes.length, done = 0;
    groups.forEach(function (g) { if (store(quizKey(g.getAttribute('data-quiz'))) != null) done++; });
    boxes.forEach(function (b) { if (b.checked) done++; });
    var pct = total ? Math.round(done * 100 / total) : 0;
    if (r) {
      if (!$('svg', r)) r.insertAdjacentHTML('afterbegin', RING_SVG);
      var t = $('[data-pct]', r);
      if (!t) { t = el('span'); t.setAttribute('data-pct', ''); r.appendChild(t); }
      r.style.setProperty('--p', pct);
      var fg = $('.fg', r); if (fg) fg.style.strokeDasharray = pct + ' 100';
      t.textContent = '%' + pct;
      r.title = 'Bu haftanın ilerlemesi: %' + pct + ' (' + done + ' / ' + total + ')';
    }
    if (badge) {
      var full = total > 0 && done >= total;
      if (full && !badge.textContent.trim() && badge.getAttribute('data-text')) badge.textContent = badge.getAttribute('data-text');
      badge.hidden = !full;
    }
  }

  /* ---------- zarf animasyonu ---------- */
  function packet(lane, o) {
    lane = pick(lane); o = o || {};
    return new Promise(function (resolve) {
      if (!lane) { resolve(null); return; }
      var p = el('div', 'packet' + (o.cls ? ' ' + o.cls : ''), o.label == null ? '' : String(o.label));
      p.setAttribute('aria-hidden', 'true');
      lane.appendChild(p);
      var back = o.from === 'right' || o.to === 'left';
      var dist = Math.max(0, lane.clientWidth - p.offsetWidth - 12);
      var ms = o.ms == null ? 900 : Math.max(0, +o.ms || 0);
      var x0 = back ? dist : 0, x1 = back ? 0 : dist, fin = false, timer = null;
      function end() {
        if (fin) return;
        fin = true; clearTimeout(timer);
        p.removeEventListener('transitionend', onEnd);
        if (!o.keep) {
          setTimeout(function () { p.classList.add('gone'); setTimeout(function () { p.remove(); }, 220); }, reduced() ? 700 : 120);
        }
        resolve(p);
      }
      function onEnd(e) { if (e.propertyName === 'transform') end(); }
      p.style.transform = 'translate(' + x0 + 'px,-50%)';
      if (reduced() || ms === 0) {
        p.style.transform = 'translate(' + x1 + 'px,-50%)';
        p.classList.add('show');
        end();
        return;
      }
      p.style.transitionDuration = ms + 'ms, 200ms';
      void p.offsetWidth; /* başlangıç konumunu uygula */
      p.classList.add('show');
      p.style.transform = 'translate(' + x1 + 'px,-50%)';
      p.addEventListener('transitionend', onEnd);
      timer = setTimeout(end, ms + 150);
    });
  }

  /* ---------- daktilo ---------- */
  function type(target, text, ms) {
    target = pick(target);
    ms = ms == null ? 28 : ms;
    return new Promise(function (res) {
      if (!target) { res(); return; }
      text = String(text == null ? '' : text);
      if (reduced() || ms <= 0 || !text) { target.textContent = text; res(); return; }
      var i = 0;
      target.textContent = '';
      (function step() {
        i++;
        target.textContent = text.slice(0, i);
        if (i >= text.length) res(); else setTimeout(step, ms);
      })();
    });
  }

  /* ---------- tahmin kutusu ---------- */
  function predict(target, o) {
    var host = pick(target);
    if (!host) return null;
    o = o || {};
    var options = o.options || [], chosen = null, ran = false;
    var box = el('div', 'predict');
    var q = el('p', 'pq');
    q.innerHTML = '<span class="lbl">Tahmin et</span>' + fmt(o.q || 'Ne olacak?');
    var opts = el('div', 'popts');
    opts.setAttribute('role', 'group'); opts.setAttribute('aria-label', 'Tahminin');
    var row = el('div', 'btnrow');
    var runB = el('button', 'btn primary', o.runText || 'Çalıştır'); runB.type = 'button'; runB.disabled = true;
    var again = el('button', 'btn', 'Yeniden dene'); again.type = 'button'; again.hidden = true;
    var hint = el('span', 'small muted', 'Önce bir tahmin seç.');
    row.appendChild(runB); row.appendChild(again); row.appendChild(hint);
    var res = el('p', 'presult'); res.setAttribute('aria-live', 'polite');
    var ne = el('p', 'ne'); ne.hidden = true; ne.setAttribute('aria-live', 'polite');
    options.forEach(function (t, i) {
      var b = el('button', 'btn popt'); b.type = 'button';
      b.setAttribute('aria-pressed', 'false');
      b.innerHTML = fmt(t);
      b.addEventListener('click', function () {
        if (ran) return;
        chosen = i;
        $$('.popt', opts).forEach(function (x, j) { x.setAttribute('aria-pressed', j === i ? 'true' : 'false'); });
        runB.disabled = false; hint.hidden = true;
      });
      opts.appendChild(b);
    });
    runB.addEventListener('click', function () {
      if (chosen == null || ran) return;
      ran = true; runB.disabled = true;
      $$('.popt', opts).forEach(function (x, j) {
        x.setAttribute('aria-disabled', 'true');
        if (j === o.correct) x.classList.add('right');
        else if (j === chosen) x.classList.add('wrong');
      });
      try { if (o.run) o.run(host); } catch (e) { setTimeout(function () { throw e; }); }
      var ok = chosen === o.correct;
      var right = String(options[o.correct] == null ? '' : options[o.correct]).replace(/[.?!]+$/, '');
      res.className = 'presult ' + (ok ? 'ok' : 'bad');
      res.innerHTML = ok ? 'Tahminin tuttu.' : 'Tahminin tutmadı. Doğrusu: ' + fmt(right) + '.';
      if (o.seen) { ne.innerHTML = '<b>Ne gördün?</b>' + fmt(o.seen); ne.hidden = false; }
      again.hidden = false;
    });
    function reset() {
      chosen = null; ran = false;
      runB.disabled = true; hint.hidden = false; again.hidden = true;
      res.className = 'presult'; res.textContent = ''; ne.hidden = true;
      $$('.popt', opts).forEach(function (x) {
        x.setAttribute('aria-pressed', 'false');
        x.removeAttribute('aria-disabled');
        x.classList.remove('right', 'wrong');
      });
      if (o.reset) { try { o.reset(host); } catch (e) { setTimeout(function () { throw e; }); } }
    }
    again.addEventListener('click', function () { reset(); var f = $('.popt', opts); if (f) f.focus(); });
    box.appendChild(q); box.appendChild(opts); box.appendChild(row); box.appendChild(res); box.appendChild(ne);
    host.insertBefore(box, host.firstChild);
    return { reset: reset, el: box };
  }

  /* ---------- canlı editör ---------- */
  var edCount = 0;
  /* iframe içine gömülen yakalayıcı: console ve hataları üst sayfaya iletir */
  function capture(id) {
    return '<script>(function(){var I=' + JSON.stringify(id) + ';' +
      'function s(v){try{if(typeof v==="string")return v;if(v instanceof Error)return v.name+": "+v.message;' +
      'if(typeof v==="function")return "function "+(v.name||"");var j=JSON.stringify(v);return j===undefined?String(v):j;}catch(e){return String(v);}}' +
      'function P(t,a,l){try{parent.postMessage({ders:I,t:t,m:Array.prototype.map.call(a,s).join(" "),l:l||0},"*");}catch(e){}}' +
      'console.log=function(){P("log",arguments)};console.info=console.log;console.debug=console.log;' +
      'console.warn=function(){P("warn",arguments)};console.error=function(){P("err",arguments)};' +
      'window.alert=function(m){P("log",["[alert] "+s(m)])};' +
      'window.onerror=function(m,u,l){P("err",[String(m)],l);return true};' +
      'window.addEventListener("unhandledrejection",function(e){P("err",["Promise: "+s(e.reason)]);e.preventDefault();});' +
      '})();<\/script>';
  }
  function safe(code, tag) { return String(code || '').replace(new RegExp('<\\/(' + tag + ')', 'gi'), '<\\/$1'); }

  function editor(target, o) {
    var box = pick(target);
    if (!box) return null;
    o = o || {};
    var mode = o.mode === 'css' || o.mode === 'js' ? o.mode : 'html';
    var id = 'ders-ed-' + (++edCount);
    var tasks = o.tasks || [];
    var timer = null, dirty = false, jsStart = 1, jsLines = 0;
    var loaded = Promise.resolve();
    box.classList.add('ed');
    box.innerHTML = '';

    var ta = el('textarea');
    ta.spellcheck = false;
    ta.setAttribute('autocapitalize', 'off');
    ta.setAttribute('autocomplete', 'off');
    ta.rows = o.rows || (mode === 'html' ? 12 : 8);
    ta.value = mode === 'html' ? (o.html || '') : mode === 'css' ? (o.css || '') : (o.js || '');

    if (o.presets) {
      var pr = el('div', 'btnrow');
      pr.setAttribute('role', 'group'); pr.setAttribute('aria-label', 'Hazır örnekler');
      Object.keys(o.presets).forEach(function (name) {
        var b = el('button', 'btn', name); b.type = 'button';
        b.addEventListener('click', function () { api.set(o.presets[name]); ta.focus(); });
        pr.appendChild(b);
      });
      box.appendChild(pr);
    }

    var cols = el('div', 'sim-cols'), left = el('div', 'ed-left'), right = el('div', 'ed-right');
    if (mode !== 'html' && o.html) {
      left.appendChild(el('span', 'lbl', 'HTML (sabit)'));
      var fx = el('pre', 'code ed-fixed'); fx.textContent = String(o.html).trim();
      left.appendChild(fx);
    }
    var lab = el('label', 'f');
    lab.appendChild(el('span', 'lbl', mode === 'html' ? 'HTML kodun' : mode === 'css' ? 'CSS kodun' : 'JavaScript kodun'));
    lab.appendChild(ta);
    left.appendChild(lab);
    var runB = null;
    if (mode === 'js') {
      var rb = el('div', 'btnrow');
      runB = el('button', 'btn primary', 'Çalıştır'); runB.type = 'button';
      rb.appendChild(runB);
      rb.appendChild(el('span', 'small muted', 'ya da Ctrl+Enter'));
      left.appendChild(rb);
    }

    var fr = el('div', 'frame'), bar = el('div', 'bar');
    bar.appendChild(el('i')); bar.appendChild(el('span', null, o.title || 'onizleme.html'));
    fr.appendChild(bar);
    var ifr = el('iframe');
    ifr.title = 'Canlı önizleme';
    /* görev kontrolü için aynı köken gerekir; html ve css kiplerinde betik yine çalışmaz */
    ifr.setAttribute('sandbox', mode === 'js'
      ? (tasks.length ? 'allow-scripts allow-same-origin' : 'allow-scripts')
      : (tasks.length ? 'allow-same-origin' : ''));
    ifr.style.height = (o.height || 260) + 'px';
    fr.appendChild(ifr);
    right.appendChild(el('span', 'lbl', 'Tarayıcının çizdiği'));
    right.appendChild(fr);
    var con = null;
    if (mode === 'js') {
      right.appendChild(el('span', 'lbl', 'Konsol'));
      con = el('div', 'console');
      con.setAttribute('role', 'log'); con.setAttribute('aria-live', 'polite');
      right.appendChild(con);
    }
    cols.appendChild(left); cols.appendChild(right);
    box.appendChild(cols);

    function build() {
      var v = ta.value;
      if (mode === 'html') {
        var style = o.css ? '<style>' + safe(o.css, 'style') + '</style>' : '';
        return style + (v.trim() ? v : '<p style="color:#888;font-family:sans-serif">Kutuya bir şey yaz.</p>');
      }
      var headCss = mode === 'css' ? v : (o.css || '');
      var head = '<!doctype html><html lang="tr"><head><meta charset="utf-8">' +
        (mode === 'js' ? capture(id) : '') +
        (headCss ? '<style>' + safe(headCss, 'style') + '</style>' : '') + '</head><body>\n';
      if (mode === 'css') return head + (o.html || '') + '\n</body></html>';
      var pre = head + (o.html || '') + '\n<script>\n';
      jsStart = pre.split('\n').length;
      jsLines = v.split('\n').length;
      return pre + safe(v, 'script') + '\n<\/script></body></html>';
    }
    function render() {
      clearTimeout(timer); timer = null; dirty = false;
      if (con) con.innerHTML = '';
      loaded = new Promise(function (res) {
        var t = setTimeout(res, 2000);
        ifr.addEventListener('load', function fn() { ifr.removeEventListener('load', fn); clearTimeout(t); res(); });
      });
      ifr.srcdoc = build();
      return loaded;
    }
    function flush() { if (dirty || timer) render(); return loaded; }

    ta.addEventListener('input', function () {
      dirty = true;
      if (mode !== 'js') { clearTimeout(timer); timer = setTimeout(render, 250); }
    });
    ta.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); render(); }
    });
    if (runB) runB.addEventListener('click', render);

    if (con) {
      window.addEventListener('message', function (e) {
        var d = e.data;
        if (!d || d.ders !== id || e.source !== ifr.contentWindow) return;
        var text = String(d.m);
        if (d.l) {
          var n = d.l - jsStart + 1;
          if (n >= 1 && n <= jsLines) text += ' (' + n + '. satır)';
        }
        log(con, text, d.t);
      });
    }

    if (tasks.length) {
      var list = el('div', 'tasks');
      tasks.forEach(function (t, i) {
        var row = el('div', 'task');
        var tx = el('p', 'task-text');
        tx.innerHTML = '<span class="task-n">Görev ' + (i + 1) + '</span> ' + fmt(t.text);
        var b = el('button', 'btn', 'Kontrol et'); b.type = 'button';
        var msg = el('p', 'task-msg'); msg.setAttribute('aria-live', 'polite');
        b.addEventListener('click', function () {
          flush().then(function () {
            var ok = false;
            try { ok = !!t.check(ifr.contentDocument, ifr.contentWindow, ta.value); } catch (e) { ok = false; }
            row.classList.toggle('ok', ok);
            row.classList.toggle('bad', !ok);
            msg.innerHTML = ok ? '<b>Tamam.</b> Görev tuttu.' : '<b>Henüz değil.</b> ' + fmt(t.hint || 'Kodunu bir daha oku.');
          });
        });
        row.appendChild(tx); row.appendChild(b); row.appendChild(msg);
        list.appendChild(row);
      });
      box.appendChild(list);
    }

    var api = {
      set: function (code) { ta.value = code == null ? '' : String(code); return render(); },
      get: function () { return ta.value; },
      run: render,
      frame: ifr,
      console: con,
      el: box
    };
    render();
    return api;
  }

  /* ---------- başlatma ---------- */
  var inited = false;
  function init() {
    if (inited) return;
    inited = true;
    Ders.week = week();
    theme();
    copy();
    steps();
    quiz();
    now();
    flip();
    reveal();
    tabs();
    ring();
  }

  var Ders = window.Ders = {
    $: $, $$: $$, el: el, esc: esc, fmt: fmt, store: store, week: week(),
    reduced: reduced, rgb: rgb, log: log,
    theme: theme, copy: copy, quiz: quiz, steps: steps, now: now, flip: flip,
    reveal: reveal, tabs: tabs, ring: ring, packet: packet, type: type,
    predict: predict, editor: editor, init: init
  };

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', init);
  else setTimeout(init, 0);
})();
