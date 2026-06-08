"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Globe, Video, Share2, Mail, Phone, MapPin, Send, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-tertiary text-white border-t border-outline-variant/30 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand & Mission Statement */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-secondary-fixed">
            Heritage University
          </h2>
          <p className="font-sans text-sm text-white/80 leading-relaxed max-w-sm">
            Empowering generations through the pursuit of knowledge and the cultivation of excellence, bridging ancient wisdom with future innovation since 1892.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-fixed hover:text-primary transition-all duration-300" title="Website">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-fixed hover:text-primary transition-all duration-300" title="Media Library">
              <Video className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-fixed hover:text-primary transition-all duration-300" title="Share Portal">
              <Share2 className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h4 className="font-sans text-sm font-bold tracking-widest text-[#ffe088] uppercase">
            Quick Navigation
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/" className="text-white/85 text-sm hover:text-secondary-fixed hover:underline transition-colors text-left">
              Home Portal
            </Link>
            <Link href="/about" className="text-white/85 text-sm hover:text-secondary-fixed hover:underline transition-colors text-left">
              About History
            </Link>
            <Link href="/admissions" className="text-white/85 text-sm hover:text-secondary-fixed hover:underline transition-colors text-left">
              Admissions Info
            </Link>
            <Link href="/gallery" className="text-white/85 text-sm hover:text-secondary-fixed hover:underline transition-colors text-left">
              Campus Gallery
            </Link>
            <Link href="/notices" className="text-white/85 text-sm hover:text-secondary-fixed hover:underline transition-colors text-left">
              Latest Notices
            </Link>
            <Link href="/contact" className="text-white/85 text-sm hover:text-secondary-fixed hover:underline transition-colors text-left">
              Contact Us
            </Link>
          </div>
          
          <div className="pt-4 border-t border-white/10 space-y-2 text-sm text-white/70">
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-secondary-fixed" />
              <span>+1 (555) 123-4567</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-secondary-fixed" />
              <span>admissions@heritage.edu</span>
            </p>
          </div>
        </div>

        {/* Newsletter column */}
        <div className="space-y-4">
          <h4 className="font-sans text-sm font-bold tracking-widest text-[#ffe088] uppercase">
            Stay Connected
          </h4>
          <p className="text-sm text-white/80 leading-relaxed">
            Subscribe to our weekly academic gazette for events, reminders, and student updates.
          </p>

          <form onSubmit={handleSubmit} className="flex h-11 max-w-sm mt-2 rounded-lg overflow-hidden border border-white/20">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-grow bg-white/5 px-4 py-2 text-sm text-white border-0 focus:outline-none focus:ring-1 focus:ring-secondary-fixed placeholder-white/40"
              required
              disabled={submitted}
            />
            <button
              type="submit"
              className={`px-4 flex items-center justify-center transition-all ${
                submitted 
                  ? 'bg-green-600 text-white' 
                  : 'bg-secondary-fixed text-[#241a00] hover:bg-secondary-fixed-dim font-bold'
              }`}
            >
              {submitted ? <Check className="w-5 h-5 animate-pulse" /> : <Send className="w-4 h-4" />}
            </button>
          </form>
          {submitted && (
            <p className="text-xs text-[#ffe088] animate-bounce">
              Great! You've joined our official portal newsletter.
            </p>
          )}
        </div>

      </div>

      <div className="border-t border-white/10 py-8 px-6 text-center text-sm text-white/50">
        <p>© 2026 Heritage University. All Rights Reserved. Built with Academic Prestige.</p>
      </div>
    </footer>
  );
}
