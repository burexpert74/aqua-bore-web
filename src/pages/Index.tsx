
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
    <div className="min-h-screen flex">
      {/* Blog Sidebar - hidden on mobile, visible on desktop */}
      <div className="hidden lg:block">
        <BlogSidebar isOpen={true} onClose={() => {}} />
      </div>
      
      {/* Mobile Blog Sidebar - only shown when opened */}
      {isBlogOpen && (
        <BlogSidebar isOpen={isBlogOpen} onClose={() => setIsBlogOpen(false)} />
      )}
      
      {/* Mobile Blog Toggle */}
      <BlogToggle onClick={() => setIsBlogOpen(true)} />
      
      {/* Main content */}
      <div className="flex-1 lg:ml-0">
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
