import { personalInfo } from '../data/resume';
import { Mail, Linkedin, Github, Radio, Send } from 'lucide-react';
import DoomCard from './DoomCard';

export default function DoomContact() {
  return (
    <section id="contact" className="py-16">
      <div className="flex items-center gap-4 mb-12">
        <Radio className="text-white" size={32} />
        <h2 className="text-4xl font-display font-bold text-white uppercase tracking-wide">
          Communications
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-white to-transparent"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Channels */}
        <DoomCard title="Transmission Channels" accent="green">
          <div className="space-y-6">
            <div className="group flex items-center gap-4 p-4 bg-black/40 border border-white/10 hover:border-doom-green hover:bg-doom-green/10 transition-all">
              <div className="p-3 bg-doom-green/20 text-doom-green rounded-sm group-hover:bg-doom-green group-hover:text-black transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-xs font-bold text-doom-green tracking-widest mb-1">PRIMARY UPLINK</div>
                <div className="text-lg md:text-xl font-display font-bold text-white tracking-wide select-text cursor-text break-all">{personalInfo.email}</div>
              </div>
            </div>

            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-black/40 border border-white/10 hover:border-doom-orange hover:bg-doom-orange/10 transition-all"
            >
              <div className="p-3 bg-doom-orange/20 text-doom-orange rounded-sm group-hover:bg-doom-orange group-hover:text-black transition-colors">
                <Linkedin size={24} />
              </div>
              <div>
                <div className="text-xs font-bold text-doom-orange tracking-widest mb-1">SECURE NETWORK</div>
                <div className="text-xl font-display font-bold text-white tracking-wide">LINKEDIN PROFILE</div>
              </div>
            </a>

            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-black/40 border border-white/10 hover:border-doom-red hover:bg-doom-red/10 transition-all"
            >
              <div className="p-3 bg-doom-red/20 text-doom-red rounded-sm group-hover:bg-doom-red group-hover:text-black transition-colors">
                <Github size={24} />
              </div>
              <div>
                <div className="text-xs font-bold text-doom-red tracking-widest mb-1">DATA REPOSITORY</div>
                <div className="text-xl font-display font-bold text-white tracking-wide">GITHUB SOURCE</div>
              </div>
            </a>
          </div>
        </DoomCard>

        {/* Status / Message Panel */}
        <div className="relative">
          <div className="absolute inset-0 bg-doom-panel/90 clip-corner-br border-2 border-white/10"></div>
          <div className="relative p-8 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 text-doom-green">
                <div className="w-2 h-2 bg-doom-green animate-pulse"></div>
                <span className="font-bold tracking-widest text-sm">UPLINK ESTABLISHED</span>
              </div>
              
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                READY TO DEPLOY?
              </h3>
              <p className="text-white/70 font-ui leading-relaxed mb-8">
                I am currently available for new operations. Initiate contact protocol to discuss mission parameters, technical requirements, and deployment schedules.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a 
                href={`mailto:${personalInfo.email}?subject=Transmission%20Uplink%20Request`}
                className="w-full py-4 bg-doom-red text-white font-display font-bold text-2xl tracking-widest text-center hover:bg-white hover:text-black transition-colors clip-corner-both flex items-center justify-center gap-3"
              >
                <Send size={24} />
                SEND TRANSMISSION
              </a>
              
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-transparent border-2 border-white/20 text-white font-display font-bold text-2xl tracking-widest text-center hover:border-doom-orange hover:text-doom-orange transition-colors clip-corner-both flex items-center justify-center gap-3"
              >
                <Radio size={24} />
                DOWNLOAD DOSSIER (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
