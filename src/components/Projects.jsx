import React from 'react';
import { Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  const stageProjects = [
    {
      id: "STAGE-01",
      title: "Gestion des Collaborateurs",
      category: "Stage // MAO CONSEILS",
      description: "Conception et implémentation d'une application interne robuste de centralisation des profils, affectations opérationnelles et compétences des collaborateurs.",
      stack: ["Java Spring Boot", "REST API", "React"],
      image: "/Projects/STAGE MAO CONSEILS.png"
    },
    {
      id: "STAGE-02",
      title: "Gestion du Recrutement",
      category: "Stage // CHU Oujda",
      description: "Développement d'un module sécurisé de suivi et de traitement interne des candidatures administratives et médicales au CHU d'Oujda.",
      stack: ["PHP", "JavaScript", "HTML/CSS", "SQL"],
      image: "/Projects/STAGE CHU.png"
    },
    {
      id: "STAGE-03",
      title: "Gestion des Ventes",
      category: "Stage // ORMVAM",
      description: "Création d'une interface automatisée pour la facturation et l'édition de rapports financiers sur l'écoulement des stocks agricoles.",
      stack: ["PHP", "MySQL", "Bootstrap"],
      image: "/Projects/STAGE ORMVAM.png"
    }
  ];

  const academicProjects = [
    {
      id: "ACAD-01",
      title: "Sécurisation d'Architecture Laboratoire (Projet JumpSec)",
      category: "Projet Académique",
      description: "Centralisation et isolation complète des flux du laboratoire de l'ESGI Toulouse. Déploiement local sur l'hyperviseur VMware Workstation 17.5 pour réduire la surface d'attaque.",
      stack: ["VMware", "Tailscale VPN", "Active Directory", "RD Gateway", "DNS Hardening"],
      diagram: (
        <svg className="w-full h-full bg-[#070b13] p-4 font-mono text-[9px]" viewBox="0 0 400 180">
          {/* Client (WAN/Tailscale) */}
          <rect x="15" y="60" width="80" height="50" rx="4" fill="#0c1220" stroke="#22d3ee" strokeWidth="1.5" />
          <text x="55" y="80" fill="#e2e8f0" textAnchor="middle" fontWeight="bold">Client PC</text>
          <text x="55" y="92" fill="#22d3ee" textAnchor="middle">Tailscale VPN</text>
          <text x="55" y="102" fill="#a1a1aa" textAnchor="middle" fontSize="7">100.75.2.14</text>
          
          {/* Tailscale Tunnel Line */}
          <line x1="95" y1="85" x2="145" y2="85" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="120" y="78" fill="#22d3ee" textAnchor="middle" fontSize="7">100.x.x.x</text>

          {/* DMZ: Win Server 2022 Jump Server */}
          <rect x="145" y="45" width="115" height="85" rx="4" fill="#0c1220" stroke="#10b981" strokeWidth="2" className="animate-pulse" />
          <text x="202" y="68" fill="#10b981" textAnchor="middle" fontWeight="bold">JUMPSEC SERVER</text>
          <text x="202" y="82" fill="#e2e8f0" textAnchor="middle" fontSize="7">Win Server 2022</text>
          <text x="202" y="96" fill="#a1a1aa" textAnchor="middle">RD Gateway (SSL)</text>
          <text x="202" y="110" fill="#ef4444" textAnchor="middle" fontSize="7">CAP/RAP Policies</text>
          
          {/* Internal Firewall */}
          <line x1="275" y1="20" x2="275" y2="160" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="2 2" />

          {/* LAN Interne: Active Directory */}
          <rect x="290" y="60" width="95" height="55" rx="4" fill="#0c1220" stroke="#1e293b" strokeWidth="1.5" />
          <text x="337" y="85" fill="#94a3b8" textAnchor="middle" fontWeight="bold">INTERNAL LAN</text>
          <text x="337" y="100" fill="#a1a1aa" textAnchor="middle">Active Directory</text>

          {/* Connections */}
          <path d="M 260 85 L 290 85" stroke="#10b981" strokeWidth="1.2" />
          <text x="202" y="150" fill="#10b981" textAnchor="middle" fontSize="7.5">hosts: jump.mondomaine.lab</text>
        </svg>
      )
    },
    {
      id: "ACAD-02",
      title: "Bibliothèque en Ligne",
      category: "Projet Académique",
      description: "Conception d'une plateforme sécurisée de référencement, réservation et emprunt de livres avec système d'alerte automatisé.",
      stack: ["Symfony", "PHP", "Bootstrap", "MySQL"],
      image: "/Projects/Bibliothèque en Ligne.png"
    },
    {
      id: "ACAD-03",
      title: "Gestionnaire de Recettes",
      category: "Projet Académique",
      description: "Développement d'une application web de partage de fiches culinaires et d'alimentation équilibrée avec calculs automatiques.",
      stack: ["Django", "Python", "SQLite"],
      image: "/Projects/Gestionnaire de Recettes.png"
    },
    {
      id: "ACAD-04",
      title: "Location de Trottinettes",
      category: "Projet Académique",
      description: "Création d'un système MVC complet de gestion de comptes, tracking de trajets et facturation de trottinettes électriques en libre-service.",
      stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
      image: "/Projects/Système de Location de Trottinettes.png"
    },
    {
      id: "ACAD-05",
      title: "Gestion de Pharmacie",
      category: "Projet Académique",
      description: "Développement d'une application robuste de gestion de prescriptions et stocks avec contrôle d'accès basé sur les rôles (RBAC).",
      stack: ["Java", "SQL", "Swing", "RBAC"],
      image: "/Projects/Application Gestion de PharmaciE.png"
    },
    {
      id: "ACAD-06",
      title: "Mon Portfolio Professionnel",
      category: "Projet Académique",
      description: "Conception et développement de ce site portfolio responsive avec une esthétique cybersécurité Blue Team, hébergement sécurisé et intégration Formspree.",
      stack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "/Projects/Portfolio.png"
    }
  ];

  const renderProjectCard = (project, idx) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.45, delay: idx * 0.1 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded border border-cyber-border bg-cyber-card/45 hover:bg-cyber-card overflow-hidden hover:border-cyber-cyan/50 hover:glow-cyan-sm transition-all duration-300"
    >
      {/* Dossier Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-cyber-bg border-b border-cyber-border/80">
        <span className="font-mono text-xs text-cyber-cyan font-bold">{project.id}</span>
        <span className="font-mono text-[10px] text-gray-500 flex items-center gap-1">
          <Cpu size={10} className="text-cyber-green animate-pulse" />
          STATUS: VERIFIED
        </span>
      </div>

      {/* Graphic Preview or Diagram */}
      <div className="w-full h-48 bg-[#030712] relative overflow-hidden flex items-center justify-center border-b border-cyber-border/40">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover select-none filter brightness-90 group-hover:brightness-100 group-hover:scale-[1.03] transition-all duration-500" 
          />
        ) : (
          project.diagram
        )}
      </div>

      {/* Card Details */}
      <div className="p-5 flex-1 flex flex-col space-y-4">
        <div>
          <span className="font-mono text-[9px] text-cyber-cyan/80 block mb-1 font-semibold">{project.category}</span>
          <h3 className="text-base font-bold font-sans text-white group-hover:text-cyber-cyan transition-colors min-h-[44px] flex items-center">
            {project.title}
          </h3>
        </div>
        
        <p className="text-xs text-gray-400 font-sans leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.stack.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-0.5 font-mono text-[9px] font-medium text-gray-400 bg-cyber-border/30 border border-cyber-border/70 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-5 py-3 border-t border-cyber-border/35 bg-[#090e18]/40 flex items-center justify-between font-mono text-[9px] text-gray-500">
        <span>SYSTEM: SECURED</span>
        <span>STATUS: COMPIL_OK</span>
      </div>
    </motion.div>
  );

  return (
    <section id="projets" className="py-20 border-b border-cyber-border bg-cyber-dark/40 relative">
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="mb-14 text-center lg:text-left">
          <div className="font-mono text-cyber-cyan text-xs tracking-wider mb-2 flex items-center justify-center lg:justify-start gap-1.5">
            <span className="w-1.5 h-1.5 bg-cyber-cyan rounded-full animate-ping"></span>
            DOSSIER: ARCHIVES_PROJETS.db
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sans">
            Projets & Réalisations
          </h2>
          <div className="w-12 h-1 bg-cyber-cyan mt-3 mx-auto lg:mx-0"></div>
        </div>

        {/* Category 1: Stages */}
        <div className="space-y-6 mb-16">
          <div className="border-b border-cyber-border/40 pb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyber-green rounded-full"></span>
            <h3 className="font-mono text-sm font-bold text-white uppercase tracking-widest">
              Expériences en Stage (Industry Projects)
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stageProjects.map((project, idx) => renderProjectCard(project, idx))}
          </div>
        </div>

        {/* Category 2: Academic */}
        <div className="space-y-6">
          <div className="border-b border-cyber-border/40 pb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyber-cyan rounded-full"></span>
            <h3 className="font-mono text-sm font-bold text-white uppercase tracking-widest">
              Projets Académiques (Academic Work)
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicProjects.map((project, idx) => renderProjectCard(project, idx))}
          </div>
        </div>

      </div>
    </section>
  );
}
