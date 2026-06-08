"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, Clock, Check, AlertTriangle, HelpCircle, CheckCircle, ExternalLink, CalendarDays } from 'lucide-react';

export default function ContactPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Admissions Inquiry');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && lastName && email && message) {
      setSending(true);
      setTimeout(() => {
        setSending(false);
        setStatus('success');
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
        
        setTimeout(() => {
          setStatus('idle');
        }, 4000);
      }, 2000);
    }
  };

  const directory = [
    { name: 'Admissions Board', phone: '+1 (555) 123-4560', mail: 'admissions@heritage.edu', room: 'Admissions Hall, Ground Floor' },
    { name: 'Registrar Staff', phone: '+1 (555) 123-4561', mail: 'registrar@heritage.edu', room: 'Great Hall Wing B, Rm 102' },
    { name: 'Controller of Exams', phone: '+1 (555) 123-4562', mail: 'controller@heritage.edu', room: 'Science Block, Rm 304' },
    { name: 'Student Services', phone: '+1 (555) 123-4563', mail: 'housing@heritage.edu', room: 'Student Union, Rm 12' },
  ];

  return (
    <div className="space-y-16 py-8">
      
      {/* Title Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-block px-3 py-1 bg-[#e7eeff] text-primary rounded-full font-sans text-xs font-semibold tracking-wider uppercase">
            REACH OUT
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
            Contact &amp; Assistance Center
          </h1>
          <p className="font-sans text-base md:text-lg text-[#43474e] leading-relaxed">
            Have questions about credits, campus lodging, or fellowship applications? Use the directories or the rapid portal inquiry tool below to obtain formal correspondence.
          </p>
        </div>
      </section>

      {/* Main Form & Directory Split */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Inquiry form */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-[#c4c6cf] shadow-sm space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-primary">Inquiry Transmission</h3>
              <p className="font-sans text-xs text-[#74777f] font-semibold mt-1">Submit your academic details to receive priority answers from admissions advisors.</p>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-4 font-sans text-left">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary uppercase block">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    disabled={status === 'success' || sending}
                    className="w-full bg-[#f9f9ff] text-primary border border-[#c4c6cf] rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-stone-400"
                    placeholder="e.g. Alistair"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary uppercase block">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    disabled={status === 'success' || sending}
                    className="w-full bg-[#f9f9ff] text-primary border border-[#c4c6cf] rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-stone-400"
                    placeholder="e.g. Vance"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-primary uppercase block">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === 'success' || sending}
                  className="w-full bg-[#f9f9ff] text-primary border border-[#c4c6cf] rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-stone-400"
                  placeholder="name@domain.com"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-primary uppercase block">Inquiry Topic / Division</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  disabled={status === 'success' || sending}
                  className="w-full bg-[#f9f9ff] text-primary border border-[#c4c6cf] rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                >
                  <option value="Admissions Inquiry">Admissions Guidelines</option>
                  <option value="Tuition Assistance">Financial Aid &amp; Scholarships</option>
                  <option value="Transcript Verification">Transcript Evaluation</option>
                  <option value="Lodging & Housing">Campus Living &amp; Housing</option>
                  <option value="Postgraduate Research">Postgraduate Fellowships</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-primary uppercase block">Inquiry Statement Details</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={status === 'success' || sending}
                  className="w-full bg-[#f9f9ff] text-primary border border-[#c4c6cf] rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-stone-400"
                  placeholder="Outline credentials, queries, context..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'success' || sending}
                className={`w-full py-3.5 rounded-lg text-sm font-bold uppercase tracking-wide px-4 flex items-center justify-center gap-2 transition-all outline-none cursor-pointer ${
                  status === 'success'
                    ? 'bg-emerald-600 text-white cursor-default'
                    : 'bg-primary text-white hover:bg-primary-container shadow hover:scale-[1.01]'
                }`}
              >
                {sending ? (
                  <>
                    <Clock className="w-4 h-4 animate-spin" />
                    Transmitting Inquiry...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-4 h-4 animate-bounce" />
                    Correspondence Logged
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Correspondence
                  </>
                )}
              </button>

            </form>

            {status === 'success' && (
              <p className="text-xs text-center text-emerald-700 font-bold bg-emerald-50 p-2.5 rounded-lg animate-pulse font-sans">
                Correspondence transmitted successfully. We usually reply in 24 business hours.
              </p>
            )}
          </div>

          {/* Directory section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-primary text-white p-6 rounded-2xl shadow-sm space-y-4">
              <h3 className="font-serif text-lg font-bold text-secondary-fixed">Campus Directory</h3>
              <p className="font-sans text-xs text-white/80 leading-relaxed">
                Connect directly with specific departmental desks. Work hours are Mon—Fri (09:00 AM - 05:00 PM UTC).
              </p>

              <div className="space-y-4 pt-2">
                {directory.map((dir, i) => (
                  <div key={i} className="border-b border-white/10 pb-3 last:border-0 last:pb-0 font-sans space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-secondary-fixed-dim">{dir.name}</p>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/95">{dir.phone}</span>
                      <a href={`mailto:${dir.mail}`} className="text-[#ffe088] underline hover:text-white transition-colors">{dir.mail}</a>
                    </div>
                    <p className="text-[10px] text-white/60">{dir.room}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick reminders card */}
            <div className="bg-secondary-container text-[#574500] p-6 rounded-2xl shadow-sm font-sans space-y-3">
              <h4 className="font-serif text-base font-bold flex items-center gap-1">
                <HelpCircle className="w-5 h-5 flex-shrink-0" /> Academic Visit Notice
              </h4>
              <p className="text-xs text-[#574500]/90 leading-relaxed">
                Self-guided walking tours are welcome across public areas on weekends. To schedule deep library guides or class visits, consult our admissions staff 48 hours prior.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Geography Map and Address block */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="bg-[#f0f3ff] rounded-3xl p-6 md:p-8 border border-[#c4c6cf]/20 flex flex-col md:flex-row gap-10 items-center justify-between">
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="w-6 h-6 text-[#745c00]" />
              <h3 className="font-serif text-xl font-bold">Physical Headquarters</h3>
            </div>
            <p className="font-sans text-sm text-[#43474e] leading-relaxed">
              Heritage University Campus<br />
              150 Founders Circle, Elm Estate<br />
              Cambridge, MA 02138
            </p>
            <div className="pt-2">
              <button 
                onClick={() => alert("Launching directional assistance...")}
                className="bg-primary hover:bg-primary-container text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg flex items-center gap-1.5 cursor-pointer shadow outline-none"
              >
                Get Transit Directions <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Render styled Mock map vector */}
          <div className="w-full md:w-[480px] h-64 bg-slate-200 rounded-2xl overflow-hidden relative shadow border border-[#c4c6cf]">
            {/* Beautiful clean blueprint graphic representing Cambridge, US academic estate map */}
            <div className="absolute inset-0 bg-[#e7eeff] p-6 flex flex-col justify-between select-none">
              <div className="absolute inset-0 opacity-15 overflow-hidden">
                {/* Visual grid representing roads */}
                <div className="w-full h-full border-t border-b border-primary/40 divide-y divide-primary/40 grid grid-cols-6 grid-rows-6">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="border-r border-primary/40"></div>
                  ))}
                </div>
              </div>

              {/* Labeled circles of the map */}
              <div className="relative z-10 font-sans h-full flex flex-col justify-between">
                <div className="flex justify-between">
                  <span className="text-[10px] uppercase font-bold text-primary/40 tracking-wider">Charles River Pathway</span>
                  <span className="text-[10px] uppercase font-bold text-primary/40 tracking-wider">Kirkland St</span>
                </div>
                
                {/* Labeled Estates */}
                <div className="absolute top-1/4 left-1/4 w-28 p-1.5 bg-white border border-primary/30 rounded shadow text-[9px] font-bold text-primary flex flex-col">
                  <span>🎓 Admissions Hall</span>
                  <span className="text-[7.5px] font-normal text-[#74777f]">Founders Circle</span>
                </div>

                <div className="absolute bottom-1/4 right-1/4 w-32 p-1.5 bg-white border border-primary/30 rounded shadow text-[9px] font-bold text-primary flex flex-col">
                  <span>🏛️ The Great Legacy Hall</span>
                  <span className="text-[7.5px] font-normal text-[#74777f]">Central Gardens</span>
                </div>

                {/* Pulsometer target representing university spot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-4 h-4 bg-rose-600 rounded-full border-2 border-white animate-ping absolute"></div>
                  <div className="w-4 h-4 bg-rose-600 rounded-full border-2 border-white relative flex items-center justify-center shadow">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-[10px] font-extrabold text-rose-800 bg-rose-100 border border-rose-300 px-1.5 py-0.5 rounded shadow mt-1 whitespace-nowrap">Heritage Campus</span>
                </div>

                <div className="flex justify-between items-end mt-auto">
                  <span className="text-[9px] text-[#74777f]">Lat: 42.3770° N, Lon: 71.1167° W</span>
                  <span className="text-[9px] text-primary/60 font-medium">Cambridge Estate Maps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
