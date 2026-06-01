import React, { useState, useEffect } from 'react';
import { ChevronRight, Terminal, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const role = "Étudiante en Cybersécurité";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(role.substring(0, i + 1));
      i++;
      if (i >= role.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="accueil" 
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden cyber-grid"
    >
      {/* Background Matrix/Radar Glow */}
      <div className="absolute top-1/4 left-1/4 w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-cyber-cyan/5 blur-[80px] md:blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[200px] md:w-[350px] h-[200px] md:h-[350px] rounded-full bg-cyber-green/5 blur-[70px] md:blur-[100px] pointer-events-none -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-sans leading-tight">
              Bonjour, je suis <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyber-cyan glow-text-cyan">
                Hiba Tizaoui
              </span>
            </h1>

            {/* Typewriter Output Container */}
            <div className="h-10 md:h-12 flex items-center justify-center lg:justify-start">
              <span className="text-xl md:text-2xl font-mono text-gray-300 font-medium">
                {'> '}
                <span className="text-cyber-green font-bold bg-cyber-green/5 px-2 py-0.5 border-b-2 border-cyber-green glow-text-green">
                  {displayText}
                </span>
                <span className="text-cyber-green animate-ping">|</span>
              </span>
            </div>

            <p className="max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base text-gray-400 font-sans leading-relaxed text-justify lg:text-left">
              Prochaine étudiante en master en cybersécurité, je prépare mon intégration en Master Sécurité Informatique, Cybersécurité & Cyber Menaces au CNAM pour la rentrée de septembre 2026. Passionnée par la sécurité offensive et défensive, je recherche un contrat d'apprentissage (rythme 1 sem. cours / 3 sem. entreprise). Rigoureuse et forte de plusieurs expériences en développement et de certifications Cisco, je suis prête à mettre mes compétences techniques au service d'une équipe Cyber.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-cyber-cyan hover:bg-cyan-500 text-cyber-bg font-bold font-mono rounded shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_22px_rgba(34,211,238,0.5)] transition-all duration-300 cursor-pointer"
              >
                <Terminal size={16} />
                Me Contacter
              </button>
              <button
                onClick={() => scrollToSection('projets')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-cyber-cyan/5 border border-cyber-cyan/40 hover:border-cyber-cyan text-cyber-cyan hover:text-white font-bold font-mono rounded transition-all duration-300 cursor-pointer"
              >
                Voir mes projets
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Hero Right Content (Hexagonal Profile Picture with neon border) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 w-full max-w-sm mx-auto flex justify-center"
          >
            <div className="relative w-[280px] h-[320px] sm:w-[320px] sm:h-[370px] md:w-[350px] md:h-[400px] group">
              {/* Glow Behind the Image */}
              <div 
                className="absolute inset-0 bg-cyber-cyan/20 blur-[20px] opacity-60 group-hover:opacity-100 transition-opacity duration-500" 
                style={{ clipPath: 'polygon(50% 1%, 99% 28%, 99% 86%, 50% 113%, 1% 86%, 1% 28%)' }}
              ></div>
              
              {/* Main Hexagon SVG Container */}
              <svg 
                className="w-full h-full drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]" 
                viewBox="0 0 100 115"
              >
                <defs>
                  <clipPath id="hex-mask">
                    <polygon points="50,1.5 99,28.5 99,86.5 50,113.5 1,86.5 1,28.5" />
                  </clipPath>
                </defs>
                
                {/* Embedded Profile Photo */}
                <image 
                  href="/IMG_9764.jpg" 
                  width="100%" 
                  height="100%" 
                  preserveAspectRatio="xMidYMin slice" 
                  clipPath="url(#hex-mask)"
                />
                
                {/* Glowing Outer Hexagon Border */}
                <polygon 
                  points="50,1.5 99,28.5 99,86.5 50,113.5 1,86.5 1,28.5" 
                  fill="none" 
                  stroke="#22d3ee" 
                  strokeWidth="1.5"
                  className="animate-pulse-slow"
                />
              </svg>
            </div>
          </motion.div>

        </div>
        
        {/* Animated Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 cursor-pointer text-gray-500 hover:text-cyber-cyan transition-colors" onClick={() => scrollToSection('projets')}>
          <span className="text-[10px] font-mono tracking-widest uppercase">Défiler</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} className="text-cyber-cyan" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

