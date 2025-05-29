
const fallbackImages = [
  "blog/fallback-1.jpg",
  "blog/fallback-2.jpg",
  "blog/fallback-3.jpg",
  "blog/fallback-4.jpg",
  "blog/fallback-5.jpg",
];

// Хранилище использованных fallback изображений
let usedFallbackImages: string[] = [];

function getRandomFallbackImage() {
  // Если все изображения использованы, сбросить список
  if (usedFallbackImages.length >= fallbackImages.length) {
    usedFallbackImages = [];
  }
  
  // Найти неиспользованные изображения
  const availableImages = fallbackImages.filter(img => !usedFallbackImages.includes(img));
  
  // Выбрать случайное из доступных
  const randomIndex = Math.floor(Math.random() * availableImages.length);
  const selectedImage = availableImages[randomIndex];
  
  // Добавить в список использованных
  usedFallbackImages.push(selectedImage);
  
  return selectedImage;
}

// Автоматическое обнаружение доступных статей
async function getAvailableSlugs(): Promise<string[]> {
  const knownSlugs = [
    'arenda-yamobura-chelyabinsk-polnoe-rukovodstvo',
    'arenda-yamobora-chelyabinsk-gid-po-vyboru-i-primeneniyu',
  ];

  // Проверяем существование известных статей и возможных новых
  const possibleSlugs = [
    ...knownSlugs,
    // Можно добавить логику для поиска новых статей
    // Пока используем известный список
  ];

  const validSlugs: string[] = [];
  
  await Promise.all(
    possibleSlugs.map(async (slug) => {
      try {
        const res = await fetch(`/blog/${slug}.json`);
        if (res.ok) {
          validSlugs.push(slug);
        }
      } catch (error) {
        // Статья недоступна
      }
    })
  );

  return validSlugs;
}

export async function getBlogPosts() {
  const slugs = await getAvailableSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      try {
        const res = await fetch(`/blog/${slug}.json`);
        if (!res.ok) return null;
        const data = await res.json();

        const imageExists = await fetch(data.image).then(r => r.ok).catch(() => false);
        const image = imageExists ? data.image : getRandomFallbackImage();
        
        return {
          id: data.id,
          title: data.title,
          excerpt: data.excerpt,
          image,
          date: data.date,
          readTime: data.readTime,
          slug: data.slug,
        };
      } catch (error) {
        console.error(`Error loading blog post ${slug}:`, error);
        return null;
      }
    })
  );

  return posts.filter(Boolean).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string) {
  try {
    const res = await fetch(`/blog/${slug}.json`);
    if (!res.ok) throw new Error('Post not found');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    throw error;
  }
}
