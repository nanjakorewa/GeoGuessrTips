/**
 * Generate missing Japanese prefecture pages.
 * Run: node scripts/generate-prefecture-pages.js
 */
const fs = require("fs");
const path = require("path");

const BASE = path.join(__dirname, "..", "src", "content", "rule", "asia", "japan");

// All 47 prefectures grouped by region
const REGIONS = {
  tohoku: [
    { dir: "hokkaido", ja: "北海道", en: "Hokkaido", es: "Hokkaido", id: "Hokkaido", flag: "Flag_of_Hokkaido_Prefecture.png" },
    { dir: "aomori", ja: "青森", en: "Aomori", es: "Aomori", id: "Aomori", flag: "Aomori.svg" },
    { dir: "iwate", ja: "岩手", en: "Iwate", es: "Iwate", id: "Iwate", flag: "Iwate.svg" },
    { dir: "miyagi", ja: "宮城", en: "Miyagi", es: "Miyagi", id: "Miyagi", flag: "Miyagi.svg" },
    { dir: "akita", ja: "秋田", en: "Akita", es: "Akita", id: "Akita", flag: "Akita.svg" },
    { dir: "yamagata", ja: "山形", en: "Yamagata", es: "Yamagata", id: "Yamagata", flag: "Yamagata.svg" },
    { dir: "fukushima", ja: "福島", en: "Fukushima", es: "Fukushima", id: "Fukushima", flag: "Fukushima.svg" },
  ],
  kanto: [
    { dir: "ibaraki", ja: "茨城", en: "Ibaraki", es: "Ibaraki", id: "Ibaraki", flag: "Ibaraki.svg" },
    { dir: "tochigi", ja: "栃木", en: "Tochigi", es: "Tochigi", id: "Tochigi", flag: "Tochigi.svg" },
    { dir: "gunma", ja: "群馬", en: "Gunma", es: "Gunma", id: "Gunma", flag: "Gunma.svg" },
    { dir: "saitama", ja: "埼玉", en: "Saitama", es: "Saitama", id: "Saitama", flag: "Saitama.svg" },
    { dir: "chiba", ja: "千葉", en: "Chiba", es: "Chiba", id: "Chiba", flag: "Chiba.svg" },
    { dir: "tokyo", ja: "東京", en: "Tokyo", es: "Tokio", id: "Tokyo", flag: "Tokyo.svg" },
    { dir: "kanagawa", ja: "神奈川", en: "Kanagawa", es: "Kanagawa", id: "Kanagawa", flag: "Kanagawa.svg" },
  ],
  chubu: [
    { dir: "niigata", ja: "新潟", en: "Niigata", es: "Niigata", id: "Niigata", flag: "Niigata.svg" },
    { dir: "toyama", ja: "富山", en: "Toyama", es: "Toyama", id: "Toyama", flag: "Toyama.svg" },
    { dir: "ishikawa", ja: "石川", en: "Ishikawa", es: "Ishikawa", id: "Ishikawa", flag: "Ishikawa.svg" },
    { dir: "fukui", ja: "福井", en: "Fukui", es: "Fukui", id: "Fukui", flag: "Fukui.svg" },
    { dir: "yamanashi", ja: "山梨", en: "Yamanashi", es: "Yamanashi", id: "Yamanashi", flag: "Yamanashi.svg" },
    { dir: "nagano", ja: "長野", en: "Nagano", es: "Nagano", id: "Nagano", flag: "Nagano.svg" },
    { dir: "gifu", ja: "岐阜", en: "Gifu", es: "Gifu", id: "Gifu", flag: "Gifu.svg" },
    { dir: "shizuoka", ja: "静岡", en: "Shizuoka", es: "Shizuoka", id: "Shizuoka", flag: "Shizuoka.svg" },
    { dir: "aichi", ja: "愛知", en: "Aichi", es: "Aichi", id: "Aichi", flag: "Aichi.svg" },
  ],
  kinki: [
    { dir: "mie", ja: "三重", en: "Mie", es: "Mie", id: "Mie", flag: "Mie.svg" },
    { dir: "shiga", ja: "滋賀", en: "Shiga", es: "Shiga", id: "Shiga", flag: "Shiga.svg" },
    { dir: "kyoto", ja: "京都", en: "Kyoto", es: "Kioto", id: "Kyoto", flag: "Kyoto.svg" },
    { dir: "osaka", ja: "大阪", en: "Osaka", es: "Osaka", id: "Osaka", flag: "Osaka.svg" },
    { dir: "hyogo", ja: "兵庫", en: "Hyogo", es: "Hyogo", id: "Hyogo", flag: "Hyogo.svg" },
    { dir: "nara", ja: "奈良", en: "Nara", es: "Nara", id: "Nara", flag: "Nara.svg" },
    { dir: "wakayama", ja: "和歌山", en: "Wakayama", es: "Wakayama", id: "Wakayama", flag: "Wakayama.svg" },
  ],
  chugoku: [
    { dir: "tottori", ja: "鳥取", en: "Tottori", es: "Tottori", id: "Tottori", flag: "Tottori.svg" },
    { dir: "shimane", ja: "島根", en: "Shimane", es: "Shimane", id: "Shimane", flag: "Shimane.svg" },
    { dir: "okayama", ja: "岡山", en: "Okayama", es: "Okayama", id: "Okayama", flag: "Okayama.svg" },
    { dir: "hiroshima", ja: "広島", en: "Hiroshima", es: "Hiroshima", id: "Hiroshima", flag: "Hiroshima.svg" },
    { dir: "yamaguchi", ja: "山口", en: "Yamaguchi", es: "Yamaguchi", id: "Yamaguchi", flag: "Yamaguchi.svg" },
  ],
  shikoku: [
    { dir: "tokushima", ja: "徳島", en: "Tokushima", es: "Tokushima", id: "Tokushima", flag: "Tokushima.svg" },
    { dir: "kagawa", ja: "香川", en: "Kagawa", es: "Kagawa", id: "Kagawa", flag: "Kagawa.svg" },
    { dir: "ehime", ja: "愛媛", en: "Ehime", es: "Ehime", id: "Ehime", flag: "Ehime.svg" },
    { dir: "kochi", ja: "高知", en: "Kochi", es: "Kochi", id: "Kochi", flag: "Kochi.svg" },
  ],
  kyusyu: [
    { dir: "fukuoka", ja: "福岡", en: "Fukuoka", es: "Fukuoka", id: "Fukuoka", flag: "Fukuoka.svg" },
    { dir: "saga", ja: "佐賀", en: "Saga", es: "Saga", id: "Saga", flag: "Saga.svg" },
    { dir: "nagasaki", ja: "長崎", en: "Nagasaki", es: "Nagasaki", id: "Nagasaki", flag: "Nagasaki.svg" },
    { dir: "kumamoto", ja: "熊本", en: "Kumamoto", es: "Kumamoto", id: "Kumamoto", flag: "Kumamoto.svg" },
    { dir: "oita", ja: "大分", en: "Oita", es: "Oita", id: "Oita", flag: "Oita.svg" },
    { dir: "miyazaki", ja: "宮崎", en: "Miyazaki", es: "Miyazaki", id: "Miyazaki", flag: "Miyazaki.svg" },
    { dir: "kagoshima", ja: "鹿児島", en: "Kagoshima", es: "Kagoshima", id: "Kagoshima", flag: "Kagoshima.svg" },
    { dir: "okinawa", ja: "沖縄", en: "Okinawa", es: "Okinawa", id: "Okinawa", flag: "OKINAWA.svg" },
  ],
};

const today = new Date().toISOString().slice(0, 10);

function jaTemplate(pref, region) {
  return `---
title: "${pref.ja}"
date: ${today}
lastmod: ${today}
weight: 80
draft: false
keywords: [""]
sections: [""]
is_pref: true
flag: "${pref.flag}"
---

<div class="main-desciption country-description">
    <h2 class="section-title">全域</h2>
    <ul class="rule-list">
        <li>${pref.ja}県の特徴は現在調査中です。</li>
    </ul>
    {{% corp "asia/japan" "${region}/${pref.dir}" %}}
</div>
`;
}

function enTemplate(pref, region) {
  return `---
title: "${pref.en}"
date: ${today}
lastmod: ${today}
weight: 80
draft: false
keywords: [""]
sections: [""]
is_pref: true
flag: "${pref.flag}"
---

<div class="main-desciption country-description">
    <h2 class="section-title">Overview</h2>
    <ul class="rule-list">
        <li>Distinctive features of ${pref.en} Prefecture are currently being researched.</li>
    </ul>
    {{% corp "asia/japan" "${region}/${pref.dir}" %}}
</div>
`;
}

function esTemplate(pref, region) {
  return `---
title: "${pref.es}"
date: ${today}
lastmod: ${today}
weight: 80
draft: false
keywords: [""]
sections: [""]
is_pref: true
flag: "${pref.flag}"
---

<div class="main-desciption country-description">
    <h2 class="section-title">Visión general</h2>
    <ul class="rule-list">
        <li>Las características distintivas de la prefectura de ${pref.es} están siendo investigadas.</li>
    </ul>
    {{% corp "asia/japan" "${region}/${pref.dir}" %}}
</div>
`;
}

function idTemplate(pref, region) {
  return `---
title: "${pref.id}"
date: ${today}
lastmod: ${today}
weight: 80
draft: false
keywords: [""]
sections: [""]
is_pref: true
flag: "${pref.flag}"
---

<div class="main-desciption country-description">
    <h2 class="section-title">Gambaran Umum</h2>
    <ul class="rule-list">
        <li>Ciri khas Prefektur ${pref.id} sedang diteliti.</li>
    </ul>
    {{% corp "asia/japan" "${region}/${pref.dir}" %}}
</div>
`;
}

let created = 0;
let skipped = 0;

for (const [region, prefs] of Object.entries(REGIONS)) {
  for (const pref of prefs) {
    const dir = path.join(BASE, region, pref.dir);

    // Skip if directory already has content
    if (fs.existsSync(path.join(dir, "_index.ja.md"))) {
      skipped++;
      continue;
    }

    // Create directory
    fs.mkdirSync(dir, { recursive: true });

    // Generate 4 language files
    fs.writeFileSync(path.join(dir, "_index.ja.md"), jaTemplate(pref, region));
    fs.writeFileSync(path.join(dir, "_index.en.md"), enTemplate(pref, region));
    fs.writeFileSync(path.join(dir, "_index.es.md"), esTemplate(pref, region));
    fs.writeFileSync(path.join(dir, "_index.id.md"), idTemplate(pref, region));

    created++;
    console.log(`Created: ${region}/${pref.dir} (${pref.ja})`);
  }
}

console.log(`\nDone: ${created} prefectures created, ${skipped} already existed.`);
