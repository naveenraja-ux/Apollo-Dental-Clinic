import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X } from 'lucide-react';

const categories = ['All', 'Clinical Entities', 'Awards'];

const galleryImages = [
  // Awards
  { id: 1, category: 'Awards', url: 'https://image2url.com/r2/default/images/1774074875614-c720f81c-d8db-4103-9569-d262f4ad3a1a.jpeg' },
  { id: 2, category: 'Awards', url: 'https://image2url.com/r2/default/images/1774075002415-01e64b62-ace2-49bc-b4a6-866167f5f778.jpeg' },
  { id: 3, category: 'Awards', url: 'https://image2url.com/r2/default/images/1774075115979-72ae02d4-919b-4274-b2b3-1a0971027703.jpeg' },
  { id: 4, category: 'Awards', url: 'https://image2url.com/r2/default/images/1774075180339-d94df6b9-987a-42db-b827-a33b41867a7b.jpeg' },
  
  // Clinical Entities
  { id: 5, category: 'Clinical Entities', url: 'https://image2url.com/r2/default/images/1774075387289-f964dfc0-9fcb-444d-a614-50e6c092adcb.jpeg' },
  { id: 6, category: 'Clinical Entities', url: 'https://image2url.com/r2/default/images/1774075459755-9e2ffa92-09cd-4184-a17d-c840c198e70d.jpeg' },
  { id: 7, category: 'Clinical Entities', url: 'https://image2url.com/r2/default/images/1774075503607-9ae4b2db-4083-4ab1-9c24-87bdd770ff8a.jpeg' },
  { id: 8, category: 'Clinical Entities', url: 'https://image2url.com/r2/default/images/1774075539333-7dce8740-09ad-44c0-a46e-3493cabbc574.jpeg' },
  { id: 9, category: 'Clinical Entities', url: 'https://image2url.com/r2/default/images/1774075564774-bdb52e2e-665a-46ce-b211-b28c0bb02622.jpeg' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Single Section Gallery */}
      <section className="flex-grow py-16 px-6 md:px-12 flex flex-col justify-center">
        <div className="container-custom mx-auto max-w-7xl w-full">
          
          {/* Header Content */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Clinical Excellence Gallery
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our advanced medical facilities and specialized treatments through our visual showcase.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 border ${
                  activeCategory === cat 
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105' 
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-primary/50 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img) => (
                <motion.div
                  layout
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative group aspect-[4/3] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 bg-slate-100 border border-slate-200"
                  onClick={() => setSelectedImage(img.url)}
                >
                  <img
                    src={img.url}
                    alt={img.category}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                      <Maximize2 className="w-7 h-7" />
                    </div>
                  </div>
                  
                  {/* Category Tag */}
                  <div className="absolute bottom-6 left-6">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                      {img.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredImages.length === 0 && (
              <div className="col-span-full flex items-center justify-center h-64">
                <p className="text-slate-500 font-medium text-lg">No images found in this category.</p>
              </div>
            )}
          </motion.div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <span className="inline-block px-4 py-1 bg-slate-100 rounded-full text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
              Click on any image to expand view
            </span>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-full rounded-3xl shadow-2xl object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
