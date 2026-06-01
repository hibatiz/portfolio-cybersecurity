import React from 'react';
import { Download, Shield, Code, User, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const timeline = [
    {
      year: "Septembre 2026 (Prévu)",
      title: "Master Sécurité Informatique",
      institution: "CNAM Montpellier",
      description: "Analyse de vulnérabilités, cryptographie avancée, réponse aux incidents et ingénierie de sécurité globale.",
      type: "future"
    },
    {
      year: "2024 - Présent",
      title: "Bachelor Cybersécurité & Cycle Ingénieur",
      institution: "ESGI Toulouse",
      description: "Sécurisation réseau, analyse de logs (Blue Team), administration système durcie et tests d'intrusion (Red Team).",
      type: "current"
    },
    {
      year: "Précédemment",
      title: "Cycle d'Ingénieur",
      institution: "EMSI Casablanca",
      description: "Algorithmique avancée, architecture des ordinateurs et fondements des réseaux.",
      type: "past"
    },
    {
      year: "Précédemment",
      title: "BTS DSI (Développement des Systèmes d'Information)",
      institution: "Oujda",
      description: "Conception d'applications web, modélisation SQL et programmation objet.",
      type: "past"
    }
  ];

  return (
    <section id="apropos" className="py-20 border-b border-cyber-border bg-cyber-bg relative">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-cyber-cyan/5 blur-[100px] pointer-events-none -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left">
          <div className="font-mono text-cyber-cyan text-xs tracking-wider mb-2 flex items-center justify-center lg:justify-start gap-1.5">
            <User size={14} className="text-cyber-cyan" />
            PRESENTATION
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sans">
            À Propos de Moi
          </h2>
          <div className="w-12 h-1 bg-cyber-cyan mt-3 mx-auto lg:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Bio & Strengths */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white font-sans">
              Entre Sécurité Défensive et Code Sécurisé
            </h3>
            
            <p className="text-sm md:text-base text-gray-400 font-sans leading-relaxed">
              Mon parcours académique allie le développement logiciel et l'administration système sous l'angle de la sécurité numérique. 
              Ayant débuté par le développement d'applications (BTS DSI), j'ai choisi de me spécialiser en cybersécurité pour concevoir des systèmes résilients et auditer les infrastructures face aux menaces actuelles.
            </p>

            {/* Core Pillars / Dual Identity Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded border border-cyber-border bg-cyber-card/50 flex gap-3">
                <div className="w-8 h-8 rounded border border-cyber-cyan/35 flex items-center justify-center text-cyber-cyan shrink-0 bg-cyber-dark">
                  <Shield size={16} />
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wide">Hardening & Blue Team</h4>
                  <p className="text-[11px] text-gray-400 mt-1 leading-normal">
                    Audit de logs, configuration IDS Snort, durcissement système de bastions et filtrage pare-feu.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded border border-cyber-border bg-cyber-card/50 flex gap-3">
                <div className="w-8 h-8 rounded border border-cyber-green/35 flex items-center justify-center text-cyber-green shrink-0 bg-cyber-dark">
                  <Code size={16} />
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wide">Secure Coding</h4>
                  <p className="text-[11px] text-gray-400 mt-1 leading-normal">
                    Validation d'inputs, requêtes préparées contre les injections SQL, et implémentation de protocoles RBAC.
                  </p>
                </div>
              </div>
            </div>

            {/* Download CV CTA */}
            <div className="pt-4">
              <a
                href="./CV_Hiba_Tizaoui.pdf"
                download="CV_Hiba_Tizaoui.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-transparent hover:bg-cyber-cyan/10 border border-cyber-cyan hover:border-cyan-400 text-cyber-cyan hover:text-white font-mono font-bold text-xs tracking-wider uppercase rounded glow-cyan-sm hover:glow-cyan transition-all duration-300 cursor-pointer"
              >
                <Download size={14} className="animate-bounce" />
                Télécharger CV
              </a>
              <span className="block font-mono text-[9px] text-gray-500 mt-2 ml-1">
                FILE_SIZE: 246 KB // FORMAT: PDF
              </span>
            </div>
          </motion.div>

          {/* Right: Timeline Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-xl font-bold font-sans text-white border-b border-cyber-border/40 pb-2">
              Parcours Académique
            </h3>

            <div className="relative border-l-2 border-cyber-border pl-6 ml-2 space-y-8">
              {timeline.map((item, idx) => {
                const isCurrent = item.type === "current";
                const isFuture = item.type === "future";
                
                return (
                  <div key={idx} className="relative group">
                    {/* Glowing timeline dot */}
                    <div className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 ${
                      isCurrent ? 'bg-cyber-cyan border-cyber-cyan shadow-[0_0_8px_#22d3ee] animate-pulse' :
                      isFuture ? 'bg-cyber-dark border-dashed border-gray-600' :
                      'bg-cyber-green border-cyber-green shadow-[0_0_6px_#10b981]'
                    } transition-all duration-300`} />

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`font-mono text-xs font-bold ${
                          isCurrent ? 'text-cyber-cyan' :
                          isFuture ? 'text-gray-500' :
                          'text-cyber-green'
                        }`}>
                          {item.year}
                        </span>
                        <span className="text-[10px] font-mono text-gray-500">// {item.institution}</span>
                      </div>
                      <h4 className="font-sans font-bold text-sm sm:text-base text-white mt-1 group-hover:text-cyber-cyan transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400 font-sans leading-relaxed mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
