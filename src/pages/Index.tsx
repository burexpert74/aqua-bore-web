
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
    <div className="min-h-screen">
      {/* Blog Sidebar - floating for both mobile and desktop */}
      {isBlogOpen && (
        <BlogSidebar isOpen={isBlogOpen} onClose={() => setIsBlogOpen(false)} />
      )}
      
      {/* Blog Toggle */}
      <BlogToggle onClick={() => setIsBlogOpen(true)} />
      
      {/* Main content */}
      <div className="w-full">
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
