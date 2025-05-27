
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const heroSection = document.querySelector('section');
    const nextSection = heroSection?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 flex flex-col items-center">
        <div className="max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Профессиональное бурение скважин
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 text-blue-100 px-4 sm:px-0">
            Более 15 лет. Современное оборудование. Гарантированный результат.
            Бурим глубже, работаем чище.
          </p>
        </div>
      </div>

      <button 
        onClick={scrollToNext}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hover:text-blue-200 transition-colors cursor-pointer"
        aria-label="Прокрутить к следующей секции"
      >
        <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
