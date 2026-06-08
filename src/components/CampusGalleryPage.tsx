"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye, Grid } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import Image from 'next/image';

export default function CampusGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Campus Architecture', 'Academic Life', 'Student Events', 'Athletics', 'Facilities'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const openLightbox = (id: string) => {
    const idx = GALLERY_ITEMS.findIndex(item => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <div className="space-y-12 py-8">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-block px-3 py-1 bg-[#e7eeff] text-primary rounded-full font-sans text-xs font-semibold tracking-wider uppercase">
            Campus Tour
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
            Campus Galleries &amp; Landmarks
          </h1>
          <p className="font-sans text-base md:text-lg text-[#43474e] leading-relaxed">
            Take an immersive visual stroll through our historical structures, academic labs, sports complexes, libraries, and active student forums.
          </p>
        </div>
      </section>

      {/* Filter Chips */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 select-none">
        <div className="flex flex-wrap gap-2 pb-4 border-b border-[#c4c6cf]/40">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wide transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-primary border border-[#c4c6cf] hover:bg-[#e7eeff]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                onClick={() => openLightbox(item.id)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#c4c6cf]/30 group cursor-pointer relative h-80 flex flex-col justify-end"
              >
                {/* Background image */}
                <div className="absolute inset-0 z-0" style={{ position: 'absolute' }}>
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  {/* Overlay grad */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                </div>

                {/* Content info wrapper */}
                <div className="relative z-10 p-6 space-y-2 text-white">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#ffe088] bg-[#fed65b]/25 px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold truncate leading-tight group-hover:text-secondary-fixed transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[11px] text-white/70 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <Maximize2 className="w-3 h-3 text-[#fed65b]" /> Click to expand view
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-[#c4c6cf] max-w-md mx-auto space-y-4">
            <span className="font-sans text-sm text-[#43474e] font-semibold">No landmark photographs recorded in this tab.</span>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/95 z-[99] flex flex-col justify-between p-4 select-none"
          >
            {/* Header / Actions bar */}
            <div className="flex justify-between items-center text-white/80 p-4 relative z-10">
              <span className="font-sans text-sm font-semibold tracking-wide">
                Image {lightboxIndex + 1} of {GALLERY_ITEMS.length} • {GALLERY_ITEMS[lightboxIndex].category}
              </span>
              <button 
                onClick={closeLightbox}
                className="p-2 rounded-full hover:bg-white/10 text-white cursor-pointer transition-colors"
                title="Close"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Img and Navigation Arrows */}
            <div className="w-full flex-grow flex items-center justify-center relative px-12">
              
              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 p-3 bg-white/5 hover:bg-white/15 text-white rounded-full transition-colors hidden md:block cursor-pointer focus:outline-none z-20"
                title="Previous"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <div 
                onClick={(e) => e.stopPropagation()} 
                className="max-w-4xl h-[75vh] w-full flex flex-col items-center justify-center space-y-4 relative"
              >
                <div className="relative w-full h-full flex-grow" style={{ position: 'relative' }}>
                  <Image 
                    src={GALLERY_ITEMS[lightboxIndex].image} 
                    alt={GALLERY_ITEMS[lightboxIndex].title} 
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-contain rounded-lg shadow-2xl origin-center"
                  />
                </div>
                <h2 className="font-serif text-lg md:text-xl font-bold text-[#ffe088] text-center w-full mt-4">
                  {GALLERY_ITEMS[lightboxIndex].title}
                </h2>
              </div>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 p-3 bg-white/5 hover:bg-white/15 text-white rounded-full transition-colors hidden md:block cursor-pointer focus:outline-none z-20"
                title="Next"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Mobile Swipe / Tap guidelines at footer */}
            <div className="pb-6 text-center text-white/40 font-sans text-[11px]">
              <span className="md:hidden">Swipe or click container to guide navigation • Close at the top x.</span>
              <span className="hidden md:block">Use keyboard arrows or hover overlays to inspect detailed architectures.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
