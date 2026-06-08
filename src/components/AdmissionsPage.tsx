"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Landmark, CheckCircle2, AlertCircle, FileUp, ClipboardList, Flame, Send, HelpCircle, BadgePercent, ShieldCheck } from 'lucide-react';

interface SelectedCriteria {
  gpa: number;
  program: 'Undergraduate' | 'Postgraduate' | 'International' | 'Transfer';
  isInter: boolean;
}

export default function AdmissionsPage() {
  // Calculator state
  const [program, setProgram] = useState<'undergrad' | 'postgrad' | 'international' | 'transfer'>('undergrad');
  const [gpa, setGpa] = useState<number>(3.5);
  const [calculated, setCalculated] = useState(false);
  const [tuition, setTuition] = useState<number>(48000);
  const [scholarship, setScholarship] = useState<number>(0);

  // Inquiry email form state
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryProgram, setInquiryProgram] = useState('Business Administration');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const calculateFees = (e: React.FormEvent) => {
    e.preventDefault();
    let baseTuition = 48000;
    if (program === 'postgrad') baseTuition = 54000;
    if (program === 'international') baseTuition = 52000;
    if (program === 'transfer') baseTuition = 42000;

    let scholarshipAmount = 0;
    if (gpa >= 3.9) {
      scholarshipAmount = baseTuition * 0.50; // 50% merit discount
    } else if (gpa >= 3.7) {
      scholarshipAmount = baseTuition * 0.30; // 30% merit discount
    } else if (gpa >= 3.5) {
      scholarshipAmount = baseTuition * 0.15; // 15% merit discount
    }

    setTuition(baseTuition);
    setScholarship(scholarshipAmount);
    setCalculated(true);
  };

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (inquiryName && inquiryEmail) {
      setInquirySubmitted(true);
      setTimeout(() => {
        setInquiryName('');
        setInquiryEmail('');
        setInquirySubmitted(false);
      }, 3500);
    }
  };

  return (
    <div className="space-y-16 py-8">
      
      {/* Page Title */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-block px-3 py-1 bg-[#fed65b] text-[#745c00] rounded-full font-sans text-xs font-bold tracking-wider uppercase">
            Enrollment 2024-2025
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
            Admissions Criteria &amp; Guidelines
          </h1>
          <p className="font-sans text-base md:text-lg text-[#43474e] leading-relaxed">
            Every scholar brings a unique spark to campus. Find the admissions criteria, GPA specifications, tuition outlines, and documentation prerequisites tailored to your career trajectory below.
          </p>
        </div>
      </section>

      {/* Criteria Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-8">
          <h2 className="font-serif text-2xl font-bold text-primary">Prerequisites by Program</h2>
          <p className="font-sans text-xs text-[#74777f] font-semibold mt-1">Review basic thresholds required for a standard competitive evaluation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Undergraduate Card */}
          <div className="bg-white rounded-2xl p-6 border border-[#c4c6cf]/40 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#745c00] bg-[#ffe088] px-2 py-0.5 rounded-full inline-block">Undergrad</span>
              <h3 className="font-serif text-lg font-bold text-primary">Bachelor Programs</h3>
              <ul className="space-y-2 text-xs text-[#43474e] font-sans">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Min CGPA: 3.6 / 4.0 Scale</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>SAT / ACT optional</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>TOEFL 90 / IELTS 6.5</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-[#c4c6cf]/40 pt-4">
              <span className="text-[11px] text-[#74777f] uppercase font-bold tracking-wider">Est. Tuition</span>
              <p className="font-serif text-xl font-bold text-primary">$48,000<span className="text-xs font-sans text-stone-500 font-normal"> / Year</span></p>
            </div>
          </div>

          {/* Postgraduate Card */}
          <div className="bg-white rounded-2xl p-6 border border-[#c4c6cf]/40 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#745c00] bg-[#ffe088] px-2 py-0.5 rounded-full inline-block font-sans">Graduate</span>
              <h3 className="font-serif text-lg font-bold text-primary">Masters &amp; Doctorate</h3>
              <ul className="space-y-2 text-xs text-[#43474e] font-sans">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Min GPA: 3.4 in Bachelor</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>GRE / GMAT requirements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Thesis outline draft</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-[#c4c6cf]/40 pt-4">
              <span className="text-[11px] text-[#74777f] uppercase font-bold tracking-wider">Est. Tuition</span>
              <p className="font-serif text-xl font-bold text-primary">$54,000<span className="text-xs font-sans text-stone-500 font-normal"> / Year</span></p>
            </div>
          </div>

          {/* International Card */}
          <div className="bg-white rounded-2xl p-6 border border-[#c4c6cf]/40 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#745c00] bg-[#ffe088] px-2 py-0.5 rounded-full inline-block">International</span>
              <h3 className="font-serif text-lg font-bold text-primary">Global Scholars</h3>
              <ul className="space-y-2 text-xs text-[#43474e] font-sans">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>WES Transcript check</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>F1 Student Visa proof</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>TOEFL 100 / IELTS 7.0</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-[#c4c6cf]/40 pt-4">
              <span className="text-[11px] text-[#74777f] uppercase font-bold tracking-wider">Est. Tuition</span>
              <p className="font-serif text-xl font-bold text-primary">$52,000<span className="text-xs font-sans text-stone-500 font-normal"> / Year</span></p>
            </div>
          </div>

          {/* Transfer Card */}
          <div className="bg-white rounded-2xl p-6 border border-[#c4c6cf]/40 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#745c00] bg-[#ffe088] px-2 py-0.5 rounded-full inline-block font-sans">Transfers</span>
              <h3 className="font-serif text-lg font-bold text-primary">Course Transitions</h3>
              <ul className="space-y-2 text-xs text-[#43474e] font-sans">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Min GPA: 3.2 in past college</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Min 24 completed credit hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Syllabus review required</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-[#c4c6cf]/40 pt-4">
              <span className="text-[11px] text-[#74777f] uppercase font-bold tracking-wider">Est. Tuition</span>
              <p className="font-serif text-xl font-bold text-primary">$42,000<span className="text-xs font-sans text-stone-500 font-normal"> / Year</span></p>
            </div>
          </div>

        </div>
      </section>

      {/* Step by Step Admissions Pathway */}
      <section className="bg-[#f0f3ff] rounded-3xl py-12 px-6 max-w-7xl mx-auto border border-[#c4c6cf]/20">
        <div className="text-center mb-10 max-w-2xl mx-auto space-y-2">
          <h2 className="font-serif text-3xl font-bold text-primary">The Process: 4 Simple Steps</h2>
          <p className="font-sans text-sm text-[#43474e]">
            Our submission cycle is streamlined so you can focus core attention on organizing brilliant candidate essays and reference outlines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '01', icon: <Send className="w-5 h-5 text-primary" />, title: 'Inquire Online', text: 'Submit parent contact details, primary academic pathways, and interest levels.' },
            { step: '02', icon: <FileUp className="w-5 h-5 text-[#745c00]" />, title: 'Upload Credentials', text: 'Forward secondary checklists, transcript PDFs, test score copies, and letters.' },
            { step: '03', icon: <ClipboardList className="w-5 h-5 text-primary" />, title: 'Live Verification', text: 'Participate in optional Zoom evaluations, matching academic motivations to key faculty.' },
            { step: '04', icon: <BadgePercent className="w-5 h-5 text-medium text-primary" />, title: 'Merit Assessment', text: 'Our panel determines initial tuition scholarship offsets, funding, or grant programs.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-[#c4c6cf]/30 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-serif text-4xl font-extrabold text-[#745c00]/25">{item.step}</span>
                <div className="p-3 bg-[#e7eeff] rounded-full">
                  {item.icon}
                </div>
              </div>
              <h4 className="font-serif text-base font-bold text-primary">{item.title}</h4>
              <p className="font-sans text-xs text-[#43474e] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Tool Check + Inquiry Fields */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tuition Estimator Card (Interactive Tool) */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-[#c4c6cf] shadow-sm space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-primary">Fee &amp; Merit Scholarship Estimator</h3>
              <p className="font-sans text-xs text-[#74777f] font-semibold">Select your status and enter your GPA to calculate possible savings instantly.</p>
            </div>

            <form onSubmit={calculateFees} className="space-y-4 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-primary uppercase block">Target Pathway</label>
                  <select 
                    value={program}
                    onChange={(e: any) => setProgram(e.target.value)}
                    className="w-full bg-[#f9f9ff] text-sm text-primary border border-[#c4c6cf] rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  >
                    <option value="undergrad">Undergraduate Program</option>
                    <option value="postgrad">Postgraduate Program</option>
                    <option value="international">International Scholar</option>
                    <option value="transfer">Transition Transfer</option>
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold text-primary uppercase block">Cumulative GPA (or Equivalent)</label>
                  <input 
                    type="number"
                    step="0.05"
                    min="2.0"
                    max="4.0"
                    value={gpa}
                    onChange={(e) => setGpa(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[#f9f9ff] text-sm text-primary border border-[#c4c6cf] rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    required
                  />
                  <span className="text-[11px] text-[#74777f] block mt-0.5">Please specify values between 2.0 and 4.0.</span>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-[#1a365d] text-white py-3.5 rounded-lg text-sm font-semibold shadow hover:scale-[1.01] transition-transform cursor-pointer outline-none"
              >
                Estimate Academic Tuition &amp; Aid
              </button>
            </form>

            {calculated && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 bg-[#e7eeff] rounded-xl border border-primary/20 space-y-3 font-sans"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-primary/80">Standard Annual Fee:</span>
                  <span className="font-serif text-lg font-bold text-primary">${tuition.toLocaleString()}</span>
                </div>
                
                {scholarship > 0 ? (
                  <div className="flex justify-between items-center text-emerald-700">
                    <span className="text-sm font-bold flex items-center gap-1">
                      <HelpCircle className="w-4 h-4" />
                      Presidential Merit Offset ({gpa >= 3.9 ? '50%' : gpa >= 3.7 ? '30%' : '15%'}):
                    </span>
                    <span className="font-serif text-lg font-bold">-${scholarship.toLocaleString()}</span>
                  </div>
                ) : (
                  <p className="text-[11px] text-[#745c00] bg-[#ffe088] p-2.5 rounded-lg flex items-center gap-1.5 font-medium leading-relaxed">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Provide GPA above 3.50 to qualify for the Presidential Merit Offset scholarship.</span>
                  </p>
                )}

                <div className="border-t border-[#c4c6cf]/40 pt-3 flex justify-between items-center font-bold text-primary text-base md:text-lg">
                  <span>Net Estimated Tuition:</span>
                  <span className="font-serif text-xl md:text-2xl text-secondary">${(tuition - scholarship).toLocaleString()}</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Inquiry Sidecar Mini-Form */}
          <div className="lg:col-span-5 bg-[#ffe088] text-[#574500] p-6 md:p-8 rounded-2xl flex flex-col justify-between h-full shadow-sm space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#745c00]/80">Interactive Inquiry</span>
              <h3 className="font-serif text-xl font-bold">Request Admissions Pack</h3>
              <p className="font-sans text-xs text-[#574500]/90 leading-relaxed">
                Provide essential fields to receive official brochures, scholarships guidelines, and details concerning the 2024 academic cycle.
              </p>
            </div>

            <form onSubmit={handleInquiry} className="space-y-3 font-sans">
              <div className="space-y-1">
                <input 
                  type="text" 
                  placeholder="Your Full Name"
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  className="w-full bg-white/50 text-sm text-primary placeholder-[#745c00]/60 border border-[#745c00]/30 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-[#745c00]"
                  required
                  disabled={inquirySubmitted}
                />
              </div>
              <div className="space-y-1">
                <input 
                  type="email" 
                  placeholder="Your Primary Email Address"
                  value={inquiryEmail}
                  onChange={(e) => setInquiryEmail(e.target.value)}
                  className="w-full bg-white/50 text-sm text-primary placeholder-[#745c00]/60 border border-[#745c00]/30 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-[#745c00]"
                  required
                  disabled={inquirySubmitted}
                />
              </div>
              <div className="space-y-1">
                <select
                  value={inquiryProgram}
                  onChange={(e) => setInquiryProgram(e.target.value)}
                  className="w-full bg-white/50 text-sm text-primary border border-[#745c00]/30 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-[#745c00]"
                  required
                  disabled={inquirySubmitted}
                >
                  <option value="Business Administration">Business Administration, BS</option>
                  <option value="Computer Science">Computer Science, CS &amp; AI</option>
                  <option value="BioEngineering">BioEngineering, MS</option>
                  <option value="International Law">International Law, LLM</option>
                  <option value="Fine Arts">Fine Arts &amp; History, BFA</option>
                </select>
              </div>

              <button 
                type="submit" 
                className={`w-full py-3.5 rounded-lg text-sm font-bold uppercase tracking-wide px-4 flex items-center justify-center gap-2 transition-all outline-none ${
                  inquirySubmitted 
                    ? 'bg-emerald-700 text-white cursor-default' 
                    : 'bg-primary text-white hover:bg-primary-container shadow hover:scale-[1.01]'
                }`}
              >
                {inquirySubmitted ? (
                  <>
                    <ShieldCheck className="w-4 h-4 animate-bounce" />
                    Admissions Pack Requested
                  </>
                ) : (
                  'Send Admissions Pack'
                )}
              </button>
            </form>

            {inquirySubmitted && (
              <p className="text-xs text-center text-[#745c00]/90 animate-pulse font-sans">
                Brochure sent successfully to {inquiryEmail}. Please look at your inbox.
              </p>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
