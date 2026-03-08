import fs from 'fs';
import path from 'path';

const jaData = {
  1:  { group: 'beginner', diff: 1, image: '' },
  2:  { group: 'beginner', diff: 1, image: '' },
  3:  { group: 'beginner', diff: 1, image: '' },
  4:  { group: 'beginner', diff: 1, image: '' },
  5:  { group: 'beginner', diff: 1, image: '' },
  6:  { group: 'beginner', diff: 1, image: '' },
  7:  { group: 'beginner', diff: 2, image: 'map.jpg' },
  8:  { group: 'beginner', diff: 2, image: '' },
  9:  { group: 'beginner', diff: 1, image: '' },
  10: { group: 'beginner', diff: 2, image: '' },
  11: { group: 'beginner', diff: 2, image: '' },
  12: { group: 'beginner', diff: 2, image: '' },
  13: { group: 'beginner', diff: 2, image: '' },
  14: { group: 'beginner', diff: 2, image: '' },
  15: { group: 'beginner', diff: 2, image: '' },
  16: { group: 'beginner', diff: 2, image: '' },
  17: { group: 'beginner', diff: 2, image: '' },
  18: { group: 'beginner', diff: 3, image: '' },
  19: { group: 'beginner', diff: 3, image: '' },
};

const quiz7Questions = {
  en: 'Where is the Street View location? A, B, or C?',
  id: 'Di mana lokasi Street View saat ini? A, B, atau C?',
  es: '¿Dónde está la ubicación actual de Street View? ¿A, B o C?',
  pt: 'Onde está a localização atual do Street View? A, B ou C?',
};

const hintTranslations = {
  2: { en: 'Is the sun in the north or south?', id: 'Matahari terbit di utara atau selatan?', es: '¿El sol está en el norte o en el sur?', pt: 'O sol está no norte ou no sul?' },
  3: { en: 'Malaysia drives on the left, South Korea drives on the right.', id: 'Malaysia berkendara di kiri, Korea Selatan di kanan.', es: 'Malasia conduce por la izquierda, Corea del Sur por la derecha.', pt: 'A Malásia dirige pela esquerda, a Coreia do Sul pela direita.' },
  4: { en: 'Which side of the road are the cars driving on?', id: 'Di sisi jalan mana mobil-mobil berkendara?', es: '¿En qué lado de la carretera conducen los coches?', pt: 'Em que lado da estrada os carros estão dirigindo?' },
  5: { en: 'The answer to Q4 was the UK. It seems they use the same color license plates as the UK.', id: 'Jawaban Q4 adalah Inggris. Sepertinya mereka menggunakan warna plat nomor yang sama dengan Inggris.', es: 'La respuesta a Q4 fue el Reino Unido. Parece que usan placas del mismo color que el Reino Unido.', pt: 'A resposta da Q4 foi o Reino Unido. Parece que usam placas da mesma cor do Reino Unido.' },
  6: { en: '".jp" is common on Japanese websites, but what about this one?', id: '".jp" umum di situs web Jepang, tapi bagaimana dengan ini?', es: '".jp" es común en sitios web japoneses, pero ¿y este?', pt: '".jp" é comum em sites japoneses, mas e este?' },
  7: { en: 'When you open a map, north is always at the top.', id: 'Saat membuka peta, utara selalu di atas.', es: 'Al abrir un mapa, el norte siempre está arriba.', pt: 'Ao abrir um mapa, o norte está sempre no topo.' },
};

const langs = ['en', 'id', 'es', 'pt'];

for (let q = 1; q <= 19; q++) {
  for (const lang of langs) {
    const filePath = path.join('src/content/quiz', `quiz${q}`, `_index.${lang}.md`);
    if (!fs.existsSync(filePath)) { console.log(`SKIP: ${filePath}`); continue; }

    const content = fs.readFileSync(filePath, 'utf8');

    // Extract existing frontmatter (handle both LF and CRLF)
    const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fmMatch) { console.log(`NO FM: ${filePath}`); continue; }
    const fmBody = fmMatch[1];

    // Extract options and answer: {{% quiz "opt1" "opt2" "opt3" N %}}
    const optMatch = content.match(/quiz\s+"([^"]*?)"\s+"([^"]*?)"\s+"([^"]*?)"\s+(\d+)/);
    if (!optMatch) { console.log(`NO OPT: ${filePath}`); continue; }
    const options = [optMatch[1], optMatch[2], optMatch[3]];
    const answer = parseInt(optMatch[4]);

    // Extract map URL: {{% quizif "URL" %}}
    const mapMatch = content.match(/quizif\s+"([^"]+)"/);
    const mapUrl = mapMatch ? mapMatch[1] : '';

    // Extract body content after {{% maru%}}
    let bodyContent = '';
    const maruIdx = content.indexOf('{{% maru%}}');
    if (maruIdx !== -1) {
      let afterMaru = content.substring(maruIdx + '{{% maru%}}'.length);
      // Remove wrapping divs and notice shortcodes, keep inner text
      afterMaru = afterMaru.replace(/<div class="googlemap-if ansarea transparent-area">\s*/g, '');
      afterMaru = afterMaru.replace(/\s*<\/div>\s*$/g, '');
      afterMaru = afterMaru.replace(/{{% notice tip %}}\s*/g, '');
      afterMaru = afterMaru.replace(/\s*{{% \/notice %}}/g, '');
      bodyContent = afterMaru.trim();
    }

    // Build new frontmatter
    const ref = jaData[q];
    let lines = fmBody.split('\n');

    // Remove empty/useless fields and add new ones
    const newFields = [];
    if (!fmBody.includes('quiz_group:')) newFields.push(`quiz_group: "${ref.group}"`);
    if (!fmBody.includes('difficulty:')) newFields.push(`difficulty: ${ref.diff}`);
    // Escape quotes in options
    const escapedOpts = options.map(o => `"${o.replace(/"/g, '\\"')}"`);
    if (!fmBody.includes('quiz_options:')) newFields.push(`quiz_options: [${escapedOpts.join(', ')}]`);
    if (!fmBody.includes('quiz_answer:')) newFields.push(`quiz_answer: ${answer}`);
    if (!fmBody.includes('quiz_map_url:') && mapUrl) newFields.push(`quiz_map_url: "${mapUrl}"`);
    if (ref.image && !fmBody.includes('quiz_image:')) newFields.push(`quiz_image: "${ref.image}"`);
    if (q === 7 && quiz7Questions[lang] && !fmBody.includes('quiz_question:')) {
      newFields.push(`quiz_question: "${quiz7Questions[lang]}"`);
    }
    if (hintTranslations[q] && hintTranslations[q][lang] && !fmBody.includes('quiz_hint:')) {
      newFields.push(`quiz_hint: "${hintTranslations[q][lang]}"`);
    }

    // Detect line ending used in original file
    const eol = content.includes('\r\n') ? '\r\n' : '\n';
    const cleanFm = fmBody.replace(/\r\n/g, '\n').trimEnd();
    const newFm = cleanFm + '\n' + newFields.join('\n');
    const newContent = `---\n${newFm}\n---\n\n${bodyContent}\n`.replace(/\n/g, eol);
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`OK: ${filePath}`);
  }
}
