"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, GraduationCap, Map, BellRing } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname() || '/';

  const tabs = [
    { id: '/notices', label: 'Portal', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: '/admissions', label: 'Apply', icon: <GraduationCap className="w-5 h-5" /> },
    { id: '/gallery', label: 'Campus', icon: <Map className="w-5 h-5" /> },
    { id: '/', label: 'Updates', icon: <BellRing className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full z-[45] flex justify-around items-center h-16 bg-[#e7eeff] border-t border-[#c4c6cf] md:hidden shadow-lg select-none">
      {tabs.map((tab) => {
        const isSelected = pathname === tab.id || (tab.id !== '/' && pathname.startsWith(tab.id));
        return (
          <Link
            key={tab.id}
            href={tab.id}
            className={`flex flex-col items-center justify-center w-20 h-full transition-transform active:scale-95 duration-100 ${
              isSelected
                ? 'text-[#745c00]'
                : 'text-[#43474e]'
            }`}
          >
            <div className={`p-1 px-3 rounded-full flex flex-col items-center justify-center ${
              isSelected ? 'bg-[#fed65b]' : 'bg-transparent'
            }`}>
              {tab.icon}
              <span className="font-sans text-[10px] font-medium tracking-wide mt-0.5">
                {tab.label}
              </span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
