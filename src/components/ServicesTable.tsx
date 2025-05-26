import React from 'react';
import { Button } from '@/components/ui/button';

const services = [
  {
    type: "Бурение скважины малого диаметра",
    depth: "До 5 м",
    price: "от 300 ₽/м",
    features: ["Для небольших объектов", "Доступная стоимость"]
  },
  {
    type: "Бурение скважины среднего диаметра",
    depth: "5-10 м",
    price: "от 400 ₽/м",
    features: ["Для частных домов", "Оптимальное соотношение цена/качество"]
  },
  {
    type: "Бурение скважины большого диаметра",
    depth: "10-12 м",
    price: "от 800 ₽/м",
    features: ["Для промышленных объектов", "Высокая производительность"]
  },
  {
    type: "Монтаж винтовых свай",
    depth: "До 4 м",
    price: "от 400 ₽",
    features: ["Диаметры от 76 до 108 мм", "Быстрая установка", "Надежное основание"]
  }
];

const ServicesTable = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/gpt_noway_bot', '_blank');
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Виды буровых работ и цены
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Подберем оптимальное решение для вашего участка с учетом геологических особенностей и потребностей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-blue-600 flex flex-col h-full">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{service.type}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-gray-500 text-sm">Глубина</div>
                    <div className="text-xl font-semibold text-gray-900">{service.depth}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-gray-500 text-sm">Стоимость</div>
                    <div className="text-xl font-semibold text-blue-600">{service.price}</div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 pt-0 mt-auto">
                <Button 
                  onClick={handleTelegramClick}
                  className="w-full bg-blue-600 hover:bg-blue-700" 
                  variant="default"
                >
                  Заказать консультацию
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-900 text-white rounded-xl p-8 text-center max-w-5xl mx-auto shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Есть вопросы по услугам?</h3>
          <p className="text-blue-100 mb-6">
            Свяжитесь с нашими специалистами в Telegram для получения подробной консультации и расчета стоимости работ
          </p>
          <Button 
            onClick={handleTelegramClick}
            className="bg-white text-blue-900 hover:bg-blue-50" 
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
