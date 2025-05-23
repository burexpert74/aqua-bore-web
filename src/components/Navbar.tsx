
import React, { useState } from 'react';
import { Menu, X, Drill } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Drill className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">БурЭксперт</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Главная
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Блог
            </Link>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Услуги
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Контакты
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600">
              Главная
            </Link>
            <Link to="/blog" className="block py-2 text-gray-700 hover:text-blue-600">
              Блог
            </Link>
            <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600">
              Услуги
            </a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">
              Контакты
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
