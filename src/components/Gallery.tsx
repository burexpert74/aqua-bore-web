
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const galleryImages = [
  {
    src: "/lovable-uploads/47aafadc-fbcf-458a-98b5-43d7589cd135.png",
    title: "Мобильная буровая установка на базе ISUZU",
    description: "Компактное и мощное оборудование для бурения на ограниченных площадках",
    hasSpecs: true,
    specs: {
      title: "ISUZU",
      subtitle: "Ямобур на базе ISUZU",
      details: "Подробные технические характеристики будут добавлены в ближайшее время."
    }
  },
  {
    src: "/lovable-uploads/86b211ae-9f5b-4d2c-a26d-54301d00b90e.png",
    title: "Процесс бурения скважины",
    description: "Рабочий процесс с применением профессионального оборудования",
    hasSpecs: false
  },
  {
    src: "/lovable-uploads/cc576d1e-a7b2-4b49-bfe9-c6fb3a818ac7.png",
    title: "Буровая установка с синей стрелой",
    description: "Современная техника для глубокого бурения с высокой производительностью",
    hasSpecs: true,
    specs: {
      title: "Tadano DT-600",
      subtitle: "Ямобур на основе Mitsubishi Canter",
      details: {
        depth: "до 12 метров",
        reach: "12 метров", 
        capacity: "3 тонны",
        description: "Высокая мобильность данной установки позволяет работать в труднодоступных местах, а сам ямобур незаменим для любого частного строительства."
      }
    }
  }
];

const Gallery = () => {
  const [selectedSpecs, setSelectedSpecs] = useState(null);

  const handleImageClick = (image) => {
    if (image.hasSpecs) {
      setSelectedSpecs(image.specs);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Наши работы и оборудование
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Современное оборудование и профессиональные буровые установки для всех типов работ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`group transform transition-transform duration-300 hover:-translate-y-2 ${image.hasSpecs ? 'cursor-pointer' : ''}`}
              onClick={() => handleImageClick(image)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                  {image.hasSpecs && (
                    <p className="text-xs text-blue-200 mt-2">Нажмите для просмотра ТТХ</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedSpecs} onOpenChange={() => setSelectedSpecs(null)}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-900">
                {selectedSpecs?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 font-medium">{selectedSpecs?.subtitle}</p>
              
              {selectedSpecs?.details && typeof selectedSpecs.details === 'object' ? (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-600">Глубина бурения</span>
                      <p className="text-gray-900">{selectedSpecs.details.depth}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Вылет стрелы</span>
                      <p className="text-gray-900">{selectedSpecs.details.reach}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="font-medium text-gray-600">Грузоподъёмность установки</span>
                      <p className="text-gray-900">{selectedSpecs.details.capacity}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {selectedSpecs.details.description}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-gray-700">{selectedSpecs?.details}</p>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
