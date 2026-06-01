import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, X, CheckCircle2, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Nom requis.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email requis.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Adresse email invalide.";
    }
    if (!formData.message.trim()) tempErrors.message = "Message requis.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mojbonyk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setShowModal(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Une erreur est survenue lors de l'envoi du message.");
      }
    } catch (err) {
      alert("Erreur de réseau. Veuillez vérifier votre connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-cyber-bg relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyber-cyan/5 blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left">
          <div className="font-mono text-cyber-cyan text-xs tracking-wider mb-2 flex items-center justify-center lg:justify-start gap-1.5">
            <Mail size={14} className="text-cyber-cyan" />
            CONTACT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sans">
            Me Contacter
          </h2>
          <div className="w-12 h-1 bg-cyber-cyan mt-3 mx-auto lg:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded border border-cyber-border bg-cyber-card/40 relative"
          >
            <div className="space-y-6">
              <div className="font-mono text-xs text-cyber-cyan font-bold border-b border-cyber-border/40 pb-2">
                // SYSTEM_COORDINATES
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white font-sans">
                Prenons contact
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                N'hésitez pas à me contacter pour toute opportunité d'alternance, de projet ou de collaboration technique. 
                Je réponds généralement sous 24 à 48 heures ouvrées.
              </p>

              {/* Coordinates details */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded border border-cyber-border bg-cyber-dark/80 text-cyber-cyan flex items-center justify-center shrink-0 group-hover:border-cyber-cyan group-hover:glow-cyan-sm transition-all duration-300">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">Email direct</div>
                    <a href="mailto:tizaoul.hiba04@gmail.com" className="text-sm font-sans font-medium text-white hover:text-cyber-cyan transition-colors">
                      tizaoul.hiba04@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded border border-cyber-border bg-cyber-dark/80 text-cyber-cyan flex items-center justify-center shrink-0 group-hover:border-cyber-cyan group-hover:glow-cyan-sm transition-all duration-300">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">Localisation</div>
                    <span className="text-sm font-sans font-medium text-gray-300">
                      Toulouse, France
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social profiles icons */}
            <div className="border-t border-cyber-border/40 pt-6 mt-8 flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/hiba-tizaoui-285615332"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cyber-border hover:border-cyber-cyan hover:glow-cyan-sm text-gray-400 hover:text-cyber-cyan bg-cyber-dark/50 flex items-center justify-center transition-all duration-300 cursor-pointer"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a 
                href="https://github.com/hibatiz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cyber-border hover:border-cyber-cyan hover:glow-cyan-sm text-gray-400 hover:text-cyber-cyan bg-cyber-dark/50 flex items-center justify-center transition-all duration-300 cursor-pointer"
                title="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <span className="font-mono text-[9px] text-gray-600 ml-auto select-none">// LINKED_DEVICES</span>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 md:p-8 rounded border border-cyber-border bg-cyber-card/25"
          >
            <form onSubmit={handleSubmit} action="https://formspree.io/f/mojbonyk" method="POST" className="space-y-5 font-mono text-xs">
              <div className="text-gray-500 text-xs mb-4 flex items-center gap-1.5">
                <span>guest@hiba_sec_form:~$</span>
                <span className="text-cyber-cyan animate-pulse">POST --data-raw</span>
              </div>

              {/* Name Field */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-gray-300 block tracking-wide font-semibold">
                  NOM COMPLET
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  placeholder="admin_visitor..."
                  className={`w-full p-3 bg-cyber-dark border rounded font-sans focus:outline-none focus:border-cyber-cyan focus:glow-cyan-sm text-sm transition-all duration-300 text-white ${
                    errors.name ? 'border-red-500/60 bg-red-950/5' : 'border-cyber-border'
                  }`}
                />
                {errors.name && <span className="text-[10px] text-red-400 block mt-1">! ERROR: {errors.name}</span>}
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-gray-300 block tracking-wide font-semibold">
                  ADRESSE EMAIL
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  placeholder="visitor@domain.com..."
                  className={`w-full p-3 bg-cyber-dark border rounded font-sans focus:outline-none focus:border-cyber-cyan focus:glow-cyan-sm text-sm transition-all duration-300 text-white ${
                    errors.email ? 'border-red-500/60 bg-red-950/5' : 'border-cyber-border'
                  }`}
                />
                {errors.email && <span className="text-[10px] text-red-400 block mt-1">! ERROR: {errors.email}</span>}
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-gray-300 block tracking-wide font-semibold">
                  MESSAGE SECURISE
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder="votre message ici..."
                  className={`w-full p-3 bg-cyber-dark border rounded font-sans focus:outline-none focus:border-cyber-cyan focus:glow-cyan-sm text-sm transition-all duration-300 text-white resize-none leading-relaxed ${
                    errors.message ? 'border-red-500/60 bg-red-950/5' : 'border-cyber-border'
                  }`}
                />
                {errors.message && <span className="text-[10px] text-red-400 block mt-1">! ERROR: {errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-cyber-cyan hover:bg-cyan-500 text-cyber-bg font-bold tracking-wider uppercase rounded shadow-[0_0_12px_rgba(34,211,238,0.25)] hover:shadow-[0_0_18px_rgba(34,211,238,0.4)] disabled:opacity-50 transition-all duration-300 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4.5 h-4.5 rounded-full border-2 border-cyber-bg border-t-transparent animate-spin"></span>
                    Transmission...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Transmettre le Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="relative w-full max-w-md p-6 rounded border border-cyber-green/50 bg-cyber-dark text-center shadow-[0_0_25px_rgba(16,185,129,0.2)] font-mono text-xs overflow-hidden"
            >
              {/* Scanline overlay inside modal */}
              <div className="cyber-scanline bg-linear-to-r from-transparent via-cyber-green/30 to-transparent"></div>

              {/* Close Button */}
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>

              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full border border-cyber-green/30 bg-cyber-green/5 text-cyber-green flex items-center justify-center glow-green">
                  <CheckCircle2 size={24} />
                </div>
              </div>

              <h4 className="text-base font-bold text-white uppercase tracking-wider mb-2">
                TRANSMISSION COMPLETE
              </h4>
              
              <p className="text-gray-300 font-sans leading-relaxed text-sm mb-5">
                Message envoyé avec succès ! Le paquet a été encapsulé et transmis au serveur de réception.
              </p>

              {/* Fake upload telemetry metrics */}
              <div className="p-3 rounded bg-cyber-bg border border-cyber-border text-[10px] text-gray-500 text-left space-y-1 mb-5">
                <div>SYS_CHANNEL: TLS_1.3_ECDHE</div>
                <div>DESTINATION_TARGET: hiba-inbox.db</div>
                <div>UPLOAD_RATE: 14.8 KB/s</div>
                <div className="text-cyber-green font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-ping"></span>
                  STATUS: SUCCESS_OK_200
                </div>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="w-full py-2 bg-cyber-green/10 hover:bg-cyber-green/20 border border-cyber-green/45 hover:border-cyber-green text-cyber-green font-bold tracking-widest uppercase rounded transition-all duration-200"
              >
                Fermer la session
              </button>
            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
