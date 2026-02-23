import { skills } from '../data/resume';
import DoomCard from './DoomCard';
import { Cpu } from 'lucide-react';

export default function DoomSkills() {
  return (
    <section id="skills" className="py-16">
      <div className="flex items-center gap-4 mb-12">
        <Cpu className="text-doom-green" size={32} />
        <h2 className="text-4xl font-display font-bold text-white uppercase tracking-wide">
          Arsenal & Upgrades
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-doom-green to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <DoomCard key={category} title={category} accent="green">
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <div 
                  key={skill}
                  className="px-3 py-1 bg-white/5 border border-white/10 hover:border-doom-green hover:bg-doom-green/10 hover:text-doom-green transition-all cursor-default font-bold tracking-wide clip-corner-br"
                >
                  {skill.toUpperCase()}
                </div>
              ))}
            </div>
          </DoomCard>
        ))}
      </div>
    </section>
  );
}
