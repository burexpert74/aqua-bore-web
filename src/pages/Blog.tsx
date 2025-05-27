
import React from 'react';
import Navbar from '@/components/Navbar';
import BlogCard from '@/components/BlogCard';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    id: 1,
    title: "Как выбрать глубину скважины для частного дома",
    excerpt: "Подробное руководство по определению оптимальной глубины бурения в зависимости от геологических условий и потребностей семьи.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    date: "2024-05-20",
    readTime: "5 мин"
  },
  {
    id: 2,
    title: "Технологии бурения: роторное vs ударно-канатное",
    excerpt: "Сравнение современных методов бурения скважин, их преимущества и области применения для разных типов грунта.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
    date: "2024-05-18",
    readTime: "7 мин"
  },
  {
    id: 3,
    title: "Обслуживание скважины: график и рекомендации",
    excerpt: "Полное руководство по правильному уходу за скважиной для обеспечения долгосрочной работы и качества воды.",
    image: "https://images.unsplash.com/photo-1533422902779-aff35862e462?w=400&h=300&fit=crop",
    date: "2024-05-15",
    readTime: "6 мин"
  },
  {
    id: 4,
    title: "Стоимость бурения в 2024: факторы ценообразования",
    excerpt: "Анализ рынка буровых работ, основные факторы влияющие на цену и советы по оптимизации затрат.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    date: "2024-05-12",
    readTime: "4 мин"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Блог и полезные статьи
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Экспертные советы по бурению скважин, обслуживанию и выбору оборудования
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
