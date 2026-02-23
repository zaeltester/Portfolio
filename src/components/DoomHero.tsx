import { personalInfo } from '../data/resume';
import { Target, Cpu, Database, Zap, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function DoomHero() {
  const menuItems = [
    { label: 'CAMPAIGN', sub: 'WORK EXPERIENCE', href: '#experience', icon: Target },
    { label: 'ARSENAL', sub: 'TECHNICAL SKILLS', href: '#skills', icon: Cpu },
    { label: 'CODEX', sub: 'EDUCATION & DATA', href: '#education', icon: Database },
    { label: 'COMMUNICATIONS', sub: 'CONTACT ME', href: '#contact', icon: Zap },
  ];

  return (
    <section className="min-h-screen relative flex flex-col justify-center pt-32 pb-20 md:pt-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-doom-dark z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-doom-dark via-transparent to-doom-dark opacity-90"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-doom-green/5 to-transparent opacity-30"></div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 relative z-10 h-full items-center">
        
        {/* Left Column: Logo & Menu */}
        <div className="col-span-1 md:col-span-12 lg:col-span-5 flex flex-col gap-8 md:gap-12">
          
          {/* Logo Area - Replaced by HUD, keeping spacer or game logo if needed, but for now just spacer */}
          <div className="mb-2 w-full max-w-md px-8 transform -skew-x-12">
             <div className="text-doom-green font-display font-bold text-3xl md:text-4xl tracking-widest opacity-80 border-b-2 border-doom-green/30 pb-2 whitespace-nowrap">
               MAIN MENU
             </div>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-3">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                className="group relative h-16 w-full max-w-md"
              >
                {/* Button Background Shape */}
                <div className="absolute inset-0 bg-gradient-to-r from-doom-panel to-zinc-900 transform -skew-x-12 border-l-4 border-doom-border group-hover:from-doom-green group-hover:to-doom-green/80 group-hover:border-white transition-all duration-200 shadow-lg"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-between px-8 transform -skew-x-12">
                  <div className="flex flex-col justify-center">
                    <span className="font-display font-bold text-3xl text-white tracking-wide group-hover:text-black transition-colors">
                      {item.label}
                    </span>
                    <span className="font-ui text-xs font-bold text-white/50 tracking-widest group-hover:text-black/70 transition-colors">
                      {item.sub}
                    </span>
                  </div>
                  <ChevronRight className="text-white/20 group-hover:text-black transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Column: Event Cards / Stats */}
        <div className="col-span-1 md:col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col gap-6 justify-center px-4 md:px-0">
          
          {/* Card 1: Objective */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="relative group w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-doom-green/10 transform skew-x-12 border border-doom-green/30"></div>
            <div className="relative p-6 transform skew-x-12 bg-doom-panel/90 border-l-4 border-doom-green hover:bg-doom-green/10 transition-colors">
              <h3 className="font-display font-bold text-2xl text-doom-green mb-1 uppercase">Current Objective</h3>
              <p className="font-ui text-sm text-white/80 leading-relaxed transform -skew-x-12">
                {personalInfo.summary.slice(0, 120)}...
              </p>
              <div className="mt-4 flex justify-end transform -skew-x-12">
                <span className="text-xs font-bold bg-doom-green text-black px-2 py-0.5">ACTIVE</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Location */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
            className="relative group w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-doom-orange/10 transform skew-x-12 border border-doom-orange/30"></div>
            <div className="relative p-6 transform skew-x-12 bg-doom-panel/90 border-l-4 border-doom-orange hover:bg-doom-orange/10 transition-colors">
              <h3 className="font-display font-bold text-2xl text-doom-orange mb-1 uppercase">Deployment Zone</h3>
              <div className="flex items-center gap-4 transform -skew-x-12">
                <div className="text-4xl font-bold text-white">CA</div>
                <div className="text-sm text-white/60">
                  SECTOR: NORTH AMERICA<br/>
                  LOC: {personalInfo.location.toUpperCase()}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Socials */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="relative group cursor-pointer w-full max-w-md mx-auto lg:mx-0"
          >
             <div className="absolute inset-0 bg-doom-red/10 transform skew-x-12 border border-doom-red/30"></div>
             <div className="relative p-6 transform skew-x-12 bg-doom-panel/90 border-l-4 border-doom-red hover:bg-doom-red/10 transition-colors">
              <h3 className="font-display font-bold text-2xl text-doom-red mb-1 uppercase">Slayers Club</h3>
              <p className="font-ui text-sm text-white/80 mb-2 transform -skew-x-12">
                Join the network. Access source code and protocols.
              </p>
              <div className="flex gap-4 transform -skew-x-12 mt-2">
                <a href={personalInfo.github} target="_blank" className="text-xs font-bold border border-white/30 px-3 py-1 hover:bg-white hover:text-black transition-colors">GITHUB</a>
                <a href={personalInfo.linkedin} target="_blank" className="text-xs font-bold border border-white/30 px-3 py-1 hover:bg-white hover:text-black transition-colors">LINKEDIN</a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
