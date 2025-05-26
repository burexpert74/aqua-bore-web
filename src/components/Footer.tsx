
import React from 'react';
import { Drill, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/gpt_noway_bot', '_blank');
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Drill className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">БурЭксперт</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Профессиональное бурение скважин с 15-летним опытом. 
              Гарантируем качество работ и надежное водоснабжение для вашего дома.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 p-2 rounded">
                <span className="text-sm font-semibold">500+ скважин</span>
              </div>
              <div className="bg-blue-600 p-2 rounded">
                <span className="text-sm font-semibold">15 лет опыта</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>info@burexpert.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Московская область</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <span>Пн-Сб: 8:00-20:00</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={scrollToServices}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Бурение скважин разного диаметра
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToServices}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Монтаж винтовых свай
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToServices}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Монтаж опор ЛЭП
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToServices}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Демонтаж опор ЛЭП
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 БурЭксперт. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
