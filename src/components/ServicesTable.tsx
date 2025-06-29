
import React from 'react';
import { Button } from '@/components/ui/button';

const services = [
  {
    type: "Бурение ям разных диаметров",
    depth: "До 12 м",
    price: "от 300 ₽/м",
    features: ["Для частного строительства", "Доступная стоимость", "Высокая производительность"]
  },
  {
    type: "Монтаж винтовых свай",
    depth: "До 4 м",
    price: "от 400 ₽",
    features: ["Диаметры от 76 до 108 мм", "Быстрая установка", "Надежное основание"]
  },
  {
    type: "Монтаж опор ЛЭП",
    depth: "",
    price: "от 2500 ₽",
    features: ["Работаем с деревянными и с ж/б опорами", "Возможен демонтаж опор ЛЭП" ]
  },
  {
    type: "Бурение ям под фундамент",
    depth: "До 12 м",
    price: "от 300 ₽/М",
    features: ["Для хозяйственых строений", "Надежное основание"]
  }
];

const ServicesTable = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/burexert_bot', '_blank');
  };

  return (
    <section id="services" className="py-8 md:py-12 lg:py-16 xl:py-20 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-6 md:mb-8 lg:mb-12 xl:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-3 lg:mb-4 leading-tight">
            Виды буровых работ и цены
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4 md:px-0 leading-relaxed">
            Подберем оптимальное решение для вашего участка с учетом геологических особенностей и потребностей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg overflow-hidden border-t-4 border-blue-600 flex flex-col h-full transform transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
              <div className="p-3 sm:p-4 md:p-6">
                <div className="flex justify-between items-start mb-3 md:mb-4 lg:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight pr-2">{service.type}</h3>
                </div>

                <div className={`grid ${service.depth ? 'grid-cols-2' : 'grid-cols-1'} gap-2 sm:gap-3 md:gap-4 mb-3 md:mb-4 lg:mb-6`}>
                  {service.depth && (
                    <div className="bg-gray-50 p-2 sm:p-3 md:p-4 rounded-md md:rounded-lg text-center">
                      <div className="text-gray-500 text-sm md:text-sm mb-1">Глубина</div>
                      <div className="text-base sm:text-lg md:text-lg lg:text-xl font-semibold text-gray-900">{service.depth}</div>
                    </div>
                  )}
                  <div className="bg-blue-50 p-2 sm:p-3 md:p-4 rounded-md md:rounded-lg text-center">
                    <div className="text-gray-500 text-sm md:text-sm mb-1">Стоимость</div>
                    <div className="text-base sm:text-lg md:text-lg lg:text-xl font-semibold text-blue-600">{service.price}</div>
                  </div>
                </div>

                <ul className="space-y-1.5 sm:space-y-2 mb-3 md:mb-4 lg:mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base md:text-base text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-3 sm:p-4 md:p-6 pt-0 mt-auto">
                <Button 
                  onClick={handleTelegramClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-sm sm:text-base md:text-base py-2.5 sm:py-3 md:py-3 transition-all duration-200 font-medium" 
                  variant="default"
                >
                  Заказать консультацию
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 md:mt-12 bg-blue-900 text-white rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8 text-center max-w-5xl mx-auto shadow-lg md:shadow-xl">
          <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">Есть вопросы по услугам?</h3>
          <p className="text-blue-100 mb-3 sm:mb-4 md:mb-6 text-base md:text-base leading-relaxed px-2">
            Свяжитесь с нашими специалистами в Telegram для получения подробной консультации и расчета стоимости работ
          </p>
          <Button 
            onClick={handleTelegramClick}
            className="bg-white text-blue-900 hover:bg-blue-50 active:bg-blue-100 text-base md:text-base px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3 transition-all duration-200 font-medium" 
            variant="outline"
            size="lg"
          >
            Написать в Telegram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesTable;
