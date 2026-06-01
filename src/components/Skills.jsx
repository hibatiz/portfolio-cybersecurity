import React, { useState } from 'react';
import { ShieldCheck, Cpu, Code2, Network, CheckCircle, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('cyber');

  const categories = [
    { id: 'cyber', label: 'Cybersécurité', icon: <ShieldCheck className="w-4.5 h-4.5" /> },
    { id: 'secTools', label: 'Outils Sécurité', icon: <Terminal className="w-4.5 h-4.5" /> },
    { id: 'network', label: 'Réseaux & Systèmes', icon: <Network className="w-4.5 h-4.5" /> },
    { id: 'dev', label: 'Développement', icon: <Code2 className="w-4.5 h-4.5" /> },
    { id: 'db', label: 'Bases de données', icon: <Cpu className="w-4.5 h-4.5" /> },
    { id: 'tools', label: 'Outils', icon: <Cpu className="w-4.5 h-4.5" /> },
  ];

  const skillsData = {
    cyber: [
      { name: "IDS/IPS (Snort)", level: "Avancé" },
      { name: "NIDS", level: "Avancé" },
      { name: "Blue Team", level: "Avancé" },
      { name: "Serveur Bastion", level: "Avancé" },
      { name: "Analyse de logs", level: "Expert" },
      { name: "Détection d'intrusion", level: "Avancé" },
      { name: "SIEM (notions)", level: "Intermédiaire" },
      { name: "EDR (notions)", level: "Intermédiaire" }
    ],
    secTools: [
      { name: "Wireshark", level: "Avancé" },
      { name: "Tshark", level: "Avancé" },
      { name: "Règles Snort", level: "Avancé" },
      { name: "NetFlow", level: "Intermédiaire" }
    ],
    network: [
      { name: "Linux", level: "Avancé" },
      { name: "Unix", level: "Avancé" },
      { name: "VMware", level: "Avancé" },
      { name: "Configuration réseau", level: "Avancé" },
      { name: "Administration système", level: "Avancé" },
      { name: "CCNA", level: "Expert" }
    ],
    dev: [
      { name: "Python", level: "Avancé" },
      { name: "PHP", level: "Avancé" },
      { name: "Java", level: "Avancé" },
      { name: "C/C++", level: "Intermédiaire" },
      { name: "HTML/CSS/JS", level: "Avancé" },
      { name: "Angular", level: "Intermédiaire" },
      { name: "React", level: "Avancé" },
      { name: "Django", level: "Intermédiaire" },
      { name: "Symfony", level: "Intermédiaire" },
      { name: "Laravel", level: "Avancé" }
    ],
    db: [
      { name: "SQL", level: "Avancé" },
      { name: "MySQL", level: "Avancé" },
      { name: "PL/SQL", level: "Avancé" },
      { name: "Transact-SQL", level: "Intermédiaire" },
      { name: "NoSQL", level: "Intermédiaire" }
    ],
    tools: [
      { name: "Git/GitHub", level: "Expert" },
      { name: "Agile/Scrum", level: "Avancé" },
      { name: "UML", level: "Avancé" },
      { name: "Merise", level: "Avancé" }
    ]
  };

  return (
    <section id="competences" className="py-20 border-b border-cyber-border bg-cyber-bg relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left">
          <div className="font-mono text-cyber-cyan text-xs tracking-wider mb-2 flex items-center justify-center lg:justify-start gap-1.5">
            <Terminal size={14} className="text-cyber-cyan" />
            COMPETENCES --TECHNICAL
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sans">
            Mes Compétences
          </h2>
          <div className="w-12 h-1 bg-cyber-cyan mt-3 mx-auto lg:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Tab Selectors */}
          <div className="lg:col-span-4 flex flex-col gap-2 sm:gap-3">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`w-full flex items-center justify-between p-4 rounded font-mono text-xs tracking-wider text-left border transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-cyber-cyan/10 border-cyber-cyan text-cyber-cyan glow-cyan-sm font-semibold' 
                      : 'bg-cyber-card/45 border-cyber-border text-gray-400 hover:text-white hover:bg-cyber-card/85'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {cat.icon}
                    <span>{cat.label}</span>
                  </div>
                  {isActive && <span className="text-[10px] animate-pulse">ACTIF</span>}
                </button>
              );
            })}
            
            {/* Context Summary Box */}
            <div className="hidden lg:block mt-6 p-5 bg-cyber-card/40 border border-cyber-border rounded font-mono text-xs text-gray-400 space-y-3">
              <div className="text-cyber-cyan font-bold flex items-center gap-1.5">
                <CheckCircle size={14} className="text-cyber-green" />
                SYNTHÈSE TECHNIQUE
              </div>
              <p className="leading-relaxed text-[11px]">
                Compétences acquises lors de mes formations BTS DSI, Bachelor Cybersécurité à l'ESGI, certifications Cisco, et mes expériences en stage.
              </p>
            </div>
          </div>

          {/* Right: Skills Display Grid */}
          <div className="lg:col-span-8 p-6 md:p-8 rounded border border-cyber-border bg-cyber-card/30 min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skillsData[activeTab].map((skill, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded border border-cyber-border/60 bg-cyber-dark/40 border-l-2 border-l-cyber-cyan flex items-center justify-between font-mono"
                    >
                      <span className="text-sm font-semibold text-white">{skill.name}</span>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold border uppercase ${
                        skill.level === 'Expert' ? 'text-red-400 border-red-500/30 bg-red-950/20' :
                        skill.level === 'Avancé' ? 'text-cyber-cyan border-cyber-cyan/30 bg-cyan-950/20' :
                        'text-cyber-green border-cyber-green/30 bg-emerald-950/20'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
