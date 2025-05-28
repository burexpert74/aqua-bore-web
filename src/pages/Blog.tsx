
import React from 'react';
import Navbar from '@/components/Navbar';
import BlogCard from '@/components/BlogCard';
import Footer from '@/components/Footer';
import { getBlogPosts } from '@/components/getBlogPosts.ts';

const Blog = async() => {
  const blogPosts = await getBlogPosts();
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
