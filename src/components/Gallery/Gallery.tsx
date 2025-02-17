import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from './galleryData';
import { ImageModal } from './ImageModal';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('campus');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'campus', name: 'Campus Gallery' },
    { id: 'events', name: 'Events & Activities' },
    { id: 'student-life', name: 'Student Life' },
    { id: 'achievements', name: 'Achievements' }
  ];

  const filteredImages = galleryImages.filter(image => image.category === activeCategory);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      switch (hash) {
        case '#gallery':
          setActiveCategory('campus');
          break;
        case '#events-gallery':
          setActiveCategory('events');
          break;
        case '#student-life-gallery':
          setActiveCategory('student-life');
          break;
        case '#achievements-gallery':
          setActiveCategory('achievements');
          break;
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">Our Gallery</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Explore our vibrant campus life through our comprehensive gallery showcasing various aspects of our institution
        </p>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="relative">
          {/* Scroll Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-blue-900 p-2 rounded-full shadow-lg transform transition-all duration-200 hover:scale-110 -translate-x-1/2"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-blue-900 p-2 rounded-full shadow-lg transform transition-all duration-200 hover:scale-110 translate-x-1/2"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrolling Gallery Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar gap-6 pb-4 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="flex-none w-[300px] md:w-[400px] snap-start"
              >
                <div
                  className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                      <p className="text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <ImageModal
          image={filteredImages[selectedImage]}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}