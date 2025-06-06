import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const PHONE_NUMBER = '+7 (904) 304-14-12';
const PHONE_LINK = 'tel:+79043041412';
const WORK_HOURS = 'Ежедневно с 06:00 до 23:00';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">БурЭксперт</span>
          </Link>

          {/* Phone & hours */}
          <div className="hidden md:flex flex-col items-end">
            <a
              href={PHONE_LINK}
              className="flex items-center space-x-2 text-blue-700 hover:text-blue-900 transition-colors font-bold text-lg group"
            >
              <Phone className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <div className="text-xs text-gray-500 text-right leading-tight">{WORK_HOURS}</div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 ml-10">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors py-2 font-medium">
              Главная
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary-600 transition-colors py-2 font-medium">
              Блог
            </Link>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary-600 transition-colors py-2 font-medium"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary py-2 px-4 text-sm"
            >
              Контакты
            </button>
          </div>

          {/* Burger menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Открыть меню"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 border-b border-gray-100 bg-gradient-to-r from-primary-50 to-accent-orange-50 space-y-2">
              <a
                href={PHONE_LINK}
                className="flex items-center space-x-3 text-blue-700 hover:text-blue-900 transition-colors font-bold text-lg group"
              >
                <Phone className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                <span>{PHONE_NUMBER}</span>
              </a>
              <div className="text-xs text-gray-600 ml-8">{WORK_HOURS}</div>
            </div>

            <div className="py-2 space-y-1">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                Главная
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                Блог
              </Link>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('contact')}
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
