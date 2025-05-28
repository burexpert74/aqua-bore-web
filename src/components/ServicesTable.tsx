
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
    depth: "До 5 м",
    price: "от 600 ₽/М",
    features: ["Для хозяйственых строений", "Надежное основание"]
  }
];

const ServicesTable = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/gpt_noway_bot', '_blank');
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Виды буровых работ и цены
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Подберем оптимальное решение для вашего участка с учетом геологических особенностей и потребностей
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-blue-600 flex flex-col h-full">
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">{service.type}</h3>
                </div>

                <div className={`grid ${service.depth ? 'grid-cols-2' : 'grid-cols-1'} gap-3 sm:gap-4 mb-4 sm:mb-6`}>
                  {service.depth && (
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center">
                      <div className="text-gray-500 text-xs sm:text-sm">Глубина</div>
                      <div className="text-lg sm:text-xl font-semibold text-gray-900">{service.depth}</div>
                    </div>
                  )}
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg text-center">
                    <div className="text-gray-500 text-xs sm:text-sm">Стоимость</div>
                    <div className="text-lg sm:text-xl font-semibold text-blue-600">{service.price}</div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-4 sm:p-6 pt-0 mt-auto">
                <Button 
                  onClick={handleTelegramClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base py-2 sm:py-3" 
                  variant="default"
                >
                  Заказать консультацию
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 bg-blue-900 text-white rounded-xl p-6 sm:p-8 text-center max-w-5xl mx-auto shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Есть вопросы по услугам?</h3>
          <p className="text-blue-100 mb-4 sm:mb-6 text-sm sm:text-base">
            Свяжитесь с нашими специалистами в Telegram для получения подробной консультации и расчета стоимости работ
          </p>
          <Button 
            onClick={handleTelegramClick}
            className="bg-white text-blue-900 hover:bg-blue-50 text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3" 
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
