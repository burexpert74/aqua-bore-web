
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
      {/* Декоративный фон для всей страницы */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2393c5fd%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none"></div>
      
      {/* Градиентные блобы для всей страницы */}
      <div className="fixed top-1/4 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse pointer-events-none"></div>
      <div className="fixed top-3/4 -right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-2000 pointer-events-none"></div>
      <div className="fixed bottom-1/4 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000 pointer-events-none"></div>

      {/* Blog Sidebar - floating for both mobile and desktop */}
      {isBlogOpen && (
        <BlogSidebar isOpen={isBlogOpen} onClose={() => setIsBlogOpen(false)} />
      )}
      
      {/* Blog Toggle */}
      <BlogToggle onClick={() => setIsBlogOpen(true)} />
      
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
