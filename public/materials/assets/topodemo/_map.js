/* ===========================================================
   nanja素材 地形図テーマ — 地図の描画エンジン
   等高線・道路・記号をその場で描いています（画像素材なし・完全オリジナル）。
   外部への通信は一切ありません。
   =========================================================== */
"use strict";

/* ---------- 決定的な擬似乱数（毎回同じ地形になります） ---------- */
function makeRandom(seed) {
  var s = seed || 12345;
  return function () {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

/* ---------- 高さの地形をつくる（丘をいくつも重ねる） ---------- */
function makeHeightField(opt) {
  opt = opt || {};
  var rnd = makeRandom(opt.seed || 7);
  var hills = [];
  var n = opt.hills || 14;
  for (var i = 0; i < n; i++) {
    hills.push({
      x: rnd(), y: rnd(),
      r: 0.06 + rnd() * 0.26,
      a: (rnd() < 0.22 ? -1 : 1) * (0.35 + rnd() * 1.0)
    });
  }
  // 大きな山を1つ（主役の山）
  if (opt.mainPeak !== false) {
    hills.push({x: opt.peakX || 0.5, y: opt.peakY || 0.5, r: 0.34, a: 2.4});
  }
  return function (x, y) {
    var h = 0;
    for (var i = 0; i < hills.length; i++) {
      var d = hills[i];
      var dx = (x - d.x), dy = (y - d.y) * (opt.yScale || 1);
      var q = (dx*dx + dy*dy) / (d.r * d.r);
      h += d.a * Math.exp(-q);
    }
    // ゆるやかな傾斜
    h += (opt.tiltX || 0.25) * x + (opt.tiltY || -0.15) * y;
    return h;
  };
}

/* ---------- マーチングスクエアで等高線を取り出す ---------- */
function contourPaths(field, W, H, cols, rows, level) {
  var gw = W / cols, gh = H / rows;
  var v = [];
  for (var j = 0; j <= rows; j++) {
    v[j] = [];
    for (var i = 0; i <= cols; i++) v[j][i] = field(i / cols, j / rows);
  }
  var segs = [];
  var ip = function (a, b, pa, pb) {  // 線形補間
    var t = (level - pa) / (pb - pa || 1e-6);
    return [a[0] + (b[0]-a[0])*t, a[1] + (b[1]-a[1])*t];
  };
  for (var j2 = 0; j2 < rows; j2++) {
    for (var i2 = 0; i2 < cols; i2++) {
      var x0 = i2*gw, y0 = j2*gh, x1 = x0+gw, y1 = y0+gh;
      var p = [v[j2][i2], v[j2][i2+1], v[j2+1][i2+1], v[j2+1][i2]];
      var c = [[x0,y0],[x1,y0],[x1,y1],[x0,y1]];
      var idx = (p[0]>level?1:0) | (p[1]>level?2:0) | (p[2]>level?4:0) | (p[3]>level?8:0);
      if (idx === 0 || idx === 15) continue;
      var e = [];
      if ((idx & 1) !== (idx & 2) >> 1) e.push(ip(c[0], c[1], p[0], p[1]));
      if ((idx & 2) >> 1 !== (idx & 4) >> 2) e.push(ip(c[1], c[2], p[1], p[2]));
      if ((idx & 4) >> 2 !== (idx & 8) >> 3) e.push(ip(c[2], c[3], p[2], p[3]));
      if ((idx & 8) >> 3 !== (idx & 1)) e.push(ip(c[3], c[0], p[3], p[0]));
      for (var k = 0; k + 1 < e.length; k += 2) segs.push([e[k], e[k+1]]);
    }
  }
  // 線分をつなげて滑らかなパスにする
  return joinSegments(segs, Math.min(gw, gh) * 0.6);
}

function joinSegments(segs, tol) {
  var used = new Array(segs.length).fill(false);
  var key = function (p) { return Math.round(p[0]/tol) + "_" + Math.round(p[1]/tol); };
  var map = {};
  segs.forEach(function (s, i) {
    [key(s[0]), key(s[1])].forEach(function (k) {
      (map[k] = map[k] || []).push(i);
    });
  });
  var paths = [];
  for (var i = 0; i < segs.length; i++) {
    if (used[i]) continue;
    used[i] = true;
    var pts = [segs[i][0], segs[i][1]];
    // 前後に伸ばす
    for (var dir = 0; dir < 2; dir++) {
      var grow = true;
      while (grow) {
        grow = false;
        var end = dir === 0 ? pts[pts.length-1] : pts[0];
        var cand = map[key(end)] || [];
        for (var c2 = 0; c2 < cand.length; c2++) {
          var j = cand[c2];
          if (used[j]) continue;
          var s2 = segs[j];
          var near0 = Math.hypot(s2[0][0]-end[0], s2[0][1]-end[1]) < tol;
          var near1 = Math.hypot(s2[1][0]-end[0], s2[1][1]-end[1]) < tol;
          if (!near0 && !near1) continue;
          var add = near0 ? s2[1] : s2[0];
          if (dir === 0) pts.push(add); else pts.unshift(add);
          used[j] = true; grow = true; break;
        }
      }
    }
    if (pts.length > 3) paths.push(pts);
  }
  return paths;
}

function pathToD(pts, close) {
  var d = "M" + pts[0][0].toFixed(1) + "," + pts[0][1].toFixed(1);
  for (var i = 1; i < pts.length; i++) d += "L" + pts[i][0].toFixed(1) + "," + pts[i][1].toFixed(1);
  if (close) d += "Z";
  return d;
}

/* ---------- 地図をまるごと描く ---------- */
function drawTopoMap(svg, W, H, opt) {
  opt = opt || {};
  var NS = "http://www.w3.org/2000/svg";
  var mk = function (tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    (parent || svg).appendChild(e);
    return e;
  };
  var rnd = makeRandom(opt.seed || 7);
  var field = makeHeightField({seed: opt.seed || 7, hills: opt.hills || 14,
    peakX: opt.peakX, peakY: opt.peakY, mainPeak: opt.mainPeak, yScale: H / W});

  // 背景（地図の紙色）
  mk("rect", {x:0, y:0, width:W, height:H, fill:"var(--paper)"});

  var g = mk("g", {});
  // 等高線（10本ごとに太い計曲線）
  var lo = -1.2, hi = 3.2, step = opt.step || 0.20;
  var idx = 0;
  for (var lv = lo; lv <= hi; lv += step) {
    var bold = (idx % 5 === 0);
    var ps = contourPaths(field, W, H, opt.cols || 64, opt.rows || 40, lv);
    ps.forEach(function (pts) {
      mk("path", {d: pathToD(pts), fill:"none",
        stroke: bold ? "var(--contour-bold)" : "var(--contour)",
        "stroke-width": bold ? 2.8 : 1.5,
        "stroke-linejoin":"round", "stroke-linecap":"round"}, g);
    });
    idx++;
  }

  // 道路（黄色い主要道＋灰色の道）
  if (opt.roads !== false) {
    var road = function (pts, w, color, dash) {
      mk("path", {d: pathToD(pts), fill:"none", stroke:"#6b6b6b",
        "stroke-width": w + 3, "stroke-linejoin":"round", "stroke-linecap":"round"}, g);
      mk("path", {d: pathToD(pts), fill:"none", stroke: color,
        "stroke-width": w, "stroke-linejoin":"round", "stroke-linecap":"round",
        "stroke-dasharray": dash || "none"}, g);
    };
    var mkCurve = function (y0, amp, seed) {
      var r2 = makeRandom(seed), pts = [];
      for (var x = -40; x <= W + 40; x += W / 14) {
        pts.push([x, y0 + Math.sin(x / (W/3.2)) * amp + (r2() - 0.5) * 28]);
      }
      return pts;
    };
    road(mkCurve(H * 0.78, 60, 11), 7, "var(--road-main)");
    road(mkCurve(H * 0.30, 44, 23), 5, "#e9e6df");
    // 破線の小道
    var trail = [];
    var r3 = makeRandom(31);
    for (var ty = -30; ty <= H + 30; ty += H / 10) {
      trail.push([W * 0.34 + Math.sin(ty / (H/2.4)) * 120 + (r3()-0.5) * 40, ty]);
    }
    mk("path", {d: pathToD(trail), fill:"none", stroke:"#5f5f5f",
      "stroke-width":3, "stroke-dasharray":"14 9", "stroke-linecap":"round"}, g);
  }

  // 樹木記号
  if (opt.symbols !== false) {
    for (var t2 = 0; t2 < (opt.trees == null ? 26 : opt.trees); t2++) {
      var tx = rnd() * W, ty2 = rnd() * H;
      mk("path", {d:"M" + tx.toFixed(1) + "," + (ty2+9).toFixed(1) +
        " l4.5,-9 l4.5,9", fill:"none", stroke:"var(--symbol)", "stroke-width":1.6}, g);
    }
  }
  return g;
}
