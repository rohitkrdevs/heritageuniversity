"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Flame, Megaphone, Terminal, FileDown, BellRing, Eye, Filter, CheckCircle } from 'lucide-react';
import { NOTICES } from '../data';
import { Notice } from '../types';

export default function NoticesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [docDownloadingId, setDocDownloadingId] = useState<string | null>(null);
  const [activeNoticeId, setActiveNoticeId] = useState<string | null>(null);

  const categories = ['All', 'Urgent', 'Holiday', 'Notice', 'Events'];

  // Handle Search & Filter logic
  const filteredNotices = NOTICES.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleDownload = (id: string) => {
    setDocDownloadingId(id);
    setTimeout(() => {
      setDocDownloadingId(null);
      alert("Academic Document Download successful. Retained inside your device's files.");
    }, 2000);
  };

  return (
    <div className="space-y-12 py-8">
      
      {/* Title & Stats Headers */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-block px-3 py-1 bg-[#fed65b] text-[#745c00] rounded-full font-sans text-xs font-bold tracking-wider uppercase">
            Official Notices &amp; Bulletins
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
            Academic Bulletin Board
          </h1>
          <p className="font-sans text-base md:text-lg text-[#43474e] leading-relaxed">
            Review terminal schedules, holiday disclosures, merit listings, guest lectures, and campus guidelines published directly by structural controllers and registrars.
          </p>
        </div>
      </section>

      {/* Advanced Search & Filtering Console */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 font-sans">
        <div className="bg-white p-5 md:p-6 rounded-2xl border border-[#c4c6cf] shadow-sm flex flex-col md:flex-row gap-4 items-center">
          
          {/* Search Input */}
          <div className="w-full md:flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by heading, department, keyword, or course number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#f9f9ff] text-primary rounded-lg text-sm pl-12 pr-4 py-3 border border-[#c4c6cf] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Filtering Chips inline */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-[#f0f3ff] text-primary hover:bg-[#e7eeff] border border-primary/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Bulletins Feed List */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredNotices.map((info) => {
              const isDownloading = docDownloadingId === info.id;
              const isDetailsOpen = activeNoticeId === info.id;
              
              // Define tag colors based on category
              let badgeColor = "bg-[#f0f3ff] text-primary";
              if (info.category === 'Urgent') badgeColor = "bg-rose-100 text-rose-800 border-rose-300 border animate-pulse";
              if (info.category === 'Holiday') badgeColor = "bg-amber-100 text-amber-800 border-amber-300 border";
              if (info.category === 'Notice') badgeColor = "bg-sky-100 text-sky-800 border-sky-300 border";
              if (info.category === 'Events') badgeColor = "bg-[#fed65b]/30 text-[#745c00] border border-[#ffe088]";

              return (
                <motion.div
                  layout
                  key={info.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`bg-white rounded-2xl border border-[#c4c6cf]/40 shadow-sm p-5 md:p-6 flex flex-col md:flex-row gap-6 relative overflow-hidden transition-all duration-300 ${
                    info.urgent ? 'ring-2 ring-rose-500/10 border-rose-200' : ''
                  }`}
                >
                  {/* Left Column - Date Stamp */}
                  <div className="flex-shrink-0 flex md:flex-col items-center justify-center gap-2 md:gap-0 bg-[#e7eeff] text-primary w-full md:w-24 h-16 md:h-24 rounded-xl">
                    <span className="font-serif text-3xl font-extrabold tracking-tight">{info.date}</span>
                    <span className="font-sans text-xs font-bold uppercase tracking-wider">{info.month}</span>
                  </div>

                  {/* Right Column - Notice Data */}
                  <div className="flex-grow space-y-4 min-w-0">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${badgeColor}`}>
                          {info.category}
                        </span>
                        <span className="font-sans text-xs font-bold text-[#74777f] truncate">
                          {info.department}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg md:text-xl font-bold text-primary group-hover:text-secondary leading-snug cursor-pointer" onClick={() => setActiveNoticeId(isDetailsOpen ? null : info.id)}>
                        {info.title}
                      </h3>
                    </div>

                    <div className="font-sans text-sm text-[#43474e] leading-relaxed">
                      <p className={isDetailsOpen ? '' : 'line-clamp-2'}>
                        {info.excerpt}
                      </p>
                      {isDetailsOpen && (
                        <motion.div 
                          initial={{ opacity: 0 }} 
                          animate={{ opacity: 1 }} 
                          className="mt-4 p-4 bg-[#f0f3ff] rounded-xl text-xs space-y-3 border border-[#c4c6cf]/20"
                        >
                          <p className="font-bold flex items-center gap-1"><Terminal className="w-4 h-4 text-[#745c00]" /> SYSTEM REPUTATION FOOTNOTE</p>
                          <p>Students must report with physical prints of documentation and verifiable student credentials. For further requests, open contact center inquiry records.</p>
                        </motion.div>
                      )}
                    </div>

                    {/* Operational Triggers */}
                    <div className="flex flex-wrap justify-between items-center gap-4 pt-2 border-t border-[#c4c6cf]/30">
                      
                      <button 
                        onClick={() => setActiveNoticeId(isDetailsOpen ? null : info.id)}
                        className="text-xs font-bold font-sans text-primary hover:text-secondary flex items-center gap-1.5 focus:outline-none"
                      >
                        <Eye className="w-4 h-4" />
                        {isDetailsOpen ? 'Hide systemic logs' : 'Expand full statement'}
                      </button>

                      <button 
                        onClick={() => handleDownload(info.id)}
                        disabled={isDownloading}
                        className={`font-sans text-xs font-bold py-2.5 px-4 rounded-lg flex items-center gap-1.5 cursor-pointer outline-none transition-all ${
                          isDownloading 
                            ? 'bg-emerald-600 text-white shadow-none scale-100' 
                            : 'bg-[#e7eeff] text-primary hover:bg-[#fed65b] border border-primary/5'
                        }`}
                      >
                        {isDownloading ? (
                          <>
                            <CheckCircle className="w-4 h-4 animate-pulse" />
                            Transmitting Document...
                          </>
                        ) : (
                          <>
                            <FileDown className="w-4 h-4" />
                            Download Official PDF
                          </>
                        )}
                      </button>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredNotices.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-[#c4c6cf] max-w-sm mx-auto space-y-4">
            <BellRing className="w-12 h-12 text-[#74777f] mx-auto animate-bounce" />
            <div className="space-y-1">
              <p className="font-sans text-sm text-[#43474e] font-semibold">No matching bulletins found</p>
              <p className="font-sans text-xs text-[#74777f]">Alter search key or restore filter parameters to All alerts.</p>
            </div>
          </div>
        )}
      </section>

    </div>
  );
}
