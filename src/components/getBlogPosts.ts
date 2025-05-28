
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
