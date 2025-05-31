
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToServices = () => {
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      window.location.href = '/#services';
      return;
    }
    
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
      return;
    }
    
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

          {/* Phone numbers - desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-end">
                <a href="tel:+79043041412" className="flex items-center space-x-2 text-blue-700 hover:text-blue-900 transition-colors font-bold text-lg group">
                  <Phone className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className="tracking-wide">+7 (904) 304-14-12</span>
                </a>
              </div>
              <div className="text-xs text-gray-500 text-right leading-tight">
                <div>Ежедневно с 06:00 до 23:00</div>
              </div>
            </div>
          </div>

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
              {/* Phone numbers - mobile */}
              <div className="px-4 py-3 border-b border-gray-100 bg-blue-50">
                <div className="space-y-3">
                  <a href="tel:+79043041412" className="flex items-center space-x-3 text-blue-700 hover:text-blue-900 transition-colors font-bold text-lg group">
                    <Phone className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="tracking-wide">+7 (904) 304-14-12</span>
                  </a>
                  <a href="tel:+73517769990" className="flex items-center space-x-3 text-blue-700 hover:text-blue-900 transition-colors font-bold text-lg group">
                    <Phone className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="tracking-wide">+7 (351) 776-99-90</span>
                  </a>
                  <div className="text-xs text-gray-600 ml-8">
                    Ежедневно с 08:00 до 21:00
                  </div>
                </div>
              </div>
              
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
