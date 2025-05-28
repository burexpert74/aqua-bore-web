
import React, { useState } from 'react';
import { Menu, X, Drill } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToServices = () => {
    setIsOpen(false); // Close mobile menu when navigating
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    setIsOpen(false); // Close mobile menu when navigating
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">БурЭксперт</span>
          </Link>

          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
              Главная
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
              Блог
            </Link>
            <button onClick={scrollToServices} className="text-gray-700 hover:text-blue-600 transition-colors py-2">
              Услуги
            </button>
            <button onClick={scrollToContact} className="text-gray-700 hover:text-blue-600 transition-colors py-2">
              Контакты
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Открыть меню"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="py-4 space-y-1">
              <Link 
                to="/" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/blog" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Блог
              </Link>
              <button 
                onClick={scrollToServices}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Услуги
              </button>
              <button 
                onClick={scrollToContact}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Контакты
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
