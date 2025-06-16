import React, { useState } from 'react';
import { X, Play, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/7298825/pexels-photo-7298825.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Séance de rééducation avec un athlète',
      category: 'Rééducation'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/7298554/pexels-photo-7298554.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Massage thérapeutique sportif',
      category: 'Thérapie manuelle'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Préparation physique en salle',
      category: 'Préparation physique'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/6551174/pexels-photo-6551174.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Évaluation biomécanique',
      category: 'Évaluation'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/4498608/pexels-photo-4498608.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Accompagnement terrain',
      category: 'Compétition'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/7298825/pexels-photo-7298825.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Séance avec équipe professionnelle',
      category: 'Équipe'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/6551313/pexels-photo-6551313.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Travail de mobilité articulaire',
      category: 'Mobilité'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/7298817/pexels-photo-7298817.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Consultation personnalisée',
      category: 'Consultation'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/4498327/pexels-photo-4498327.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Récupération post-effort',
      category: 'Récupération'
    }
  ];

  const categories = ['Tous', ...Array.from(new Set(galleryItems.map(item => item.category)))];
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredItems = activeCategory === 'Tous' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="galerie" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Galerie <span className="text-green-600">professionnelle</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Un aperçu de mon travail quotidien avec les athlètes de haut niveau
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <Camera className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white font-medium">{item.category}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Vue agrandie"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Suivez mon actualité</h3>
            <p className="text-gray-600 mb-6">
              Découvrez plus de contenu sur mes réseaux sociaux professionnels
            </p>
            <div className="flex justify-center space-x-4 flex-wrap gap-2">
              <a href="#" className="bg-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors">
                Instagram Pro
              </a>
              <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Facebook
              </a>
              <a href="#" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                TikTok
              </a>
              <a href="#" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;