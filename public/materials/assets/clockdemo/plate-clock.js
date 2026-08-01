/* ===========================================================
   nanja素材 ナンバープレート時計 — 描画エンジン
   各HTMLファイルから buildPlateClock(設定) が呼ばれます。
   このファイルは編集しなくて大丈夫です。
   （色や文字を変えたいときは、各HTMLファイルの上のほうを編集してください）
   =========================================================== */
"use strict";

function buildPlateClock(CFG) {
  CFG = CFG || {};
  CFG.theme   = CFG.theme   || "white";
  CFG.country = CFG.country == null ? "EU" : CFG.country;
  CFG.sep     = CFG.sep     || "colon";
  CFG.sec     = !!CFG.sec;
  CFG.sub     = CFG.sub     || "date";
  CFG.subtext = CFG.subtext || "";
  CFG.screws  = CFG.screws !== false;
  CFG.scale   = CFG.scale   || 1;


  /* ------- 配色テーマ ------- */
  var THEMES = {
    white:  { bg:"#f2f2ef", ink:"#111111", border:"#111111", band:"#0b3ea8", bandInk:"#ffd200",
              sub:"#f2f2ef", subInk:"#111111", subLine:"#111111" },
    yellow: { bg:"#f5c518", ink:"#111111", border:"#111111", band:"#0b3ea8", bandInk:"#ffd200",
              sub:"#f5c518", subInk:"#111111", subLine:"#111111" },
    black:  { bg:"#15161a", ink:"#f4f4f2", border:"#f4f4f2", band:"#0b3ea8", bandInk:"#ffd200",
              sub:"#15161a", subInk:"#f4f4f2", subLine:"#f4f4f2" }
  };
  var T = THEMES[CFG.theme] || THEMES.white;

  /* ------- 寸法（実物 520x110mm の比率を基準） ------- */
  var U = 6;                         // 1mm = 6px
  var PW = 520 * U / 4;              // 780px
  var PH = 110 * U / 4;              // 165px
  var R  = 14;                       // 角丸
  var BAND_W = CFG.country === "none" ? 0 : 56;
  var SUB_W  = CFG.sub === "none" ? 0 : 62;
  var GLYPH_H = 100, GLYPH_W = 62, STROKE = 15;

  var svg = document.getElementById("plate");
  var NS = "http://www.w3.org/2000/svg";
  svg.setAttribute("viewBox", "0 0 " + PW + " " + PH);
  svg.setAttribute("width", Math.round(PW * CFG.scale));
  svg.setAttribute("height", Math.round(PH * CFG.scale));

  function el(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    (parent || svg).appendChild(e);
    return e;
  }

  /* ------- プレート本体 ------- */
  el("rect", {x:2, y:2, width:PW-4, height:PH-4, rx:R, ry:R,
    fill:T.bg, stroke:T.border, "stroke-width":6});
  // 内側の細い縁（打ち出しのふち）
  el("rect", {x:9, y:9, width:PW-18, height:PH-18, rx:R-5, ry:R-5,
    fill:"none", stroke:T.border, "stroke-width":2, opacity:.35});

  /* ------- 左の青帯（EU） ------- */
  if (BAND_W) {
    var band = el("g", {});
    el("path", {d:"M2," + (R+2) + " A" + R + "," + R + " 0 0 1 " + (R+2) + ",2 H" + BAND_W +
        " V" + (PH-2) + " H" + (R+2) + " A" + R + "," + R + " 0 0 1 2," + (PH-R-2) + " Z",
        fill:T.band}, band);
    // EU12星
    var cx = BAND_W/2 + 1, cy = 52, rr = 20;
    for (var i = 0; i < 12; i++) {
      var a = (i/12) * Math.PI * 2 - Math.PI/2;
      star(cx + Math.cos(a)*rr, cy + Math.sin(a)*rr, 4.6, T.bandInk, band);
    }
    // 国コード
    if (CFG.country !== "EU") {
      drawText(CFG.country, band, {
        x: 6, y: PH - 52, h: 34, color: T.bandInk, weight: 9, gap: 5, center: BAND_W - 4
      });
    }
  }
  function star(x, y, r, fill, parent) {
    var p = [];
    for (var i = 0; i < 10; i++) {
      var rad = (i % 2 === 0) ? r : r * 0.42;
      var a = (i/10) * Math.PI * 2 - Math.PI/2;
      p.push((x + Math.cos(a)*rad).toFixed(2) + "," + (y + Math.sin(a)*rad).toFixed(2));
    }
    el("polygon", {points:p.join(" "), fill:fill}, parent);
  }

  /* ------- 右のサブ欄（日付／自由文字） ------- */
  var subG = null;
  if (SUB_W) {
    subG = el("g", {});
    var sx = PW - SUB_W - 2;
    el("path", {d:"M" + sx + ",2 H" + (PW-R-2) + " A" + R + "," + R + " 0 0 1 " + (PW-2) + "," + (R+2) +
        " V" + (PH-R-2) + " A" + R + "," + R + " 0 0 1 " + (PW-R-2) + "," + (PH-2) + " H" + sx + " Z",
        fill:T.sub}, subG);
    el("line", {x1:sx, y1:8, x2:sx, y2:PH-8, stroke:T.subLine, "stroke-width":3, opacity:.85}, subG);
  }

  /* ------- 文字描画（自作グリフ） ------- */
  function drawText(str, parent, o) {
    var h = o.h, sc = h / GLYPH_H;
    var chars = str.split("");
    var measure = function (s) {
      var t = 0;
      chars.forEach(function (c, i) {
        t += (PLATE_GLYPH_W[c] || GLYPH_W) * s + (i ? (o.gap == null ? 8 : o.gap) * s : 0);
      });
      return t;
    };
    // 枠に収まらない場合は自動で縮小する
    var limit = o.center != null ? o.center : o.maxWidth;
    if (limit) {
      var t0 = measure(sc);
      if (t0 > limit) { sc = sc * (limit / t0); h = GLYPH_H * sc; }
    }
    var color = o.color, weight = (o.weight || STROKE) * sc;
    var gap = (o.gap == null ? 8 : o.gap) * sc;
    var total = measure(sc);
    var yTop = o.y + (o.h - h) / 2;   // 縮小しても縦位置を保つ
    o = Object.assign({}, o, {y: yTop});
    var x = o.center != null ? o.x + (o.center - total) / 2 : o.x;
    var g = el("g", {}, parent);
    chars.forEach(function (c) {
      var w = (PLATE_GLYPH_W[c] || GLYPH_W) * sc;
      if (PLATE_SEPARATORS[c]) {
        PLATE_SEPARATORS[c].forEach(function (r) {
          el("rect", {x:(x + r.x*sc).toFixed(2), y:(o.y + r.y*sc).toFixed(2),
            width:(r.w*sc).toFixed(2), height:(r.h*sc).toFixed(2), fill:color}, g);
        });
      } else if (PLATE_GLYPHS[c]) {
        el("path", {d:PLATE_GLYPHS[c], fill:"none", stroke:color, "stroke-width":weight/sc,
          "stroke-linecap":"butt", "stroke-linejoin":"miter", "stroke-miterlimit":3,
          transform:"translate(" + x.toFixed(2) + "," + o.y.toFixed(2) + ") scale(" + sc.toFixed(4) + ")"}, g);
      }
      x += w + gap;
    });
    return g;
  }

  /* ------- ネジ穴 ------- */
  if (CFG.screws) {
    var cxA = BAND_W + (PW - SUB_W - BAND_W) * 0.30;
    var cxB = BAND_W + (PW - SUB_W - BAND_W) * 0.70;
    var op = CFG.theme === "black" ? "rgba(255,255,255,.22)" : "rgba(0,0,0,.28)";
    [[cxA, 24], [cxB, 24], [cxA, PH-24], [cxB, PH-24]].forEach(function (p) {
      el("circle", {cx:p[0].toFixed(1), cy:p[1], r:5.5, fill:op});
    });
  }

  /* ------- 時計の更新 ------- */
  var SEP = {colon:":", dot:"·", dash:"-"}[CFG.sep] || ":";
  var mainG = null, subContent = null;

  function pad(v) { return ("0" + v).slice(-2); }

  function render() {
    var d = new Date();
    var txt = pad(d.getHours()) + SEP + pad(d.getMinutes()) + (CFG.sec ? SEP + pad(d.getSeconds()) : "");
    if (mainG) mainG.remove();
    var areaX = BAND_W + 8, areaW = PW - BAND_W - SUB_W - 16;
    mainG = drawText(txt, svg, {
      x: areaX, y: (PH - 96) / 2, h: 96, color: T.ink, weight: 15, gap: 9, center: areaW
    });

    if (subG) {
      if (subContent) subContent.remove();
      var lines;
      if (CFG.sub === "text" && CFG.subtext) lines = CFG.subtext.split(",").slice(0, 2);
      else lines = [pad(d.getMonth() + 1), String(d.getFullYear()).slice(-2)];
      subContent = el("g", {}, subG);
      var sx2 = PW - SUB_W - 2, h2 = 42;
      lines.forEach(function (t, i) {
        drawText(t, subContent, {
          x: sx2 + 4, y: (i === 0 ? 18 : PH - h2 - 18), h: h2,
          color: T.subInk, weight: 15, gap: 5, center: SUB_W - 8
        });
      });
    }
  }
  render();
  setInterval(render, CFG.sec ? 250 : 2000);
}
