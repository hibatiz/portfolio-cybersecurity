import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Certifications() {
  const certifications = [
    {
      id: "CERT-ISC2-CC",
      title: "Certified in Cybersecurity (ISC²)",
      issuer: "ISC²",
      image: "/cisco_certifications/the complete certified in cybersecurity.png",
      skills: "Opérations de sécurité, contrôles d'accès, sécurité des réseaux et continuité d'activité (BC/DR).",
      credId: "ISC2-CC-83921"
    },
    {
      id: "CERT-CS-NET-01",
      title: "Network Technician Career Path",
      issuer: "Cisco Networking Academy",
      image: "/cisco_certifications/Network Technician Career Path.png",
      skills: "Configuration Cisco IOS, routage statique/dynamique, commutation (switching) et support technique.",
      credId: "NETACAD-NTEC-2810"
    },
    {
      id: "CERT-CS-CYB-02",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      image: "/cisco_certifications/Introduction to Cybersecurity.png",
      skills: "Protection des données, confidentialité, intégrité et principes essentiels de cyber-hygiène.",
      credId: "NETACAD-CYB-3910"
    },
    {
      id: "CERT-CS-AI-03",
      title: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy",
      image: "/cisco_certifications/Introduction to Modern AI.png",
      skills: "Prompt engineering, architectures des grands modèles de langage (LLM) et Machine Learning.",
      credId: "NETACAD-AI-9021"
    },
    {
      id: "CERT-CS-IND-04",
      title: "Industrial Networking Essentials",
      issuer: "Cisco Networking Academy",
      image: "/cisco_certifications/Industrial Networking Essentials.png",
      skills: "Convergence IT/OT, protocoles de communication industriels et segmentation des infrastructures critiques.",
      credId: "NETACAD-IND-4739"
    },
    {
      id: "CERT-CS-SAF-05",
      title: "Digital Safety and Security Awareness",
      issuer: "Cisco Networking Academy",
      image: "/cisco_certifications/Digital Safety and Security Awareness.png",
      skills: "Détection du phishing, techniques d'ingénierie sociale et gestion sécurisée de l'identité numérique.",
      credId: "NETACAD-SAFE-8201"
    },
    {
      id: "CERT-CS-IOT-06",
      title: "Introduction to IoT",
      issuer: "Cisco Networking Academy",
      image: "/cisco_certifications/Introduction to IoT.png",
      skills: "Transformation numérique, architecture de capteurs connectés et Intent-Based Networking (IBN).",
      credId: "NETACAD-IOT-3910"
    },
    {
      id: "CERT-CS-BAS-07",
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      image: "/cisco_certifications/Networking Basics.png",
      skills: "Modèles de référence OSI et TCP/IP, adressage logique IPv4/IPv6 et simulation sous Cisco Packet Tracer.",
      credId: "NETACAD-BAS-1849"
    }
  ];

  return (
    <section id="certifications" className="py-20 border-b border-cyber-border bg-cyber-dark/20 relative">
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left">
          <div className="font-mono text-cyber-cyan text-xs tracking-wider mb-2 flex items-center justify-center lg:justify-start gap-1.5">
            <Award size={14} className="text-cyber-cyan" />
            CERTIFICATIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sans">
            Mes Certifications
          </h2>
          <div className="w-12 h-1 bg-cyber-cyan mt-3 mx-auto lg:mx-0"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group flex flex-col justify-between p-5 rounded border border-cyber-border bg-cyber-card/45 hover:bg-cyber-card/90 hover:border-cyber-cyan/40 hover:glow-cyan-sm transition-all duration-300"
            >
              <div>
                {/* Badge Image Frame */}
                <div className="w-full h-32 bg-cyber-bg/75 rounded border border-cyber-border/30 p-3 mb-4 flex items-center justify-center overflow-hidden group-hover:bg-cyber-bg transition-colors duration-300">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="max-h-full max-w-full object-contain select-none filter drop-shadow-[0_0_6px_rgba(34,211,238,0.1)] group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.25)] transition-all duration-300"
                  />
                </div>

                {/* Badge Header info */}
                <div className="flex items-center justify-between mb-3 font-mono text-[9px]">
                  <span className="text-gray-500">{cert.id}</span>
                  <div className="flex items-center gap-1 px-1.5 py-0.25 rounded border text-cyber-green border-cyber-green/20 bg-emerald-950/20">
                    <CheckCircle2 size={8} />
                    VERIFIE
                  </div>
                </div>

                {/* Badge Title & Issuer */}
                <h3 className="font-sans font-bold text-sm text-white group-hover:text-cyber-cyan transition-colors leading-snug min-h-[40px] flex items-center">
                  {cert.title}
                </h3>
                <p className="font-mono text-[10px] text-cyber-cyan/80 mt-1 font-semibold">
                  {cert.issuer}
                </p>

                {/* Badge Skills List */}
                <div className="mt-3.5 space-y-1.5">
                  <span className="font-mono text-[9px] text-gray-500 block uppercase tracking-wider">// COMPETENCES :</span>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed min-h-[48px]">
                    {cert.skills}
                  </p>
                </div>
              </div>

              {/* Card Footer credentials info */}
              <div className="border-t border-cyber-border/40 mt-5 pt-3.5 flex items-center justify-between font-mono text-[9px] text-gray-500">
                <span>ID: {cert.credId}</span>
                <span>Obtenu</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
