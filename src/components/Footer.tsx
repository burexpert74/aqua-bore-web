
import React from 'react';
import { Drill, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollToServices = () => {
     if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
     }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white w-full">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <span className="text-xl md:text-2xl font-bold">БурЭксперт</span>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-sm md:text-base leading-relaxed">
              Собственный автопарк, индивидуальный подход.
            </p>
            <div className="bg-gray-800 p-3 md:p-4 rounded-lg">
              <p className="text-sm md:text-base font-medium text-blue-400 mb-1">
                Работаем в Челябинской области
              </p>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Возможен выезд за пределы Челябинска по дополнительной плате
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Контакты</h3>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+79043041412" className="hover:text-blue-400 active:text-blue-300 transition-colors touch-manipulation">
                  +7(904)304-14-12
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-blue-400 flex-shrink-0" />
                <span className="break-all text-xs sm:text-sm md:text-base">Andron_v_k@mail.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-400 flex-shrink-0" />
                <span>Челябинская область</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-blue-400 flex-shrink-0" />
                <span>Пн-Вс: 06:00-23:00</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li>
                <button 
                  onClick={scrollToServices}
                  className="hover:text-blue-400 active:text-blue-300 transition-colors text-left w-full touch-manipulation leading-relaxed"
                >
                  Бурение ям разного диаметра
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToServices}
                  className="hover:text-blue-400 active:text-blue-300 transition-colors text-left w-full touch-manipulation leading-relaxed"
                >
                  Монтаж винтовых свай
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToServices}
                  className="hover:text-blue-400 active:text-blue-300 transition-colors text-left w-full touch-manipulation leading-relaxed"
                >
                  Монтаж опор ЛЭП
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToServices}
                  className="hover:text-blue-400 active:text-blue-300 transition-colors text-left w-full touch-manipulation leading-relaxed"
                >
                  Демонтаж опор ЛЭП
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 md:mt-12 pt-4 sm:pt-6 md:pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm md:text-base">
              © 2025 БурЭксперт.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
