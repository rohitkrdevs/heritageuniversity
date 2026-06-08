"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Globe, History, GraduationCap, Calendar, Clock, MapPin, ChevronRight, ArrowRight, Cpu, Briefcase, BookOpen, FlaskConical, Quote, ArrowUpRight } from 'lucide-react';
import { NEWS, EVENTS } from '../data';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="space-y-20 pb-12">
      
      {/* Hero Section */}
      <section className="relative w-full h-[540px] md:h-[640px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0" style={{ position: 'absolute' }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-[0.75]"
          >
            <source src="/videos/college-tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-transparent z-10" />
        </div>

        <div className="relative z-20 max-w-7xl w-full mx-auto px-6 md:px-10 text-white space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-4"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-[#ffe088] font-sans text-xs font-semibold uppercase tracking-wider">
              ESTABLISHED 1892
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-white leading-none">
              Welcome to Heritage University
            </h1>
            <p className="font-sans text-base md:text-lg text-white/85 max-w-xl leading-relaxed">
              Nurturing minds, building futures, and preserving a legacy of academic excellence. Join a distinguished global community where heritage meets cutting-edge innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link 
              href="/admissions"
              className="bg-secondary-container hover:bg-secondary-fixed text-[#574500] font-sans text-sm font-bold tracking-wide uppercase px-8 py-4 rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all outline-none inline-flex items-center justify-center"
            >
              Apply Now
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white hover:bg-white/10 font-sans text-sm font-bold tracking-wide uppercase px-8 py-4 rounded-lg transition-colors outline-none inline-flex items-center justify-center"
            >
              Visit Campus
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">Why Choose Us</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Faculty & Resources (Large) */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="md:col-span-8 bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#c4c6cf]/40 flex flex-col md:flex-row gap-6 items-center"
          >
            <div className="flex-1 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#e7eeff] flex items-center justify-center text-primary">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-primary">
                Elite Faculty &amp; Resources
              </h3>
              <p className="font-sans text-sm text-[#43474e] leading-relaxed">
                Our educators are world-renowned researchers, practitioners, and leaders dedicated to direct mentorship. With over $200M in annual campus research funding, students gain entry into state-of-the-art labs and high-end archives.
              </p>
            </div>
            <div className="flex-1 w-full h-48 md:h-full rounded-xl overflow-hidden shadow-inner relative" style={{ position: 'relative' }}>
              <Image 
                src="/images/img_16.jpg" 
                alt="State-of-the-art laboratory guidance" 
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Global Network */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="md:col-span-4 bg-primary text-white rounded-2xl p-6 md:p-8 shadow-md flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#ffe088]">
                <Globe className="w-6 h-6 animate-spin-slow" />
              </div>
              <h3 className="font-serif text-xl font-semibold">
                Global Network
              </h3>
              <p className="font-sans text-sm text-white/80 leading-relaxed">
                Partnered with 150+ Ivy and Global institutions worldwide, offering study tours and access to a powerful alumni registry of over 500,000 prominent leaders.
              </p>
            </div>
          </motion.div>

          {/* Heritage */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="md:col-span-4 bg-secondary-container text-[#574500] rounded-2xl p-6 md:p-8 shadow-md flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/30 flex items-center justify-center">
                <History className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold">
                130+ Years of Excellence
              </h3>
              <p className="font-sans text-sm text-[#574500]/90 leading-relaxed">
                A rich history of groundbreaking scientific, social, and literary discoveries that continuously outline the progress of human society.
              </p>
            </div>
          </motion.div>

          {/* Metrics & Performance Stats */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="md:col-span-8 bg-[#d8e3fa] rounded-2xl p-6 md:p-8 shadow-md flex items-center justify-center border border-[#c4c6cf]/20"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 w-full text-center">
              <div className="space-y-1">
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary animate-pulse">98%</p>
                <p className="font-sans text-xs font-bold uppercase tracking-wider text-primary/70">Employability</p>
              </div>
              <div className="space-y-1">
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">12:1</p>
                <p className="font-sans text-xs font-bold uppercase tracking-wider text-primary/70">Student Ratio</p>
              </div>
              <div className="space-y-1">
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">85+</p>
                <p className="font-sans text-xs font-bold uppercase tracking-wider text-primary/70">Majors Offered</p>
              </div>
              <div className="space-y-1">
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">Top 10</p>
                <p className="font-sans text-xs font-bold uppercase tracking-wider text-primary/70">Research Rank</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Academic Divisions Section (NEW SECTION) */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">Academic Divisions</h2>
          <p className="font-sans text-sm text-[#43474e] mt-2">Pioneering knowledge across specialized schools of learning.</p>
          <div className="w-16 h-1 bg-secondary mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Cpu className="w-6 h-6 text-primary" />,
              title: "Engineering & AI",
              desc: "Unlocking biological computing, cognitive AI models, aerospace architectures, and advanced robotics.",
              bg: "bg-white",
              border: "border-[#c4c6cf]/40"
            },
            {
              icon: <Briefcase className="w-6 h-6 text-[#745c00]" />,
              title: "Business & Leadership",
              desc: "Cultivating entrepreneurial venture models, ethical leadership theories, and international market data.",
              bg: "bg-[#ffe088]/20",
              border: "border-[#ffe088]/40"
            },
            {
              icon: <FlaskConical className="w-6 h-6 text-primary" />,
              title: "Sciences & Biotech",
              desc: "Conducting cellular gene editing, renewable solar cell engineering, and cosmic astrophysics discovery.",
              bg: "bg-[#d8e3fa]/35",
              border: "border-[#d8e3fa]/60"
            },
            {
              icon: <BookOpen className="w-6 h-6 text-primary" />,
              title: "Humanities & Arts",
              desc: "Preserving global classical histories, literary criticism foundations, and modern digital aesthetics.",
              bg: "bg-white",
              border: "border-[#c4c6cf]/40"
            }
          ].map((school, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, boxShadow: '0 10px 25px -5px rgba(0, 32, 69, 0.08)' }}
              className={`p-6 rounded-2xl border ${school.border} ${school.bg} shadow-sm flex flex-col justify-between space-y-6 group`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-inner flex items-center justify-center border border-[#c4c6cf]/20">
                  {school.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                  {school.title}
                </h3>
                <p className="font-sans text-xs text-[#43474e] leading-relaxed">
                  {school.desc}
                </p>
              </div>
              <Link 
                href="/admissions" 
                className="font-sans text-[11px] font-bold text-primary uppercase flex items-center gap-1 group-hover:text-secondary transition-colors"
              >
                Explore Syllabus <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Research & Breakthroughs Showcase (NEW SECTION) */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image and Stat highlights */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-white/10 text-secondary-fixed rounded-full font-sans text-xs font-bold tracking-wider uppercase">
                  PIONEERING DISCOVERY
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
                  Pioneering Research That Shapes The Future
                </h2>
              </div>
              <p className="font-sans text-sm text-white/80 leading-relaxed">
                Our active research ecosystems address the most pressing global challenges. Undergraduates participate directly in breakthroughs, from bio-engineering to AI safety guidelines.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div>
                  <span className="font-serif text-3xl font-extrabold text-[#ffe088] block">$200M+</span>
                  <span className="font-sans text-[11px] font-bold text-white/60 uppercase tracking-wider">Annual Funding</span>
                </div>
                <div>
                  <span className="font-serif text-3xl font-extrabold text-[#ffe088] block">120+</span>
                  <span className="font-sans text-[11px] font-bold text-white/60 uppercase tracking-wider">Active Patents</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase Card */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="relative h-64 sm:h-full rounded-2xl overflow-hidden shadow-lg hidden sm:block">
                <Image 
                  src="/images/img_3.jpg" 
                  alt="Science Innovation Lab" 
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover filter brightness-95"
                />
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Renewable Energy Storage",
                    desc: "Engineering high-efficiency polymer solar storage cells designed for extreme climates."
                  },
                  {
                    title: "Cognitive AI Safety",
                    desc: "Formulating strict algorithmic ethics models in partnership with top regulatory bodies."
                  },
                  {
                    title: "Targeted Cancer Gene-Edits",
                    desc: "Pioneering CRISPR delivery systems to deliver localized cell therapies directly to tumors."
                  }
                ].map((research, idx) => (
                  <div key={idx} className="p-5 bg-white/5 border border-white/15 rounded-xl space-y-2">
                    <h4 className="font-serif text-base font-bold text-secondary-fixed">
                      {research.title}
                    </h4>
                    <p className="font-sans text-xs text-white/75 leading-relaxed">
                      {research.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-[#f0f3ff] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary">Latest News</h2>
              <p className="font-sans text-sm text-[#43474e] mt-2">Discover fresh achievements and breakthroughs across campus.</p>
            </div>
            <Link 
              href="/notices"
              className="text-primary hover:text-secondary font-sans text-sm font-bold flex items-center gap-1 group whitespace-nowrap"
            >
              View All Portal News 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NEWS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#c4c6cf]/30 group cursor-pointer flex flex-col h-full"
                onClick={() => router.push('/notices')}
              >
                <div className="h-48 overflow-hidden relative" style={{ position: 'relative' }}>
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    {item.category}
                  </span>
                </div>
                
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-primary leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-[#43474e] leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                  <span className="font-sans text-xs text-[#74777f] font-semibold">
                    {item.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Testimonials Section (NEW SECTION) */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">Alumni Spotlights</h2>
          <p className="font-sans text-sm text-[#43474e] mt-2">Hear from the scholars and innovators carrying our legacy forward.</p>
          <div className="w-16 h-1 bg-secondary mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "Heritage didn't just teach me computer science; it gave me the network and seed funding to launch a startup that now serves millions.",
              author: "Liam Patel",
              class: "Class of '18",
              role: "Co-Founder of AetherAI",
              image: "/images/img_10.jpg"
            },
            {
              quote: "The interdisciplinary curriculum allowed me to blend biology with environmental policy. Today, I advise international agencies on global sustainability.",
              author: "Sophia Thorne",
              class: "Class of '15",
              role: "Senior Policy Director at the UN",
              image: "/images/img_9.jpg"
            },
            {
              quote: "Conducting laboratory research as an undergraduate helped me publish my first paper. It was the perfect bridge for my doctorate at Cambridge.",
              author: "Dr. Noah Vance",
              class: "Class of '20",
              role: "Postdoctoral Research Fellow",
              image: "/images/img_8.jpg"
            }
          ].map((spotlight, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-[#c4c6cf]/40 shadow-sm flex flex-col justify-between space-y-6 relative"
            >
              <Quote className="w-8 h-8 text-[#ffe088] absolute top-6 right-6 opacity-40" />
              <p className="font-sans text-xs text-[#43474e] italic leading-relaxed pt-2">
                &ldquo;{spotlight.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-[#c4c6cf]/30">
                <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0 border border-[#c4c6cf]/60">
                  <Image 
                    src={spotlight.image} 
                    alt={spotlight.author} 
                    fill
                    sizes="48px"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-primary">{spotlight.author}</h4>
                  <p className="font-sans text-[10.5px] text-[#74777f] font-semibold">{spotlight.role} &bull; {spotlight.class}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="md:w-1/3 space-y-4 flex flex-col justify-center">
            <h2 className="font-serif text-3xl font-bold text-primary">Upcoming Events</h2>
            <p className="font-sans text-sm text-[#43474e] leading-relaxed">
              Mark your calendars for lectures, recruitment rounds, and symposiums defining our active academic lifecycle.
            </p>
            <div className="pt-2">
              <Link 
                href="/notices"
                className="bg-primary hover:bg-primary-container text-white px-6 py-3 rounded-lg font-sans text-sm font-semibold inline-flex items-center gap-2 shadow hover:scale-105 active:scale-95 transition-all outline-none"
              >
                <Calendar className="w-4 h-4" />
                View Full Calendar
              </Link>
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 gap-4">
            {EVENTS.map((evt) => (
              <motion.div
                key={evt.id}
                whileHover={{ x: 4, borderColor: '#191c1d' }}
                onClick={() => router.push('/notices')}
                className="flex items-center gap-4 md:gap-6 p-4 md:p-5 bg-white border border-[#c4c6cf]/40 rounded-2xl hover:border-primary transition-all duration-200 group cursor-pointer shadow-sm"
              >
                {/* Date Highlight Container */}
                <div className={`flex flex-col items-center justify-center w-20 h-20 rounded-xl flex-shrink-0 font-sans ${
                  evt.type === 'career' 
                    ? 'bg-secondary-container text-[#745c00]' 
                    : 'bg-[#e7eeff] text-primary'
                }`}>
                  <span className="font-bold text-2xl tracking-tight">{evt.day}</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider">{evt.month}</span>
                </div>

                {/* Info Container */}
                <div className="flex-grow space-y-1.5 min-w-0">
                  <h4 className="font-serif text-base md:text-lg font-bold text-primary group-hover:text-secondary transition-colors truncate">
                    {evt.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#43474e]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#ffe088]" />
                      {evt.timeRange}
                    </span>
                    <span className="flex items-center gap-1 truncate">
                      <MapPin className="w-3.5 h-3.5 text-[#ffe088]" />
                      {evt.location}
                    </span>
                  </div>
                </div>

                <div className="flex-shrink-0 text-[#74777f] group-hover:text-primary transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
