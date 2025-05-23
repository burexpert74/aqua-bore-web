
import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    type: "Бурение скважины малого диаметра",
    depth: "До 5 м",
    price: "от 300 ₽/м",
    timeframe: "1-2 дня",
    features: ["Диаметр 200-300 мм", "Для небольших объектов", "Доступная стоимость"]
  },
  {
    type: "Бурение скважины среднего диаметра",
    depth: "5-10 м",
    price: "от 400 ₽/м",
    timeframe: "2-3 дня",
    features: ["Диаметр 300-400 мм", "Для частных домов", "Оптимальное соотношение цена/качество"]
  },
  {
    type: "Бурение скважины большого диаметра",
    depth: "10-12 м",
    price: "от 800 ₽/м",
    timeframe: "3-5 дней",
    features: ["Диаметр 500-600 мм", "Для промышленных объектов", "Высокая производительность"]
  },
  {
    type: "Монтаж винтовых свай",
    depth: "До 4 м",
    price: "от 400 ₽/шт",
    timeframe: "1-2 дня",
    features: ["Диаметры от 76 до 108 мм", "Быстрая установка", "Надежное основание"]
  }
];

const ServicesTable = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Виды буровых работ и цены
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Подберем оптимальное решение для вашего участка с учетом геологических особенностей и потребностей
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{service.type}</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {service.timeframe}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-gray-500 text-sm">Глубина</div>
                  <div className="text-xl font-semibold text-gray-900">{service.depth}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Стоимость</div>
                  <div className="text-xl font-semibold text-blue-600">{service.price}</div>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Заказать консультацию
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-900 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Нужен полный прайс-лист?</h3>
          <p className="text-blue-100 mb-6">
            Ознакомьтесь с подробным прайс-листом всех наших услуг с указанием цен для разных диаметров и глубин
          </p>
          <Link to="/price">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Смотреть полный прайс-лист
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesTable;
