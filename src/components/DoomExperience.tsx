import { experience } from '../data/resume';
import DoomCard from './DoomCard';
import { Target } from 'lucide-react';

export default function DoomExperience() {
  return (
    <section id="experience" className="py-16">
      <div className="flex items-center gap-4 mb-12">
        <Target className="text-doom-red" size={32} />
        <h2 className="text-4xl font-display font-bold text-white uppercase tracking-wide">
          Mission Logs
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-doom-red to-transparent"></div>
      </div>

      <div className="space-y-8">
        {experience.map((job, index) => (
          <DoomCard key={index} title={job.title} accent="red">
            <div className="flex flex-col md:flex-row justify-between items-start mb-6 border-b border-white/10 pb-4">
              <div className="text-2xl font-display font-bold text-doom-orange">
                {job.company.toUpperCase()}
              </div>
              <div className="text-right">
                <div className="text-white font-bold tracking-wider">{job.period}</div>
                <div className="text-white/50 text-sm uppercase">{job.location}</div>
              </div>
            </div>
            
            <ul className="space-y-3">
              {job.description.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-doom-red rotate-45 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </DoomCard>
        ))}
      </div>
    </section>
  );
}
