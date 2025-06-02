import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Поддержка __dirname в ES-модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Пути
const blogDir = path.resolve(__dirname, '../../public/blog');
const slugsFilePath = path.resolve(__dirname, '../../src/components/getBlogPosts.tsx');
const sitemapFilePath = path.resolve(__dirname, '../../public/sitemap.xml');

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

  const match = content.match(regex);
  if (!match) {
    console.error('❌ Регулярка не нашла текст между маркерами');
    process.exit(1);
  }

  const newSlugsString = JSON.stringify(slugs, null, 2);
  const replacement = `${startMarker}\nexport const slugs = ${newSlugsString};\n${endMarker}`;

  const newContent = content.replace(regex, replacement);

  if (newContent === content) {
    console.log('⚠️ Замена не изменила содержимое файла — пропускаем запись.');
    return false; // Файл не обновлен
  }

  fs.writeFileSync(slugsFilePath, newContent, 'utf-8');
  console.log('✅ Файл getBlogPosts.tsx обновлён!');
  return true; // Файл обновлен
}

// Генерируем sitemap.xml
function generateSitemap(slugs) {
  const sitemapHeader = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  const sitemapFooter = `</urlset>\n`;

  const urls = slugs.map(slug => `
  <url>
    <loc>https://www.burexert.com/blog/${slug}</loc>
    <priority>0.8</priority>
  </url>`).join('');

  const sitemapContent = sitemapHeader + urls + sitemapFooter;

  fs.writeFileSync(sitemapFilePath, sitemapContent, 'utf-8');
  console.log('✅ sitemap.xml сгенерирован!');
}

// 🏁 Запуск
const slugs = getSlugs();
const updated = updateSlugsFile(slugs);
generateSitemap(slugs);

// Если нужно, можешь вернуть `updated` чтобы понять, были ли изменения в slugs
