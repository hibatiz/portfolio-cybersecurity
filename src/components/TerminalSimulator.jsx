import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RefreshCw, Terminal, AlertTriangle, Shield, Check, FileCode, Server } from 'lucide-react';

export default function TerminalSimulator() {
  const [activeTab, setActiveTab] = useState('audit'); // 'audit', 'logs', 'snort'
  
  // 1. Audit Script State
  const [auditSteps, setAuditSteps] = useState([]);
  const [isAuditing, setIsAuditing] = useState(false);
  
  // 2. Log Stream State
  const [logs, setLogs] = useState([]);
  const [isStreaming, setIsStreaming] = useState(true);
  const logContainerRef = useRef(null);

  // 3. Snort Parser State
  const [snortRule, setSnortRule] = useState(
    'alert tcp $EXTERNAL_NET any -> $HOME_NET 22 (msg:"SSH Brute Force Attempt"; flags:S; threshold:type threshold, track by_src, count 5, seconds 60; sid:1000001; rev:1;)'
  );
  const [parsedOutput, setParsedOutput] = useState(null);

  // Run security audit sequence
  const startAudit = () => {
    if (isAuditing) return;
    setIsAuditing(true);
    setAuditSteps([]);

    const steps = [
      { text: "[*] Initialisation de l'audit de sécurité...", delay: 500, type: "info" },
      { text: "[*] Analyse de la configuration du Bastion...", delay: 1000, type: "info" },
      { text: "[+] Contrôle d'accès strict : Activé (SSH Port 22 restreint)", delay: 800, type: "success" },
      { text: "[*] Inspection des règles pare-feu iptables/ufw...", delay: 1200, type: "info" },
      { text: "[+] Règles de filtrage d'entrée : OK (Trafic non autorisé rejeté)", delay: 700, type: "success" },
      { text: "[*] Analyse des journaux d'authentification (/var/log/auth.log)...", delay: 1500, type: "info" },
      { text: "[!] ATTENTION : 5 tentatives de connexion SSH échouées détectées depuis l'IP 192.168.1.150", delay: 900, type: "warning" },
      { text: "[*] Validation de l'intégrité du système de fichiers...", delay: 1100, type: "info" },
      { text: "[+] Aucun binaire système modifié détecté.", delay: 600, type: "success" },
      { text: "[+] RAPPORT FINAL : Système renforcé (Hardened). Vulnérabilités critiques : 0, Avertissements : 1.", delay: 800, type: "summary" }
    ];

    let currentDelay = 0;
    steps.forEach((step, index) => {
      currentDelay += step.delay;
      setTimeout(() => {
        setAuditSteps(prev => [...prev, step]);
        if (index === steps.length - 1) {
          setIsAuditing(false);
        }
      }, currentDelay);
    });
  };

  // Run audit initially
  useEffect(() => {
    startAudit();
  }, []);

  // Generate continuous dummy logs for log stream
  useEffect(() => {
    if (!isStreaming || activeTab !== 'logs') return;

    const ips = ['192.168.1.45', '10.0.0.12', '172.16.254.1', '192.168.1.100', '8.8.8.8', '185.220.101.4'];
    const protocols = ['TCP', 'UDP', 'ICMP'];
    const alerts = [
      { msg: 'Accès autorisé SSH de admin via Bastion', level: 'INFO', color: 'text-cyber-green' },
      { msg: 'Requête ICMP Echo (Ping) détectée', level: 'INFO', color: 'text-gray-400' },
      { msg: 'Scan de ports Nmap détecté (SYN Scan)', level: 'WARNING', color: 'text-yellow-400' },
      { msg: 'Tentative d\'injection SQL bloquée sur /api/login', level: 'CRITICAL', color: 'text-red-500' },
      { msg: 'Connexion sortante vers un nœud Tor suspect', level: 'CRITICAL', color: 'text-red-500' },
      { msg: 'Requête API inhabituelle (Taux anormal)', level: 'WARNING', color: 'text-yellow-400' }
    ];

    const interval = setInterval(() => {
      const randomIp = ips[Math.floor(Math.random() * ips.length)];
      const randomProto = protocols[Math.floor(Math.random() * protocols.length)];
      const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
      const newLog = {
        timestamp: new Date().toLocaleTimeString(),
        ip: randomIp,
        proto: randomProto,
        message: randomAlert.msg,
        level: randomAlert.level,
        color: randomAlert.color
      };

      setLogs(prev => {
        const nextLogs = [...prev, newLog];
        // Limit logs to last 50
        return nextLogs.slice(-50);
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [isStreaming, activeTab]);

  // Scroll logs to bottom
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs, activeTab]);

  // Parse Snort Rule
  const handleParseSnort = () => {
    try {
      // Basic regex parsing for illustration
      const actionMatch = snortRule.match(/^(alert|log|pass|drop|reject|sdrop)/i);
      const protoMatch = snortRule.match(/^(?:\S+\s+)(\S+)/i);
      const srcMatch = snortRule.match(/^(?:\S+\s+\S+\s+)(\S+)\s+(\S+)/i);
      const destMatch = snortRule.match(/(?:->)\s+(\S+)\s+(\S+)/i);
      const msgMatch = snortRule.match(/msg:\s*"([^"]+)"/i);
      const sidMatch = snortRule.match(/sid:\s*(\d+)/i);

      if (!actionMatch || !protoMatch) {
        setParsedOutput({ error: "Format de règle invalide. Doit commencer par une action valide (ex: alert)." });
        return;
      }

      setParsedOutput({
        action: actionMatch[1].toUpperCase(),
        protocol: protoMatch[1].toUpperCase(),
        source: srcMatch ? `${srcMatch[1]} (port ${srcMatch[2]})` : 'Indéterminé',
        destination: destMatch ? `${destMatch[1]} (port ${destMatch[2]})` : 'Indéterminé',
        message: msgMatch ? msgMatch[1] : 'Aucun message de log',
        sid: sidMatch ? sidMatch[1] : 'N/A'
      });
    } catch (err) {
      setParsedOutput({ error: "Erreur lors de l'analyse de la règle Snort." });
    }
  };

  return (
    <div className="w-full flex flex-col rounded-lg border border-cyber-border bg-cyber-dark overflow-hidden glow-cyan-sm text-left font-mono text-sm h-[400px] md:h-[480px]">
      
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d1525] border-b border-cyber-border">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-cyber-green/80"></div>
          <span className="text-xs text-gray-400 ml-2 flex items-center gap-1.5">
            <Terminal size={12} className="text-cyber-cyan" />
            console@hiba-sec-bastion:~
          </span>
        </div>
        <div className="flex space-x-1">
          <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></span>
        </div>
      </div>

      {/* Terminal Tabs */}
      <div className="flex bg-[#070b13] border-b border-cyber-border text-xs">
        <button 
          onClick={() => setActiveTab('audit')}
          className={`px-4 py-2 border-r border-cyber-border flex items-center gap-1.5 transition-colors ${
            activeTab === 'audit' 
              ? 'bg-cyber-dark text-cyber-cyan border-t-2 border-t-cyber-cyan font-semibold' 
              : 'text-gray-400 hover:text-gray-200 hover:bg-cyber-card/50'
          }`}
        >
          <Server size={12} />
          Audit Sec. (Python)
        </button>
        <button 
          onClick={() => setActiveTab('logs')}
          className={`px-4 py-2 border-r border-cyber-border flex items-center gap-1.5 transition-colors ${
            activeTab === 'logs' 
              ? 'bg-cyber-dark text-cyber-cyan border-t-2 border-t-cyber-cyan font-semibold' 
              : 'text-gray-400 hover:text-gray-200 hover:bg-cyber-card/50'
          }`}
        >
          <Terminal size={12} />
          Logs Réseau (IDS)
        </button>
        <button 
          onClick={() => setActiveTab('snort')}
          className={`px-4 py-2 border-r border-cyber-border flex items-center gap-1.5 transition-colors ${
            activeTab === 'snort' 
              ? 'bg-cyber-dark text-cyber-cyan border-t-2 border-t-cyber-cyan font-semibold' 
              : 'text-gray-400 hover:text-gray-200 hover:bg-cyber-card/50'
          }`}
        >
          <FileCode size={12} />
          Parseur Snort
        </button>
      </div>

      {/* Terminal Display Area */}
      <div className="flex-1 p-4 overflow-y-auto bg-cyber-dark text-gray-300 relative">
        <div className="cyber-scanline"></div>

        {/* Tab 1: Python Audit Simulator */}
        {activeTab === 'audit' && (
          <div className="space-y-2">
            <div className="text-gray-500 text-xs">// Python script: bastion_hardening_audit.py</div>
            <div className="text-cyber-cyan">python3 bastion_hardening_audit.py</div>
            
            <div className="space-y-1.5 mt-2">
              {auditSteps.map((step, idx) => (
                <div 
                  key={idx} 
                  className={`leading-relaxed ${
                    step.type === 'success' ? 'text-cyber-green' :
                    step.type === 'warning' ? 'text-yellow-400 font-semibold' :
                    step.type === 'summary' ? 'text-cyber-cyan font-bold border-t border-cyber-border/40 pt-1.5 mt-1.5' :
                    'text-gray-300'
                  }`}
                >
                  {step.text}
                </div>
              ))}
            </div>
            
            {!isAuditing && (
              <button 
                onClick={startAudit}
                className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-cyber-cyan/10 hover:bg-cyber-cyan/20 border border-cyber-cyan/30 hover:border-cyber-cyan/60 rounded text-cyber-cyan text-xs transition-all duration-200"
              >
                <RefreshCw size={12} className="animate-spin-slow" />
                Relancer l'audit
              </button>
            )}
          </div>
        )}

        {/* Tab 2: Logs Net */}
        {activeTab === 'logs' && (
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-cyber-border/50 text-xs">
              <span className="text-gray-500">Flux en direct - Analyseur de Logs NIDS</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsStreaming(!isStreaming)}
                  className="p-1 rounded bg-cyber-border hover:bg-cyber-border/80 text-gray-300 hover:text-white"
                  title={isStreaming ? "Pause" : "Play"}
                >
                  {isStreaming ? <Pause size={12} /> : <Play size={12} />}
                </button>
                <button 
                  onClick={() => setLogs([])}
                  className="px-2 py-0.5 rounded bg-cyber-border hover:bg-cyber-border/80 text-xs text-gray-300 hover:text-white"
                >
                  Effacer
                </button>
              </div>
            </div>

            <div ref={logContainerRef} className="flex-1 overflow-y-auto space-y-1 pr-1 font-mono text-[11px] md:text-xs">
              {logs.length === 0 ? (
                <div className="text-gray-500 flex items-center gap-2 justify-center h-full">
                  <Terminal size={14} className="animate-pulse text-cyber-cyan" />
                  En attente de paquets réseau...
                </div>
              ) : (
                logs.map((log, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row md:items-center py-0.5 border-b border-cyber-border/10">
                    <span className="text-cyber-cyan/70 md:w-20 shrink-0">[{log.timestamp}]</span>
                    <span className="text-yellow-500/80 md:w-28 shrink-0 md:px-2">IP: {log.ip}</span>
                    <span className="text-purple-400 md:w-16 shrink-0 font-semibold">[{log.proto}]</span>
                    <span className={`flex-1 ${log.color}`}>{log.message}</span>
                    <span className="text-xs px-1.5 py-0.25 rounded bg-slate-900 border border-cyber-border text-gray-400 scale-90 select-none">
                      {log.level}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Tab 3: Snort Rule Parser */}
        {activeTab === 'snort' && (
          <div className="space-y-4">
            <div className="text-xs text-gray-500">// Éditez la règle Snort pour l'analyser :</div>
            
            <div className="space-y-2">
              <textarea
                value={snortRule}
                onChange={(e) => setSnortRule(e.target.value)}
                className="w-full h-20 p-2.5 bg-[#070b13] border border-cyber-border rounded focus:border-cyber-cyan focus:outline-none text-cyber-green text-xs font-mono resize-none leading-relaxed"
                placeholder="Entrez votre règle Snort ici..."
              />
              
              <button 
                onClick={handleParseSnort}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-cyber-green/10 hover:bg-cyber-green/20 border border-cyber-green/30 hover:border-cyber-green/60 rounded text-cyber-green text-xs transition-all duration-200"
              >
                <Shield size={12} />
                Analyser la règle Snort
              </button>
            </div>

            {parsedOutput && (
              <div className="p-3 bg-[#0d1525] border border-cyber-border rounded text-xs space-y-2.5 animate-fadeIn">
                {parsedOutput.error ? (
                  <div className="text-red-400 flex items-center gap-1.5">
                    <AlertTriangle size={14} />
                    {parsedOutput.error}
                  </div>
                ) : (
                  <>
                    <div className="font-semibold text-cyber-cyan border-b border-cyber-border/40 pb-1 flex items-center gap-1.5">
                      <Check size={14} className="text-cyber-green" />
                      Structure de la Règle Analysée (SID: {parsedOutput.sid})
                    </div>
                    <div className="grid grid-cols-2 gap-y-1.5 text-gray-400">
                      <div>Action Déclenchée :</div>
                      <div className="text-red-400 font-bold">{parsedOutput.action}</div>
                      <div>Protocole Analysé :</div>
                      <div className="text-white font-medium">{parsedOutput.protocol}</div>
                      <div>Source Réseau :</div>
                      <div className="text-yellow-400 font-mono">{parsedOutput.source}</div>
                      <div>Destination Cible :</div>
                      <div className="text-yellow-400 font-mono">{parsedOutput.destination}</div>
                      <div className="col-span-2 border-t border-cyber-border/20 my-1"></div>
                      <div>Message d'Alerte :</div>
                      <div className="col-span-2 text-cyber-green font-semibold mt-0.5">
                        "{parsedOutput.message}"
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
