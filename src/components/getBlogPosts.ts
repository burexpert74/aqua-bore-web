// components/getBlogPosts.ts
export async function getBlogPosts() {
  const repoUrl = 'https://github.com/Wh0mail/aqua-bore-web/tree/main/public/blog';
  const slugs = [
    'arenda-yamobura-chelyabinsk-polnoe-rukovodstvo',
    // добавляй сюда другие слаги по мере публикации
  ];

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const res = await fetch(`${repoUrl}/${slug}.json`);
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
    })
  );

  return posts.filter(Boolean); // удалим null
}
