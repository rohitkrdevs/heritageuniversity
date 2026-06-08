"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CalendarRange, Award, Quote, CheckCircle } from 'lucide-react';
import { LEADERS } from '../data';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="space-y-16 py-8">
      
      {/* Title & Introductory Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-block px-3 py-1 bg-[#e7eeff] text-primary rounded-full font-sans text-xs font-semibold tracking-wider uppercase">
            WHO WE ARE
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
            Nurturing legacy, redefining academic possibility.
          </h1>
          <p className="font-sans text-base md:text-lg text-[#43474e] leading-relaxed">
            Heritage University stands as a beacon of world-class scholarship, research intensity, and public service. Guided by centuries of academic excellence, we look boldly to future horizons.
          </p>
        </div>
      </section>

      {/* Mission & Vision Bento Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ y: -3 }}
            className="bg-primary text-white p-8 rounded-2xl shadow-md flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <span className="text-[#ffe088] font-sans text-xs font-bold uppercase tracking-widest">Our Mission</span>
              <h2 className="font-serif text-2xl font-bold">In Pursuit of Truth and Social Growth</h2>
              <p className="font-sans text-sm text-white/85 leading-relaxed">
                To educate global leaders through integrated research, rigorous study, and critical evaluation, providing students of all backgrounds the pathways to pioneer innovations which uplift entire communities.
              </p>
            </div>
            <div className="border-t border-white/20 pt-4 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-secondary-fixed" />
              <span className="font-sans text-xs font-bold tracking-wider uppercase text-white/70">Fully Accredited Higher-Ed Beacon</span>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="bg-white text-primary p-8 rounded-2xl shadow-md border border-[#c4c6cf]/40 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <span className="text-secondary font-sans text-xs font-bold uppercase tracking-widest">Our Vision</span>
              <h2 className="font-serif text-2xl font-bold">To Redefine Educational Horizons</h2>
              <p className="font-sans text-sm text-[#43474e] leading-relaxed">
                We envision a future where elite scholarly structures adapt directly to the digital era—supporting open-access archives, cross-disciplinary laboratory pipelines, and international field research models.
              </p>
            </div>
            <div className="border-t border-[#c4c6cf]/40 pt-4 flex items-center gap-3">
              <Award className="w-5 h-5 text-[#ffe088]" />
              <span className="font-sans text-xs font-bold tracking-wider uppercase text-primary/70">Pioneers in Sustainability &amp; AI Ethics</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legacy Timeline */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-primary">University Timeline</h2>
          <p className="font-sans text-sm text-[#43474e] mt-2">Over a century of impact, cataloged by key historical milestones.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { year: '1894', title: "Founder's Vision", text: "Heritage University was officially chartered, dedicating our earliest classrooms to social sciences and classic liberal arts." },
            { year: '1945', title: "The Research Boom", text: "Post-war research grants allowed construction of our iconic Great Hall and earliest biological laboratories." },
            { year: '1998', title: "Global Affiliations", text: "Initiated key student exchange flows with premier Cambridge and Tokyo institutions, broadening our curriculum." },
            { year: '2024', title: "Digital Frontiers", text: "Established our $50M AI & Ethics research hub, launching advanced virtual systems and cloud learning." },
          ].map((milestone, idx) => (
            <div key={idx} className="bg-[#f0f3ff] rounded-2xl p-6 border border-[#c4c6cf]/30 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-serif text-3xl font-bold text-[#745c00] block">{milestone.year}</span>
                <h4 className="font-serif text-base font-bold text-primary">{milestone.title}</h4>
                <p className="font-sans text-xs text-[#43474e] leading-relaxed">{milestone.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team Profiles Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 bg-[#e7eeff] rounded-3xl py-12 px-6">
        <div className="mb-10 text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-serif text-3xl font-bold text-primary">University Leadership</h2>
          <p className="font-sans text-sm text-[#43474e]">
            Meet the administration shaping our academic objectives, supporting faculty research pipelines, and steering undergraduate excellence daily.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERS.map((leader) => (
            <motion.div
              key={leader.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow border border-[#c4c6cf]/30 group"
            >
              <div className="h-64 overflow-hidden relative bg-gray-100" style={{ position: 'relative' }}>
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-102"
                />
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-serif text-base font-bold text-primary group-hover:text-[#745c00] transition-colors leading-tight">
                    {leader.name}
                  </h3>
                  <span className="font-sans text-xs font-bold text-[#74777f]">
                    {leader.role}
                  </span>
                </div>
                <p className="font-sans text-xs text-[#43474e]/90 leading-normal line-clamp-4">
                  {leader.bio}
                </p>
                <div className="pt-2 border-t border-[#c4c6cf]/30 flex items-center justify-between">
                  <span className="font-sans text-[10px] font-bold text-primary uppercase bg-[#e7eeff] px-2.5 py-1 rounded-full">
                    {leader.experience}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quotes & Accreditations */}
      <section className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <div className="flex justify-center">
          <Quote className="w-10 h-10 text-secondary-container animate-pulse" />
        </div>
        <p className="font-serif text-lg md:text-xl italic text-primary font-medium leading-relaxed max-w-3xl mx-auto">
          "Heritage University is not simply an institute of higher learning; it is a collaborative vessel of human ambition, where scientists, artists, and leaders are encouraged to challenge the status quo for global impact."
        </p>
        <div className="flex flex-wrap justify-center gap-6 pt-2">
          {['AACSB Member', 'EQUIS Accredited', 'A+ Research Rating', 'Carnegie Classification R1'].map((tag, i) => (
            <span key={i} className="flex items-center gap-1.5 font-sans text-xs font-bold text-[#43474e] bg-white border border-[#c4c6cf]/40 px-4 py-2 rounded-full">
              <CheckCircle className="w-3.5 h-3.5 text-green-600" />
              {tag}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}
