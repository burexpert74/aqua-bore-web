
import React from 'react';
import { Drill, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white w-full">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Drill className="h-7 w-7 sm:h-8 sm:w-8 text-blue-400" />
              <span className="text-xl sm:text-2xl font-bold">БурЭксперт</span>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Более 15 лет. Современное оборудование. Гарантированный результат.
              Бурим глубже, работаем чище.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Контакты</h3>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                <span className="break-all">info@burexpert.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                <span>Челябинская область</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                <span>Пн-Сб: 8:00-20:00</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>
                <button 
                  onClick={scrollToServices}
                  className="hover:text-blue-400 transition-colors text-left w-full"
                >
                  Бурение скважин разного диаметра
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToServices}
                  className="hover:text-blue-400 transition-colors text-left w-full"
                >
                  Монтаж винтовых свай
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToServices}
                  className="hover:text-blue-400 transition-colors text-left w-full"
                >
                  Монтаж опор ЛЭП
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToServices}
                  className="hover:text-blue-400 transition-colors text-left w-full"
                >
                  Демонтаж опор ЛЭП
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              © 2025 БурЭксперт. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
