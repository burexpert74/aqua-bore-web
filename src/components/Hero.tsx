
import React from 'react';
import { ArrowDown, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToNext = () => {
    const heroSection = document.querySelector('section');
    const nextSection = heroSection?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePhoneClick = () => {
    window.open('tel:+79001234567', '_self');
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/gpt_noway_bot', '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 flex flex-col items-center">
        <div className="max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            Услуги бурения под фундамент и монтаж опор ЛЭП, винтовых свай
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8 justify-center">
            <Button 
              onClick={handlePhoneClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg font-semibold flex items-center justify-center gap-2"
              size="lg"
            >
              <Phone className="h-5 w-5" />
              Позвонить
            </Button>
            <Button 
              onClick={handleTelegramClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg font-semibold flex items-center justify-center gap-2"
              size="lg"
            >
              <MessageCircle className="h-5 w-5" />
              Проконсультироваться
            </Button>
          </div>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-100 px-4 sm:px-0">
            Собственный автопарк, индивидуальный подход.
          </p>
          <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 inline-block">
            <p className="text-base sm:text-lg text-blue-100 font-medium">
              Работаем в Челябинской области
            </p>
            <p className="text-sm sm:text-base text-blue-200 mt-1">
              Возможен выезд за пределы Челябинска по дополнительной плате
            </p>
          </div>
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
