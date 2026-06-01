import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-cyber-bg text-gray-200 selection:bg-cyber-cyan/30 selection:text-white flex flex-col relative overflow-hidden">
      
      {/* Sticky Navigation Overlay */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <About />
        <Contact />
      </main>

      {/* Footer Banner */}
      <footer className="border-t border-cyber-border bg-cyber-dark/80 py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:flex sm:items-center sm:justify-between font-mono text-[10px] md:text-xs text-gray-500 space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} Hiba Tizaoui. Tous droits réservés.
          </div>
          <div>
            Design & Implémentation par Hiba Tizaoui.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
