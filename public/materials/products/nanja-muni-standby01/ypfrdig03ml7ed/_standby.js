/* ===========================================================
   nanja素材 市区町村ランダム待機画面 — 動きの部分
   このファイルは編集しなくて大丈夫です。
   （見出しや切り替え間隔は各HTMLの下のほうで変えられます）
   外部への通信は一切ありません。全部このフォルダの中だけで動きます。
   =========================================================== */
"use strict";

function buildStandby(CFG) {
  CFG = CFG || {};
  var W = 1920, H = 1080, NS = "http://www.w3.org/2000/svg";
  var INTERVAL = Math.max(3, CFG.interval || 12) * 1000;

  /* ---------- 上下の文字 ---------- */
  // 空文字を指定したときは、その要素を消します（既定値には戻しません）
  function setText(id, val, def) {
    var el = document.getElementById(id);
    if (!el) return;
    el.textContent = (val === undefined || val === null) ? def : val;
    if (!el.textContent) el.style.display = "none";
  }
  setText("headText", CFG.heading, "まもなく開始");
  setText("headEn", CFG.headingEn, "STARTING SOON");
  setText("footNote", CFG.foot, "");

  /* ---------- 背景の地形図 ---------- */
  var bg = document.createElementNS(NS, "svg");
  bg.setAttribute("viewBox", "0 0 " + W + " " + H);
  bg.setAttribute("width", W); bg.setAttribute("height", H);
  document.getElementById("topo").appendChild(bg);
  drawTopoMap(bg, W, H, {seed: CFG.seed || 21, hills: 15, peakX: 0.22, peakY: 0.6});

  /* ---------- 全市区町村を1本のリストにする ---------- */
  var LIST = [];
  for (var slug in MUNI_DATA) {
    var pref = MUNI_DATA[slug];
    for (var i = 0; i < pref.m.length; i++) {
      LIST.push({slug: slug, pref: pref.p, vb: pref.vb, muni: pref.m[i]});
    }
  }
  document.getElementById("meta").textContent =
    "日本全国 " + LIST.length.toLocaleString("en-US") + " 市区町村";

  /* ---------- 順番をシャッフルして、ひと巡りするまで同じ所を出さない ---------- */
  var bag = [], bagPos = 0;
  function refill() {
    bag = LIST.slice();
    for (var i = bag.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = bag[i]; bag[i] = bag[j]; bag[j] = t;
    }
    bagPos = 0;
  }
  function next() {
    if (bagPos >= bag.length) refill();
    return bag[bagPos++];
  }
  refill();

  /* ---------- 県の地図を描く ---------- */
  var mapWrap = document.getElementById("mapWrap");
  function drawPref(entry) {
    var pref = MUNI_DATA[entry.slug];
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", entry.vb);
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    var gOther = document.createElementNS(NS, "g");
    gOther.setAttribute("fill", "var(--muni-other)");
    gOther.setAttribute("stroke", "var(--muni-line)");
    gOther.setAttribute("stroke-width", "0.7");
    gOther.setAttribute("stroke-linejoin", "round");
    var gPick = document.createElementNS(NS, "g");
    gPick.setAttribute("fill", "var(--muni-fill)");
    gPick.setAttribute("stroke", "var(--contour-bold)");
    gPick.setAttribute("stroke-width", "1.6");
    gPick.setAttribute("stroke-linejoin", "round");

    for (var i = 0; i < pref.m.length; i++) {
      var m = pref.m[i];
      var target = (m.c === entry.muni.c) ? gPick : gOther;
      for (var k = 0; k < m.d.length; k++) {
        var p = document.createElementNS(NS, "path");
        p.setAttribute("d", m.d[k]);
        target.appendChild(p);
      }
    }
    svg.appendChild(gOther);
    svg.appendChild(gPick);   // 選んだ市区町村を最前面に
    mapWrap.innerHTML = "";
    mapWrap.appendChild(svg);

    // 小さな市区町村でも場所が分かるように、まわりに丸をつける
    var bb;
    try { bb = gPick.getBBox(); } catch (e) { bb = null; }
    if (bb && bb.width >= 0) {
      var cx = bb.x + bb.width / 2, cy = bb.y + bb.height / 2;
      var r = Math.max(bb.width, bb.height) / 2 + 12;
      r = Math.min(Math.max(r, 34), 130);
      var ring = document.createElementNS(NS, "circle");
      ring.setAttribute("cx", cx.toFixed(1)); ring.setAttribute("cy", cy.toFixed(1));
      ring.setAttribute("r", r.toFixed(1));
      ring.setAttribute("fill", "none");
      ring.setAttribute("stroke", "var(--contour-bold)");
      ring.setAttribute("stroke-width", "2");
      ring.setAttribute("stroke-dasharray", "7 5");
      ring.setAttribute("opacity", ".85");
      svg.appendChild(ring);
    }
  }

  /* ---------- 表示を差し替える ---------- */
  var elPref = document.getElementById("prefName");
  var elName = document.getElementById("muniName");
  var fades = [mapWrap, elPref, elName];

  function apply(entry) {
    drawPref(entry);
    elPref.textContent = entry.pref;
    var nm = entry.muni.n;
    elName.textContent = nm;
    // 長い名前は自動で小さくする
    elName.className = "name fade" + (nm.length >= 7 ? " long2" : (nm.length >= 5 ? " long" : ""));
  }

  function show(entry) {
    fades.forEach(function (e) { e.classList.add("out"); });
    setTimeout(function () {
      apply(entry);
      fades.forEach(function (e) { e.classList.remove("out"); });
    }, 460);
  }

  /* ---------- 次の切り替えまでのバー ---------- */
  var barFill = document.getElementById("barFill");
  if (!CFG.bar) document.getElementById("bar").style.display = "none";
  var startedAt = 0;
  function tick() {
    if (CFG.bar) {
      var p = Math.min(1, (Date.now() - startedAt) / INTERVAL);
      barFill.style.width = (p * 100).toFixed(2) + "%";
    }
    requestAnimationFrame(tick);
  }

  /* ---------- 開始 ---------- */
  apply(next());
  startedAt = Date.now();
  tick();
  setInterval(function () {
    show(next());
    startedAt = Date.now();
  }, INTERVAL);
}
