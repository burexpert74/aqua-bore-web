const fallbackImages = [
  "public/blog/fallback-1.jpg",
  "public/blog/fallback-2.jpg",
  "public/blog/fallback-3.jpg",
  "public/blog/fallback-4.jpg",
  "public/blog/fallback-5.jpg",
];

function getRandomFallbackImage() {
  const index = Math.floor(Math.random() * fallbackImages.length);
  return fallbackImages[index];
}
// components/getBlogPosts.ts
export async function getBlogPosts() {
  // Список слагов статей, которые нужно загрузить
  // В будущем это можно заменить на автоматическое сканирование директории
  const slugs = [
    'arenda-yamobura-chelyabinsk-polnoe-rukovodstvo',
    'arenda-yamobora-chelyabinsk-gid-po-vyboru-i-primeneniyu',
    // добавляй сюда другие слаги по мере публикации
  ];

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
          image: data.image,
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

  return posts.filter(Boolean); // удалим null
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
