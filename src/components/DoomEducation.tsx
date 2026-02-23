import { education, certifications } from '../data/resume';
import DoomCard from './DoomCard';
import { Database } from 'lucide-react';

export default function DoomEducation() {
  return (
    <section id="education" className="py-16">
      <div className="flex items-center gap-4 mb-12">
        <Database className="text-doom-orange" size={32} />
        <h2 className="text-4xl font-display font-bold text-white uppercase tracking-wide">
          Data Codex
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-doom-orange to-transparent"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <DoomCard title="Academic Records" accent="orange">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-white/10">
                <div className="absolute -left-[5px] top-2 w-2 h-2 bg-doom-orange rotate-45"></div>
                <h4 className="text-xl font-display font-bold text-white leading-none mb-1">
                  {edu.degree.toUpperCase()}
                </h4>
                <div className="text-doom-orange font-bold mb-1">
                  {edu.school}
                </div>
                <div className="text-white/50 text-sm font-bold">
                  {edu.year} | {edu.location.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </DoomCard>

        <DoomCard title="Certifications" accent="orange">
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-black/40 p-4 border border-white/10 hover:border-doom-orange transition-colors">
                <h4 className="text-lg font-display font-bold text-white mb-1">
                  {cert.name.toUpperCase()}
                </h4>
                <div className="flex justify-between text-sm font-bold text-white/60">
                  <span>{cert.issuer.toUpperCase()}</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </DoomCard>
      </div>
    </section>
  );
}
