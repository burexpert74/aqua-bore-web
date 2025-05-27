
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 flex flex-col items-center">
        <div className="max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Профессиональное бурение скважин
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 text-blue-100 px-4 sm:px-0">
            Более 15 лет опыта. Современное оборудование. Гарантия качества.
            Обеспечим ваш дом чистой водой быстро и надежно.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center mb-6 sm:mb-8 px-4 sm:px-0">
            <div className="bg-blue-800 bg-opacity-50 p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold mb-2">500+</div>
              <div className="text-sm sm:text-base text-blue-200">Пробуренных скважин</div>
            </div>
            <div className="bg-blue-800 bg-opacity-50 p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold mb-2">15 лет</div>
              <div className="text-sm sm:text-base text-blue-200">Опыта работы</div>
            </div>
            <div className="bg-blue-800 bg-opacity-50 p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold mb-2">99%</div>
              <div className="text-sm sm:text-base text-blue-200">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
