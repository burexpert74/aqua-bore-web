
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
    window.open('tel:+79043041412', '_self');
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/gpt_noway_bot', '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2393c5fd%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Изображение ямобура */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-10 hidden lg:block">
        <img 
          src="/lovable-uploads/1c898605-8f27-4515-8506-9ed0609f8504.png" 
          alt="Ямобур" 
          className="w-96 h-auto"
        />
      </div>
      
      {/* Градиентные блобы */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-20 right-0 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-4000"></div>
      <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
      
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 flex flex-col items-center z-10">
        <div className="max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight animate-fade-in">
            Услуги бурения под фундамент и монтаж опор ЛЭП, винтовых свай
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8 justify-center animate-fade-in">
            <Button 
              onClick={handlePhoneClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg font-semibold flex items-center justify-center gap-2 hover-scale"
              size="lg"
            >
              <Phone className="h-5 w-5" />
              Позвонить
            </Button>
            <Button 
              onClick={handleTelegramClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg font-semibold flex items-center justify-center gap-2 hover-scale"
              size="lg"
            >
              <MessageCircle className="h-5 w-5" />
              Проконсультироваться
            </Button>
          </div>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-100 px-4 sm:px-0 animate-fade-in">
            Собственный автопарк, индивидуальный подход.
          </p>
          <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 inline-block border border-blue-400/20 shadow-xl animate-scale-in">
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
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hover:text-blue-200 transition-colors cursor-pointer z-10"
        aria-label="Прокрутить к следующей секции"
      >
        <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
