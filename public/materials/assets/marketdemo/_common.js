/* ===========================================================
   nanja素材 マーケット配信セット 共通スクリプト
   ※外部への通信は一切行いません。表示はすべてダミーデータです
   銘柄名や数値を変えたいときは、各HTMLの上部にある設定を編集してください
   =========================================================== */
"use strict";

/* ティッカーテープを作る（同じ内容を2回並べて途切れなくループ） */
function buildTicker(el, items) {
  var track = document.createElement("div");
  track.className = "track";
  for (var loop = 0; loop < 2; loop++) {
    items.forEach(function (it) {
      var d = document.createElement("div");
      d.className = "it";
      var up = it.chg >= 0;
      var sym = document.createElement("span");
      sym.className = "sym"; sym.textContent = it.sym;
      var price = document.createElement("span");
      price.className = "num"; price.textContent = it.price;
      var chg = document.createElement("span");
      chg.className = "num " + (up ? "up" : "down");
      chg.textContent = (up ? "▲ +" : "▼ ") + it.chg.toFixed(2) + "%";
      d.appendChild(sym); d.appendChild(price); d.appendChild(chg);
      track.appendChild(d);
    });
  }
  el.innerHTML = "";
  el.appendChild(track);
}

/* ヒートマップを作る（finviz風のタイル） */
function buildHeatmap(el, cells) {
  el.innerHTML = "";
  cells.forEach(function (c) {
    var d = document.createElement("div");
    d.className = "cell";
    d.style.gridColumn = "span " + (c.w || 1);
    d.style.gridRow = "span " + (c.h || 1);
    d.style.background = heatColor(c.chg);
    d.style.fontSize = (c.fs || 26) + "px";
    var b = document.createElement("b"); b.textContent = c.sym;
    var s = document.createElement("span");
    s.textContent = (c.chg >= 0 ? "+" : "") + c.chg.toFixed(2) + "%";
    d.appendChild(b); d.appendChild(s);
    el.appendChild(d);
  });
}
/* 変化率→色（緑〜灰〜赤） */
function heatColor(chg) {
  var t = Math.max(-1, Math.min(1, chg / 4));
  if (t >= 0) {
    var g = [[0x39,0x3f,0x48],[0x1a,0x7f,0x37],[0x2e,0xa0,0x43]];
    return mix3(g, t);
  }
  var r = [[0x39,0x3f,0x48],[0x9b,0x2c,0x2c],[0xd6,0x40,0x45]];
  return mix3(r, -t);
}
function mix3(c, t) {
  var a = t < 0.5 ? c[0] : c[1], b = t < 0.5 ? c[1] : c[2];
  var k = t < 0.5 ? t * 2 : (t - 0.5) * 2;
  return "rgb(" + [0,1,2].map(function (i) {
    return Math.round(a[i] + (b[i] - a[i]) * k);
  }).join(",") + ")";
}

/* ローソク足チャートを描く（キャンバス／決定的な擬似ランダム） */
function drawCandles(canvas, opt) {
  opt = opt || {};
  var ctx = canvas.getContext("2d");
  var W = canvas.width, H = canvas.height;
  var n = opt.count || 60, seed = opt.seed || 7;
  var rnd = function () { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
  var price = 100, data = [], drift = opt.drift == null ? 0.12 : opt.drift;
  for (var i = 0; i < n; i++) {
    var o = price;
    var c = o + (rnd() - 0.5 + drift) * 3.2;
    var h = Math.max(o, c) + rnd() * 1.6;
    var l = Math.min(o, c) - rnd() * 1.6;
    data.push({ o: o, c: c, h: h, l: l });
    price = c;
  }
  var hi = Math.max.apply(null, data.map(function (d) { return d.h; }));
  var lo = Math.min.apply(null, data.map(function (d) { return d.l; }));
  var pad = (hi - lo) * 0.12; hi += pad; lo -= pad;
  var y = function (v) { return H - ((v - lo) / (hi - lo)) * H; };
  var cw = W / n, bw = Math.max(3, cw * 0.62);

  ctx.clearRect(0, 0, W, H);
  // 罫線
  ctx.strokeStyle = "rgba(139,152,165,.14)"; ctx.lineWidth = 1;
  for (var g = 1; g < 5; g++) {
    ctx.beginPath(); ctx.moveTo(0, H * g / 5); ctx.lineTo(W, H * g / 5); ctx.stroke();
  }
  // 移動平均線
  var ma = [], win = 8;
  data.forEach(function (d, i) {
    var s = 0, k = 0;
    for (var j = Math.max(0, i - win + 1); j <= i; j++) { s += data[j].c; k++; }
    ma.push(s / k);
  });
  ctx.strokeStyle = "#e3b341"; ctx.lineWidth = 2.5; ctx.beginPath();
  ma.forEach(function (v, i) { var X = i * cw + cw / 2; i ? ctx.lineTo(X, y(v)) : ctx.moveTo(X, y(v)); });
  ctx.stroke();
  // ローソク
  data.forEach(function (d, i) {
    var X = i * cw + cw / 2, up = d.c >= d.o;
    ctx.strokeStyle = ctx.fillStyle = up ? "#3fb950" : "#f85149";
    ctx.lineWidth = 1.6;
    ctx.beginPath(); ctx.moveTo(X, y(d.h)); ctx.lineTo(X, y(d.l)); ctx.stroke();
    var top = y(Math.max(d.o, d.c)), bot = y(Math.min(d.o, d.c));
    ctx.fillRect(X - bw / 2, top, bw, Math.max(2, bot - top));
  });
  return { last: data[n - 1].c, first: data[0].o };
}

/* 時計（ローカル時刻のみ。外部通信なし） */
function startClock(el) {
  var f = function () {
    var d = new Date();
    var p = function (v) { return ("0" + v).slice(-2); };
    el.textContent = p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds());
  };
  f(); setInterval(f, 1000);
}
