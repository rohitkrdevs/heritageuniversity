"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, User, X, Home, GraduationCap, Image, BellRing, Info, Mail } from 'lucide-react';
import { ActiveTab } from '../types';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname() || '/';

  const navItems = [
    { id: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: '/about', label: 'About', icon: <Info className="w-5 h-5" /> },
    { id: '/admissions', label: 'Admissions', icon: <GraduationCap className="w-5 h-5" /> },
    { id: '/gallery', label: 'Gallery', icon: <Image className="w-5 h-5" /> },
    { id: '/notices', label: 'Notices', icon: <BellRing className="w-5 h-5" /> },
    { id: '/contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* TopAppBar */}
      <header className="bg-white text-primary border-b border-[#c4c6cf] shadow-sm sticky top-0 h-20 w-full z-50 transition-all duration-200">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 flex justify-between items-center h-full">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setDrawerOpen(true)}
              className="p-2 -ml-2 rounded-full hover:bg-[#e7eeff] transition-colors focus:outline-none"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-primary cursor-pointer" />
            </button>
            
            <Link 
              href="/"
              className="flex items-center gap-2 cursor-pointer group"
            >
              <span className="font-serif text-xl md:text-2xl font-bold text-primary tracking-tight group-hover:opacity-80 transition-opacity">
                Heritage University
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center h-full">
            {navItems.map((item) => {
              const isActive = pathname === item.id || (item.id !== '/' && pathname.startsWith(item.id));
              return (
                <Link
                  key={item.id}
                  href={item.id}
                  className={`relative flex items-center h-full text-sm font-semibold tracking-wide uppercase transition-all duration-200 px-1 border-b-2 ${
                    isActive
                      ? 'text-primary border-primary font-bold'
                      : 'text-[#43474e] border-transparent hover:text-primary hover:border-primary/45'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Account Circle */}
          <div className="flex items-center">
            <Link 
              href="/notices"
              className="p-2 rounded-full hover:bg-[#e7eeff] transition-colors relative group focus:outline-none"
              title="Academic Portal"
            >
              <User className="w-6 h-6 text-primary cursor-pointer" />
              <span className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-secondary-container border-2 border-white rounded-full"></span>
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation Drawer */}
      <div 
        className={`fixed inset-0 bg-primary/40 backdrop-blur-sm z-[65] transition-opacity duration-300 ${
          drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setDrawerOpen(false)}
      />

      <aside 
        className={`fixed inset-y-0 left-0 z-[70] flex flex-col h-full w-80 bg-primary shadow-2xl transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 pb-4 flex justify-between items-center border-b border-primary-container">
          <span className="font-serif text-lg font-bold text-secondary-fixed">
            Academic Portal
          </span>
          <button 
            onClick={() => setDrawerOpen(false)}
            className="p-1 rounded-full text-white hover:bg-white/10 transition-colors focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-1 p-4 overflow-y-auto">
          {navItems.map((item) => {
            const isSelected = pathname === item.id || (item.id !== '/' && pathname.startsWith(item.id));
            return (
              <Link
                key={item.id}
                href={item.id}
                onClick={() => setDrawerOpen(false)}
                className={`flex items-center gap-4 p-4 rounded-xl text-left font-sans text-base font-semibold tracking-wide uppercase transition-all duration-150 ${
                  isSelected
                    ? 'bg-[#fed65b] text-[#745c00] font-bold shadow-md'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
        
        <div className="mt-auto p-6 border-t border-primary-container bg-primary-container/30">
          <p className="text-xs text-white/50 text-center font-sans">
            Heritage University Portal v3.0 (Next.js)
          </p>
        </div>
      </aside>
    </>
  );
}
