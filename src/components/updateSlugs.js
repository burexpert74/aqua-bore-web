import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ⬇️ Поддержка __dirname в ES-модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Пути
const blogDir = path.resolve(__dirname, '../../public/blog');
const slugsFilePath = path.resolve(__dirname, '../../src/components/getBlogPosts.tsx');

// Получаем список slug'ов из .json файлов
function getSlugs() {
  console.log('📂 Читаем public/blog...');
  const files = fs.readdirSync(blogDir);
  const slugs = files
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''))
    .sort();

  console.log(`✅ Найдено slug-файлов: ${slugs.length}`);
  return slugs;
}

// Обновляем файл getBlogPosts.tsx между маркерами
function updateSlugsFile(slugs) {
  console.log('📄 Читаем getBlogPosts.tsx:', slugsFilePath);
  let content;

  try {
    content = fs.readFileSync(slugsFilePath, 'utf-8');
  } catch (e) {
    console.error('❌ Ошибка чтения файла:', e.message);
    process.exit(1);
  }

  const startMarker = '/* START SLUGS */';
  const endMarker = '/* END SLUGS */';
  const regex = /\/\* START SLUGS \*\/[\s\S]*?\/\* END SLUGS \*\//;

  console.log('--- RAW FILE CONTENT ---');
  console.log(JSON.stringify(content.slice(0, 500))); // первые 500 символов

  const match = content.match(regex);
  if (!match) {
    console.error('❌ Регулярка не нашла текст между маркерами');
    process.exit(1);
  }

  console.log('--- Содержимое файла между маркерами ---');
  console.log(match[0]);

  const newSlugsString = JSON.stringify(slugs, null, 2);
  const replacement = `${startMarker}\nexport const slugs = ${newSlugsString};\n${endMarker}`;

  console.log('--- Новый блок для вставки ---');
  console.log(replacement);

  const newContent = content.replace(regex, replacement);

  if (newContent === content) {
    console.log('⚠️ Замена не изменила содержимое файла — пропускаем запись.');
    return; // Не записываем и не коммитим
  }

  fs.writeFileSync(slugsFilePath, newContent, 'utf-8');
  console.log('✅ Файл getBlogPosts.tsx обновлён!');
}


// 🏁 Запуск
const slugs = getSlugs();
updateSlugsFile(slugs);
