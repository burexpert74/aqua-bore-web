import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ⬇️ Правильный __dirname для ES-модуля
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Пути
const blogDir = path.resolve(__dirname, '../../public/blog');
const slugsFilePath = path.resolve(__dirname, 'getBlogPosts.tsx');

// Получаем список слагов
function getSlugs() {
  console.log('📂 Читаем public/blog...');
  const files = fs.readdirSync(blogDir);
  const slugs = files
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''))
    .sort();

  console.log('✅ Найдено slug-файлов:', slugs.length);
  return slugs;
}

// Обновляем файл с маркерами
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

  if (!content.includes(startMarker) || !content.includes(endMarker)) {
    console.error('❌ Маркеры не найдены в getBlogPosts.tsx');
    console.log('ℹ️ Поиск:', { startMarker, endMarker });
    console.log('📄 Содержимое файла:\n---\n' + content.slice(0, 500) + '\n...');
    process.exit(1);
  }

  const regex = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`, 's');
  const newSlugsString = JSON.stringify(slugs, null, 2);
  const replacement = `${startMarker}\nexport const slugs = ${newSlugsString};\n${endMarker}`;
  const newContent = content.replace(regex, replacement);

  if (content === newContent) {
    console.log('⚠️ Содержимое getBlogPosts.tsx не изменилось — пропускаем запись и коммит.');
    return;
  }

  fs.writeFileSync(slugsFilePath, newContent, 'utf-8');
  console.log('✅ Файл getBlogPosts.tsx обновлён!');
}


// Запуск
try {
  const slugs = getSlugs();
  updateSlugsFile(slugs);
} catch (err) {
  console.error('❌ Ошибка выполнения скрипта:', err.message);
  process.exit(1);
}
