import React from 'react';
import type { Metadata } from 'next';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomNav from '../components/BottomNav';

export const metadata: Metadata = {
  title: 'Heritage University',
  description: 'Nurturing minds, building futures, and preserving a legacy of academic excellence.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between bg-background-brand text-[#111c2c] selection:bg-[#fed65b] selection:text-[#745c00]">
        <Header />
        <main className="flex-grow w-full pb-20 md:pb-6">
          {children}
        </main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
