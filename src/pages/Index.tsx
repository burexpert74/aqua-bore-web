
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import ServicesTable from '@/components/ServicesTable';
import ChatBot from '@/components/ChatBot';
import Footer from '@/components/Footer';
import BlogSidebar from '@/components/BlogSidebar';
import BlogToggle from '@/components/BlogToggle';

const Index = () => {
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative">
      {/* Улучшенный декоративный фон для всей страницы */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2393c5fd%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none"></div>
      
      {/* Декоративные геометрические формы */}
      <div className="fixed top-10 left-10 w-4 h-4 bg-blue-300 rounded-full opacity-20 animate-bounce"></div>
      <div className="fixed top-20 right-20 w-6 h-6 bg-purple-300 rotate-45 opacity-15 animate-pulse"></div>
      <div className="fixed bottom-20 left-20 w-8 h-8 bg-pink-300 rounded-full opacity-10 animate-bounce animation-delay-2000"></div>
      <div className="fixed bottom-10 right-10 w-5 h-5 bg-yellow-300 rotate-45 opacity-20 animate-pulse animation-delay-4000"></div>
      
      {/* Более крупные декоративные элементы */}
      <div className="fixed top-1/3 left-5 w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="fixed bottom-1/3 right-5 w-16 h-16 bg-gradient-to-br from-pink-200 to-yellow-200 rounded-full opacity-15 animate-bounce animation-delay-3000"></div>
      
      {/* Градиентные блобы для всей страницы - увеличенные */}
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse pointer-events-none"></div>
      <div className="fixed top-3/4 -right-32 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000 pointer-events-none"></div>
      <div className="fixed bottom-1/4 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-4000 pointer-events-none"></div>
      <div className="fixed top-1/2 right-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-6000 pointer-events-none"></div>

      {/* Blog Sidebar - floating for both mobile and desktop */}
      {isBlogOpen && (
        <BlogSidebar isOpen={isBlogOpen} onClose={() => setIsBlogOpen(false)} />
      )}
      
      {/* Blog Toggle - опущена ниже для лучшего визуального баланса */}
      <div className="fixed top-24 sm:top-28 left-4 sm:left-6 z-40">
        <BlogToggle onClick={() => setIsBlogOpen(true)} />
      </div>
      
      {/* Main content */}
      <div className="w-full relative z-10">
        <Navbar />
        <Hero />
        <Gallery />
        <ServicesTable />
        <Footer />
        <ChatBot />
      </div>
    </div>
  );
};

export default Index;
