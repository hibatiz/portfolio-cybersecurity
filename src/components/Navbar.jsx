import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Projets', href: '#projets' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'À Propos', href: '#apropos' },
    { name: 'Contact', href: '#contact' },
  ];

  // Track scrolling to add borders and increase background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Simple active link tracker based on section position
      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-cyber-bg/85 backdrop-blur-md border-b border-cyber-border/80 shadow-lg shadow-black/20' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand */}
          <a 
            href="#accueil" 
            onClick={(e) => handleClick(e, '#accueil')}
            className="flex items-center space-x-2 group font-mono text-sm sm:text-base font-bold text-white tracking-wider"
          >
            <div className="w-8 h-8 rounded border border-cyber-cyan/35 flex items-center justify-center bg-cyber-dark text-cyber-cyan group-hover:border-cyber-cyan group-hover:glow-cyan-sm transition-all duration-300">
              <Shield size={16} className="group-hover:rotate-6 transition-transform" />
            </div>
            <span className="flex items-center">
              hiba_tizaoui
              <span className="text-cyber-cyan animate-pulse">.sh</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`relative px-1 py-2 font-mono text-xs tracking-wider transition-all duration-300 ${
                    isActive 
                      ? 'text-cyber-cyan font-semibold' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-cyber-cyan shadow-[0_0_8px_#22d3ee]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Hamburger button for mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded text-gray-400 hover:text-white hover:bg-cyber-card/50 border border-cyber-border focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {isOpen ? <X size={20} className="text-cyber-cyan" /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-b border-cyber-border bg-cyber-dark/95 backdrop-blur-lg"
          >
            <div className="px-2 pt-2 pb-6 space-y-2 sm:px-3 text-center border-t border-cyber-border/40">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={`block px-3 py-3 rounded font-mono text-sm tracking-wide transition-all ${
                      isActive 
                        ? 'bg-cyber-cyan/10 text-cyber-cyan border-l-2 border-cyber-cyan font-bold' 
                        : 'text-gray-400 hover:text-white hover:bg-cyber-card/30'
                    }`}
                  >
                    {isActive ? '> ' : ''}
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
