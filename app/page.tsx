"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  MessageCircle, 
  Download, 
  GraduationCap, 
  Award, 
  Phone,
  Cpu, 
  Globe,
  Mail,
  Sparkles,
  Sun,
  Moon,
  Terminal,
  User,
  MapPin,
  Send,
  ExternalLink
} from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');
  const [formStatus, setFormStatus] = useState('idle');
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // TS FIX: Define the ref type as a Div Element
  const bentoSectionRef = useRef<HTMLDivElement>(null);

  // TS FIX: Typed event and tabName
  const handleScrollToSection = (e: React.MouseEvent, tabName: string) => {
    e.preventDefault();
    setActiveTab(tabName);
    bentoSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // TS FIX: Typed FormEvent and safe HTMLFormElement access
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Use currentTarget to get the form element safely
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "9d1f72c2-e162-4766-b923-635806df3a99"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setFormStatus('success');
        // Cast target to HTMLFormElement to access .reset()
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }

    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans selection:bg-blue-500/30 overflow-x-hidden ${isDarkMode ? 'bg-[#050505] text-[#e0e0e0]' : 'bg-[#f5f5f5] text-[#1a1a1a]'}`}>
      
      {/* FLOATING NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-4xl">
        <div className={`flex items-center justify-between px-6 py-3 rounded-full border backdrop-blur-md transition-all duration-500 ${
          isDarkMode ? 'bg-white/5 border-white/10 shadow-2xl' : 'bg-white/70 border-black/5 shadow-lg'
        }`}>
          <div className="flex items-center gap-5 md:gap-8 overflow-x-auto whitespace-nowrap mr-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <a href="#home" className={`text-[11px] md:text-[12px] font-medium transition-colors hover:text-blue-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Home</a>
            <a href="#about" onClick={(e) => handleScrollToSection(e, 'about')} className={`text-[11px] md:text-[12px] font-medium transition-colors hover:text-blue-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>About me</a>
            <a href="#projects" onClick={(e) => handleScrollToSection(e, 'projects')} className={`text-[11px] md:text-[12px] font-medium transition-colors hover:text-blue-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects</a>
            <a href="#contact-me" className={`text-[11px] md:text-[12px] font-medium transition-colors hover:text-blue-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Contact</a>
          </div>

          <div className="flex items-center gap-3 md:gap-4 shrink-0">
            <button onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle theme" className={`p-2 rounded-full transition-all hover:scale-110 ${isDarkMode ? 'text-yellow-400 hover:bg-white/10' : 'text-blue-600 hover:bg-black/5'}`}>
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* HEADER SECTION */}
      <header id="home" className="max-w-6xl mx-auto mb-16 pt-44 px-6 relative">
        <div className={`absolute top-0 left-1/4 w-96 h-96 blur-[120px] pointer-events-none transition-opacity duration-500 ${isDarkMode ? 'bg-blue-600/10' : 'bg-blue-400/20 opacity-50'}`} />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1">
            <motion.div whileHover={{ scale: 1.05 }} className={`inline-flex items-center gap-3 mb-6 border px-4 py-2 rounded-full transition-colors ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
              <Sparkles size={14} className="text-blue-400 animate-pulse" />
              <span className={`text-[10px] font-mono uppercase tracking-[0.2em] ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Available for Software Roles</span>
            </motion.div>

            <motion.h1 className={`text-6xl md:text-8xl font-bold tracking-tighter leading-none cursor-default transition-colors ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Kedarnath <br />
              <span className={`${isDarkMode ? 'text-gray-800' : 'text-gray-300'} hover:text-blue-500 transition-colors duration-500`}>Tattapure.</span>
            </motion.h1>

            <p className={`mt-8 text-xl max-w-2xl leading-relaxed transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <span className="text-blue-500 font-bold uppercase tracking-wider text-sm">MCA Final Year Student</span> <br />
              Specializing in <span className={isDarkMode ? 'text-white' : 'text-blue-600 font-semibold'}>Software Development</span>.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="relative flex items-center justify-center w-48 h-48 shrink-0">
            <div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className={`text-[10px] font-mono uppercase tracking-[0.12em] fill-current ${isDarkMode ? 'text-white/40' : 'text-black/40'}`}>
                  <textPath href="#textPath">Software Developer • Software Developer • </textPath>
                </text>
              </svg>
            </div>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
              <Terminal size={24} className="text-blue-500" />
            </div>
          </motion.div>
        </div>

        {/* ACADEMIC STATS & RESUME */}
        <div className={`mt-16 border-t pt-10 ${isDarkMode ? 'border-white/5' : 'border-black/5'}`}>
          <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-12">
             <motion.a 
                href="/Kedarnath_Tattapure_Resume.pdf" 
                download 
                whileHover={{ scale: 1.05 }}
                className={`flex items-center justify-center gap-2 text-[11px] font-mono border px-10 py-4 rounded-full transition-all uppercase tracking-widest shrink-0 ${isDarkMode ? 'bg-blue-500/5 border-blue-500/30 text-blue-400 hover:bg-blue-500/10' : 'bg-blue-50 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'}`}
              >
                <Download size={14} /> Download CV
              </motion.a>

             <div className={`flex flex-wrap items-center gap-x-10 gap-y-8 md:border-l md:pl-10 ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500 border border-blue-500/20"><GraduationCap size={22}/></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none mb-1">Degree</span>
                    <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>MCA Candidate</span>
                  </div>
                </div>

                <div className={`flex gap-4 items-center md:border-l md:pl-8 ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                  <div className="p-3 bg-green-500/10 rounded-2xl text-green-500 border border-green-500/20"><Award size={22}/></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none mb-1">Rank</span>
                    <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>8.5 CGPA</span>
                  </div>
                </div>

                <div className={`flex gap-4 items-center md:border-l md:pl-8 ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                  <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-500 border border-purple-500/20"><Cpu size={22}/></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none mb-1">Core Tech</span>
                    <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Next.js & Python</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* MAIN BENTO GRID */}
      <main ref={bentoSectionRef} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-6 md:auto-rows-[200px] mb-24">
        
        {/* ✅ MOBILE PHOTO FIX: Added h-96 for mobile height */}
        <motion.div 
          whileHover={{ y: -5 }} 
          className={`relative h-96 md:h-auto md:col-span-1 md:row-span-3 overflow-hidden rounded-[2.5rem] border transition-colors ${isDarkMode ? 'bg-gray-900 border-white/5' : 'bg-white border-black/5'}`}
        >
          <img 
            src="/images/profile.png" 
            alt="Kedarnath Tattapure Profile" 
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isDarkMode ? 'grayscale hover:grayscale-0' : 'grayscale-0'}`} 
          />
        </motion.div>

        <motion.div className={`md:col-span-2 md:row-span-1 rounded-[2.5rem] p-8 border flex flex-col justify-center ${isDarkMode ? 'bg-[#0c0c0c] border-white/5' : 'bg-white border-black/5 shadow-sm'}`}>
          <h3 className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-3">Professional Summary</h3>
          <p className={`text-sm italic ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>"Solving complex problems and translating technical concepts into clear solutions as a Software Developer."</p>
        </motion.div>

        <motion.div className={`md:col-span-1 md:row-span-1 rounded-[2.5rem] p-8 border flex flex-col items-center justify-center ${isDarkMode ? 'bg-[#0c0c0c] border-white/5' : 'bg-white border-black/5'}`}>
           <span className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>150+</span>
           <span className="text-[10px] text-gray-500 font-mono uppercase mt-1">DSA Solved</span>
        </motion.div>

        <motion.div className={`md:col-span-2 md:row-span-2 rounded-[2.5rem] p-10 border overflow-hidden flex flex-col ${isDarkMode ? 'bg-[#0c0c0c] border-white/5' : 'bg-white border-black/5'}`}>
          <div className={`flex gap-6 mb-8 border-b overflow-x-auto whitespace-nowrap mr-4 ${isDarkMode ? 'border-white/5' : 'border-black/5'}`} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {['projects', 'stack', 'databases', 'about'].map(t => (
              <button key={t} onClick={() => setActiveTab(t)} className={`pb-4 text-[10px] font-mono uppercase tracking-[0.2em] transition-all relative shrink-0 ${activeTab === t ? 'text-blue-500' : 'text-gray-600 hover:text-gray-400'}`}>
                {t}
                {activeTab === t && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />}
              </button>
            ))}
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="text-sm h-full">
                
                {activeTab === 'projects' && (
                  <div className="grid grid-cols-1 gap-4">
                    <div className={`p-5 rounded-[1.5rem] border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-black/5'}`}>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Data Automation Script</h4>
                        <span className="text-[9px] font-mono bg-blue-500/10 text-blue-500 px-2 py-1 rounded-full">Python / Scripting</span>
                      </div>
                      <p className={`text-xs mb-4 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Built enterprise-grade scripts to automate repetitive Excel tasks and manage large datasets, significantly reducing manual processing time.</p>
                      <div className="flex gap-3">
                        <a href="https://github.com/Smartking45" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${isDarkMode ? 'border-white/20 hover:bg-white hover:text-black' : 'border-black/20 hover:bg-black hover:text-white'}`}><Github size={12}/> Source</a>
                      </div>
                    </div>

                    <div className={`p-5 rounded-[1.5rem] border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-black/5'}`}>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Full-Stack Portfolio</h4>
                        <span className="text-[9px] font-mono bg-purple-500/10 text-purple-500 px-2 py-1 rounded-full">Next.js / Tailwind</span>
                      </div>
                      <p className={`text-xs mb-4 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Developed a highly interactive, responsive personal portfolio utilizing Next.js, Framer Motion for animations, and a modern Bento Grid UI.</p>
                      <div className="flex gap-3">
                        <a href="https://github.com/Smartking45" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${isDarkMode ? 'border-white/20 hover:bg-white hover:text-black' : 'border-black/20 hover:bg-black hover:text-white'}`}><Github size={12}/> Source</a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${isDarkMode ? 'bg-white/10 border-white/10 hover:bg-blue-500 hover:border-blue-500 text-white' : 'bg-black/5 border-black/5 hover:bg-blue-500 hover:border-blue-500 hover:text-white'}`}><ExternalLink size={12}/> Live Demo</a>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div><p className="font-bold">Back-end</p>Node.js, Python, C++</div>
                    <div><p className="font-bold">Front-end</p>Next.js, React, Tailwind</div>
                  </div>
                )}

                {activeTab === 'databases' && (
                  <div className="space-y-2">
                    <div className={`flex justify-between p-3 rounded-xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-black/5'}`}>
                      <span>MongoDB</span><span className="text-blue-500 font-mono">NoSQL</span>
                    </div>
                    <div className={`flex justify-between p-3 rounded-xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-black/5'}`}>
                      <span>MSSQL</span><span className="text-blue-500 font-mono">SQL</span>
                    </div>
                  </div>
                )}

                {activeTab === 'about' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                    {[
                      { label: "Name", value: "Kedarnath Tattapure", Icon: User },
                      { label: "Education", value: "MCA Final Year", Icon: GraduationCap },
                      { label: "Location", value: "Pune, MH, India", Icon: MapPin },
                      { label: "Role", value: "Software Developer", Icon: Cpu },
                      { label: "Email", value: "kedart445@gmail.com", Icon: Mail },
                      { label: "Phone", value: "+91 9763761719", Icon: Phone },
                    ].map((info, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest flex items-center gap-2">
                          <info.Icon size={12} /> {info.label}:
                        </span>
                        <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {info.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* SOCIAL ICONS */}
        <div className="md:col-span-1 md:row-span-1 grid grid-cols-2 gap-4">
          {[
            { Icon: Linkedin, href: "https://linkedin.com/in/kedarnath-tattapure-0711561bb", color: '#0077b5' },
            { Icon: Github, href: "https://github.com/Smartking45", color: '#333' },
            { Icon: MessageCircle, href: "https://wa.me/919763761719", color: '#25D366' },
            { Icon: Phone, href: "tel:+919763761719", color: '#3b82f6' }
          ].map((item, idx) => (
            <motion.a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, backgroundColor: item.color, color: '#fff' }} className={`rounded-[2rem] border flex items-center justify-center transition-all ${isDarkMode ? 'bg-[#0c0c0c] border-white/5 text-gray-500' : 'bg-white border-black/5'}`}>
              <item.Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>

        {/* SHIP READY */}
        <div className="md:col-span-1 md:row-span-1">
           <div className={`h-full border rounded-[2.5rem] flex flex-col items-center justify-center text-center p-6 ${isDarkMode ? 'bg-blue-500/5 border-blue-500/10' : 'bg-blue-50 border-blue-100'}`}>
             <Globe className="text-blue-500 mb-2 animate-[spin_5s_linear_infinite]" size={24} />
             <span className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-widest">Ship Ready</span>
           </div>
        </div>
      </main>

      {/* CONTACT SECTION */}
      <section id="contact-me" className="max-w-6xl mx-auto px-6 mb-32">
        <div className={`rounded-[3rem] p-12 border overflow-hidden relative ${isDarkMode ? 'bg-[#0c0c0c] border-white/5' : 'bg-white border-black/5 shadow-2xl'}`}>
           <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] pointer-events-none ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-500/5'}`} />
           
           <div className="grid lg:grid-cols-2 gap-20 relative z-10">
             <div>
               <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 ${isDarkMode ? 'bg-white/5 border-white/10 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
                 <MessageCircle size={14} />
                 <span className="text-[10px] font-mono uppercase tracking-widest">Let's Talk</span>
               </motion.div>
               <h2 className={`text-4xl md:text-5xl font-bold tracking-tight mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                 Have a project in mind? <br />
                 <span className="text-blue-500">Start a conversation.</span>
               </h2>
               
               <div className="space-y-6 mt-12">
                 <a href="mailto:kedart445@gmail.com" className="flex items-center gap-6 group cursor-pointer w-fit">
                   <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20 transition-all group-hover:bg-blue-500 group-hover:text-white group-hover:scale-105"><Mail size={20}/></div>
                   <div>
                     <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-1">Email Me</p>
                     <p className={`text-sm font-bold transition-colors group-hover:text-blue-500 ${isDarkMode ? 'text-white' : 'text-black'}`}>kedart445@gmail.com</p>
                   </div>
                 </a>

                 <a href="https://wa.me/919763761719" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer w-fit">
                   <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20 transition-all group-hover:bg-green-500 group-hover:text-white group-hover:scale-105"><MessageCircle size={20}/></div>
                   <div>
                     <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-1">WhatsApp</p>
                     <p className={`text-sm font-bold transition-colors group-hover:text-green-500 ${isDarkMode ? 'text-white' : 'text-black'}`}>+91 9763761719</p>
                   </div>
                 </a>

                 <a href="tel:+919763761719" className="flex items-center gap-6 group cursor-pointer w-fit">
                   <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 border border-indigo-500/20 transition-all group-hover:bg-indigo-500 group-hover:text-white group-hover:scale-105"><Phone size={20}/></div>
                   <div>
                     <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-1">Call Me</p>
                     <p className={`text-sm font-bold transition-colors group-hover:text-indigo-500 ${isDarkMode ? 'text-white' : 'text-black'}`}>+91 9763761719</p>
                   </div>
                 </a>

                 <div className="flex items-center gap-6 pt-2">
                   <div className="w-12 h-12 rounded-2xl bg-gray-500/10 flex items-center justify-center text-gray-500 border border-gray-500/20"><MapPin size={20}/></div>
                   <div>
                     <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-1">Location</p>
                     <p className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Pune, Maharashtra, India</p>
                   </div>
                 </div>
               </div>
             </div>

             <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label htmlFor="user_name" className="text-[10px] font-mono text-gray-500 uppercase ml-2">Name</label>
                   <input id="user_name" required name="name" type="text" placeholder="John Doe" className={`w-full border rounded-[1.5rem] py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ${isDarkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-50 border-black/10 text-black'}`} />
                 </div>
                 <div className="space-y-2">
                   <label htmlFor="user_email" className="text-[10px] font-mono text-gray-500 uppercase ml-2">Email</label>
                   <input id="user_email" required name="email" type="email" placeholder="john@example.com" className={`w-full border rounded-[1.5rem] py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ${isDarkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-50 border-black/10 text-black'}`} />
                 </div>
               </div>
               <div className="space-y-2">
                 <label htmlFor="user_message" className="text-[10px] font-mono text-gray-500 uppercase ml-2">Message</label>
                 <textarea id="user_message" required name="message" rows={4} placeholder="Hello Kedarnath, I'm interested in..." className={`w-full border rounded-[1.5rem] py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none ${isDarkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-50 border-black/10 text-black'}`} />
               </div>
               <button type="submit" disabled={formStatus === 'sending'} className={`w-full py-5 rounded-[1.5rem] font-mono text-[11px] uppercase tracking-[0.3em] font-bold transition-all flex items-center justify-center gap-3 group ${isDarkMode ? 'bg-white text-black hover:bg-blue-500 hover:text-white' : 'bg-black text-white hover:bg-blue-600'}`}>
                 {formStatus === 'success' ? 'Message Sent Successfully!' : formStatus === 'error' ? 'Failed to Send' : formStatus === 'sending' ? 'Sending...' : (
                   <>Send Message <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                 )}
               </button>
             </form>
           </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto pb-16 flex justify-between px-6 text-[10px] font-mono uppercase tracking-[0.4em] text-gray-600">
        <p>© 2026 Kedarnath Tattapure</p>
        <span className={isDarkMode ? 'text-white/40' : 'text-black/40'}>Pune, MH, India</span>
      </footer>
    </div>
  );
}