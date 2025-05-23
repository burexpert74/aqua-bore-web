
import React from 'react';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
    title: "Роторная буровая установка",
    description: "Современное оборудование для глубокого бурения"
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    title: "Процесс бурения",
    description: "Контролируемое бурение с постоянным мониторингом"
  },
  {
    src: "https://images.unsplash.com/photo-1533422902779-aff35862e462?w=600&h=400&fit=crop",
    title: "Установка обсадных труб",
    description: "Профессиональная установка защитной обсадки"
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    title: "Готовая скважина",
    description: "Завершенные работы с установленным оборудованием"
  },
  {
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
    title: "Испытание дебита",
    description: "Проверка производительности скважины"
  },
  {
    src: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?w=600&h=400&fit=crop",
    title: "Монтаж насосного оборудования",
    description: "Установка и настройка водоподъемного оборудования"
  }
];

const Gallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наши работы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Фотогалерея выполненных проектов и используемого профессионального оборудования
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
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
