
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

  const handlePhoneClick = () => {
    window.location.href = 'tel:+79043041412';
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <span className="text-xl sm:text-2xl font-bold text-gradient font-display">БурЭксперт</span>
          </Link>

          {/* Phone CTA - desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-xs text-gray-500 leading-tight mb-1">
                  Работаем ежедневно 06:00-23:00
                </div>
                <button 
                  onClick={handlePhoneClick}
                  className="btn-phone text-lg font-bold tracking-wide"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +7 (904) 304-14-12
                </button>
              </div>
            </div>
          </div>

          {/* Navigation menu - desktop */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors py-2 font-medium">
              Главная
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary-600 transition-colors py-2 font-medium">
              Блог
            </Link>
            <button onClick={scrollToServices} className="text-gray-700 hover:text-primary-600 transition-colors py-2 font-medium">
              Услуги
            </button>
            <button onClick={scrollToContact} className="btn-secondary py-2 px-4 text-sm">
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
              {/* Phone CTA - mobile */}
              <div className="px-4 py-4 border-b border-gray-100 bg-gradient-to-r from-primary-50 to-accent-orange-50">
                <div className="space-y-3">
                  <button 
                    onClick={handlePhoneClick}
                    className="btn-phone w-full text-lg font-bold tracking-wide justify-center"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    +7 (904) 304-14-12
                  </button>
                  <div className="text-xs text-gray-600 text-center">
                    Работаем ежедневно 06:00-23:00
                  </div>
                </div>
              </div>
              
              <Link 
                to="/" 
                className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/blog" 
                className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Блог
              </Link>
              <button 
                onClick={scrollToServices}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                Услуги
              </button>
              <button 
                onClick={scrollToContact}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
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
