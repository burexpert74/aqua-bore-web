
import React from 'react';

const galleryImages = [
  {
    src: "/lovable-uploads/47aafadc-fbcf-458a-98b5-43d7589cd135.png",
    title: "Мобильная буровая установка на базе ISUZU",
    description: "Компактное и мощное оборудование для бурения на ограниченных площадках"
  },
  {
    src: "/lovable-uploads/86b211ae-9f5b-4d2c-a26d-54301d00b90e.png",
    title: "Процесс бурения скважины",
    description: "Рабочий процесс с применением профессионального оборудования"
  },
  {
    src: "/lovable-uploads/cc576d1e-a7b2-4b49-bfe9-c6fb3a818ac7.png",
    title: "Буровая установка с синей стрелой",
    description: "Современная техника для глубокого бурения с высокой производительностью"
  }
];

const Gallery = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наши работы и оборудование
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Современное оборудование и профессиональные буровые установки для всех типов работ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div key={index} className="group cursor-pointer transform transition-transform duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
