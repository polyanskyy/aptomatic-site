/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Terminal, Smartphone, ShieldCheck, Code2, Send, Cpu, BugPlay, Menu, X, ChevronRight, CheckCircle, MessagesSquare } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-retro-green selection:text-black flex flex-col relative w-full">
      {/* Background Graphic Layer representing computing evolution - Bright Theme */}
      <div 
        className="fixed inset-0 z-[-1] opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: `url('/background-faded.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(80%) brightness(110%) contrast(90%)'
        }}
      />
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-brand-cream/95 backdrop-blur-md border-b border-brand-brown-dark/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo area */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigateTo('home')}>
              <div className="flex items-center gap-3">
                <img 
                  src="/Aptomatic-logo.png" 
                  alt="Aptomatic Logo" 
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="%230A0A0A" stroke="%2341FF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>';
                  }} 
                />
                <img 
                  src="/Aptomatic-logo-text.png" 
                  alt="Aptomatic" 
                  className="h-7 object-contain hidden sm:block"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Fallback Text if logo-text.png is missing */}
                <span className="hidden font-mono text-xl tracking-wider font-bold text-brand-black uppercase">
                  aptomatic
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'apps', 'qa', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => navigateTo(item)}
                    className={`${currentPage === item ? 'text-retro-green bg-brand-black' : 'text-brand-brown-dark hover:text-retro-green hover:bg-brand-black'} px-4 py-2 rounded-md font-mono text-xs font-bold uppercase tracking-widest transition-all`}
                  >
                    {item === 'qa' ? 'QA & Testing' : item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brand-brown-dark hover:text-black focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-brand-cream border-b border-brand-brown-dark/10 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'apps', 'qa', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => navigateTo(item)}
                  className={`${currentPage === item ? 'text-retro-green bg-brand-black' : 'text-brand-brown-dark hover:text-retro-green hover:bg-brand-black'} block px-3 py-4 w-full text-left font-mono text-sm uppercase tracking-widest border-b border-brand-brown-dark/5 last:border-0 transition-all font-bold`}
                >
                  {item === 'qa' ? 'QA & Testing' : item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        
        {/* HOMEPAGE */}
        {currentPage === 'home' && (
          <section id="home" className="relative min-h-[85vh] py-16 flex flex-col items-center z-10 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center gap-8 mb-16">
              <div className="inline-block px-4 py-1 border border-brand-brown-dark/20 text-brand-brown-dark font-mono text-xs font-bold uppercase tracking-widest rounded-sm bg-white/70 backdrop-blur-sm shadow-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-retro-green mr-2 glow-box border border-brand-black"></span>
                Technical Consulting & Engineering
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-brand-black max-w-4xl leading-[1.1]">
                Architecting <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-brown-dark to-brand-brown-light">The Future.</span>
              </h1>
            </div>

            {/* Navigator Boxes */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-3 gap-6">
              {/* Apps Nav Box */}
              <button 
                onClick={() => navigateTo('apps')}
                className="group text-left bg-white/80 backdrop-blur-md border border-brand-brown-dark/10 p-8 rounded-xl hover:shadow-xl hover:-translate-y-1 hover:border-retro-green/50 transition-all flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-brand-black rounded-lg flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(65,255,0,0.3)] transition-shadow">
                  <Code2 className="text-retro-green" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-3">Featured Apps</h3>
                <p className="text-brand-brown-dark font-medium leading-relaxed mb-6 flex-grow">
                  Explore our high-performance, in-house applications built with cutting-edge tech.
                </p>
                <span className="flex items-center gap-2 text-sm font-bold text-brand-black group-hover:text-retro-green transition-colors mt-auto uppercase tracking-widest font-mono">
                  View Portoflio <ChevronRight size={16} />
                </span>
              </button>

              {/* QA Nav Box */}
              <button 
                onClick={() => navigateTo('qa')}
                className="group text-left bg-white/80 backdrop-blur-md border border-brand-brown-dark/10 p-8 rounded-xl hover:shadow-xl hover:-translate-y-1 hover:border-retro-green/50 transition-all flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-brand-black rounded-lg flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(65,255,0,0.3)] transition-shadow">
                  <ShieldCheck className="text-retro-green" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-3">QA & Testing</h3>
                <p className="text-brand-brown-dark font-medium leading-relaxed mb-6 flex-grow">
                  Comprehensive quality assurance, automated CI/CD checks, and rigorous manual testing.
                </p>
                <span className="flex items-center gap-2 text-sm font-bold text-brand-black group-hover:text-retro-green transition-colors mt-auto uppercase tracking-widest font-mono">
                  Learn More <ChevronRight size={16} />
                </span>
              </button>

              {/* Contact Nav Box */}
              <button 
                onClick={() => navigateTo('contact')}
                className="group text-left bg-brand-black border border-brand-brown-dark/20 p-8 rounded-xl hover:shadow-[0_10px_30px_rgba(65,255,0,0.15)] hover:-translate-y-1 hover:border-retro-green transition-all flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(65,255,0,0.3)] transition-shadow border border-white/5">
                  <Terminal className="text-retro-green" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">About & Contact</h3>
                <p className="text-gray-400 font-medium leading-relaxed mb-6 flex-grow">
                  Read our mission and initiate comms to architect your next system with Aptomatic.
                </p>
                <span className="flex items-center gap-2 text-sm font-bold text-retro-green group-hover:text-white transition-colors mt-auto uppercase tracking-widest font-mono">
                  Initiate Comms <ChevronRight size={16} />
                </span>
              </button>
            </div>
          </section>
        )}

        {/* APPS SECTION */}
        {currentPage === 'apps' && (
          <section id="apps" className="py-24 relative z-10 min-h-[80vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3 text-brand-black">
                  <Code2 className="text-brand-brown-dark" /> Featured Software
                </h2>
                <p className="text-brand-brown-light font-mono text-sm uppercase tracking-widest border-l-2 border-brand-brown-dark pl-4 font-bold">
                  In-House Developed Applications
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center bg-white/80 backdrop-blur-md border border-brand-brown-dark/10 rounded-xl p-8 lg:p-12 shadow-sm">
                {/* App Image / Mockup - Deep contrast wrapper */}
                <div className="relative flex justify-center bg-brand-black border-4 border-brand-brown-dark rounded-xl p-8 overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-retro-green/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src="/free_calculator.png" 
                    alt="Free Calculator App Interface" 
                    className="w-full max-w-[280px] object-cover rounded-md shadow-[0_0_30px_rgba(65,255,0,0.15)] relative z-10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80&w=600';
                    }}
                  />
                </div>

                {/* App Details */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-16 h-16 bg-brand-black border-2 border-brand-brown-dark rounded-xl flex items-center justify-center p-2 shadow-sm">
                        <img 
                          src="/free_calculator_foreground.png" 
                          alt="App Icon" 
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                     </div>
                     <div>
                       <h3 className="text-2xl font-bold text-brand-black">Free Calculator</h3>
                       <p className="text-brand-brown-light font-mono text-sm tracking-widest font-bold">v1.0.0 | Utilities</p>
                     </div>
                  </div>
                  
                  <p className="text-brand-brown-dark mb-8 leading-relaxed font-medium">
                    A high-performance, ad-free calculation utility with a stunning dark-mode interface. Built entirely with Flutter for seamless native performance. Experience the Aptomatic development standard right on your device.
                  </p>

                  <ul className="space-y-3 font-mono text-sm text-brand-black font-bold mb-8">
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-brand-brown-dark"/> Flutter Native Engine</li>
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-brand-brown-dark"/> Precision Arithmetic Algorithms</li>
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-brand-brown-dark"/> Zero Advertisements</li>
                  </ul>

                  <button className="flex items-center gap-3 bg-[#111] text-white px-8 py-4 rounded-md font-semibold hover:bg-brand-black hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-all">
                    <Smartphone size={24} className="text-retro-green" />
                    <span className="text-left font-sans">Get it on <br/><span className="text-sm font-bold -mt-1 block">Google Play</span></span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* QA & TESTING SECTION */}
        {currentPage === 'qa' && (
          <section id="qa" className="py-24 relative z-10 min-h-[80vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3 text-brand-black">
                  <ShieldCheck className="text-brand-brown-dark" /> QA & Testing
                </h2>
                <p className="max-w-2xl mx-auto text-brand-brown-light font-medium leading-relaxed">
                  We provide comprehensive quality assurance services. From rigorous manual oversight to advanced automated CI/CD checks, we ensure your software handles real-world stress.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Automated Testing */}
                <div className="bg-white/80 backdrop-blur-md border border-brand-brown-dark/10 p-8 hover:-translate-y-1 hover:shadow-xl transition-all group rounded-xl">
                  <Cpu size={40} className="text-brand-brown-light group-hover:text-brand-brown-dark mb-6 transition-colors" />
                  <h3 className="text-2xl font-bold mb-4 text-brand-black">Automated Testing</h3>
                  <p className="text-brand-brown-dark mb-8 font-medium leading-relaxed">
                    Integration pipelines, E2E testing using modern frameworks, and unit testing protocols designed for Angular and Node.js environments.
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-xs font-bold text-retro-green">
                    <span className="bg-brand-black px-3 py-1.5 rounded-sm">CYPRESS</span>
                    <span className="bg-brand-black px-3 py-1.5 rounded-sm">JEST</span>
                    <span className="bg-brand-black px-3 py-1.5 rounded-sm">APPIUM</span>
                  </div>
                </div>

                {/* Manual Testing */}
                <div className="bg-white/80 backdrop-blur-md border border-brand-brown-dark/10 p-8 hover:-translate-y-1 hover:shadow-xl transition-all group rounded-xl">
                  <BugPlay size={40} className="text-brand-brown-light group-hover:text-brand-brown-dark mb-6 transition-colors" />
                  <h3 className="text-2xl font-bold mb-4 text-brand-black">Manual QA</h3>
                  <p className="text-brand-brown-dark mb-8 font-medium leading-relaxed">
                    Human-driven cognitive testing, UI/UX audits, usability heuristics, and edge-case validation that automated scripts can easily overlook.
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-xs font-bold text-retro-green">
                    <span className="bg-brand-black px-3 py-1.5 rounded-sm">EXPLORATORY</span>
                    <span className="bg-brand-black px-3 py-1.5 rounded-sm">UAT</span>
                    <span className="bg-brand-black px-3 py-1.5 rounded-sm">ACCESSIBILITY</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ABOUT & CONTACT SECTION */}
        {currentPage === 'contact' && (
          <section id="contact" className="py-24 relative overflow-hidden z-10 min-h-[80vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16">
                
                {/* Mission Statement */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-black">About Aptomatic.</h2>
                  <div className="text-2xl font-light text-brand-brown-dark leading-snug mb-8">
                    "Our mission is to architect systems that accelerate our clients toward the technological frontier."
                  </div>
                  <div className="space-y-4 text-brand-brown-light font-medium leading-relaxed max-w-lg">
                    <p>
                      Whether you need a massive enterprise frontend refactor in Angular, a high-throughput backend scaled via Node.js, or a stunning cross-platform mobile experience in Flutter—Aptomatic brings precision engineering to every line of code.
                    </p>
                    <p>
                      We believe in high-contrast logic, transparent communication, and software that just works.
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-brand-black border border-white/10 p-8 rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
                    <Terminal size={20} className="text-retro-green"/> System Inquiry
                  </h3>
                  
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-retro-green mb-2">Sender Identifier</label>
                      <input 
                        type="text" 
                        className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-retro-green transition-colors font-mono text-sm"
                        placeholder="Name / Company"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-retro-green mb-2">Routing Address</label>
                      <input 
                        type="email" 
                        className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-retro-green transition-colors font-mono text-sm"
                        placeholder="email@domain.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-retro-green mb-2">Data Packet</label>
                      <textarea 
                        rows={4}
                        className="w-full bg-[#111111] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-retro-green transition-colors font-mono text-sm resize-none"
                        placeholder="Describe your project parameters..."
                      ></textarea>
                    </div>
                    <button className="w-full bg-retro-green text-brand-black font-bold py-4 flex items-center justify-center gap-2 hover:bg-[#32c900] transition-colors rounded-sm font-mono uppercase tracking-widest shadow-[0_0_15px_rgba(65,255,0,0.2)]">
                      Transmit <Send size={18} />
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-brand-black border-t border-white/10 py-10 z-10 text-white mt-auto relative shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono font-bold text-gray-400 tracking-widest">
          <div className="flex items-center gap-2">
            <span className="text-retro-green animate-pulse">●</span> SYSTEM ONLINE
          </div>
          <div>&copy; {new Date().getFullYear()} APTOMATIC. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
             <button onClick={() => {}} className="hover:text-retro-green transition-colors">PRIVACY</button>
             <button onClick={() => {}} className="hover:text-retro-green transition-colors">TERMS</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
