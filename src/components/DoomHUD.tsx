import { useState, useEffect } from 'react';
import { ArrowUp, Settings, User, Mail, Linkedin, Github, Skull } from 'lucide-react';
import { personalInfo } from '../data/resume';

export default function DoomHUD() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [isRageMode, setIsRageMode] = useState(false);

  const titles = [
    "IT Professional",
    "Software Developer",
    "Data Engineer",
    "SQL/BI Developer",
    "Deployment Specialist",
    "Electronic Engineer"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[currentTitleIndex];
      
      if (isDeleting) {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && displayedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, typingSpeed]);

  const triggerRageMode = () => {
    if (isRageMode) return;
    setIsRageMode(true);
    setTimeout(() => setIsRageMode(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* God Mode Effects (Invulnerability) */}
      <div className={`fixed inset-0 pointer-events-none z-[60] transition-opacity duration-300 ${isRageMode ? 'opacity-100' : 'opacity-0'}`}>
         {/* Invert colors to mimic classic Doom Invulnerability Sphere - Toned down */}
         <div className="absolute inset-0 backdrop-invert backdrop-contrast-150 backdrop-brightness-125"></div>
         
         {/* Golden Tint for God Mode */}
         <div className="absolute inset-0 bg-yellow-500/20 mix-blend-overlay"></div>

         {/* Intense Beating Border */}
         <div className="absolute inset-0 border-[60px] md:border-[100px] border-white/40 blur-3xl animate-pulse"></div>
         
         {/* Screen Flash/Pulse */}
         <div className="absolute inset-0 bg-white/10 animate-pulse mix-blend-screen"></div>
      </div>

      {/* Top Left: Name & Title */}
      <div className="fixed top-0 left-0 z-50 p-2 md:p-6 pointer-events-none w-full md:w-auto">
        <div className="pointer-events-auto">
          <div className="bg-doom-panel/90 border-l-[6px] border-doom-green px-4 py-3 md:px-6 md:py-4 rounded-br-2xl hover:bg-doom-panel transition-colors group shadow-lg max-w-[95vw] md:min-w-[300px] md:max-w-none flex flex-row items-center justify-between gap-4 md:gap-8">
            <div className="overflow-hidden">
              <h1 className="text-2xl md:text-5xl font-display font-bold text-doom-green leading-none tracking-wide uppercase truncate md:overflow-visible">
                {personalInfo.name}
              </h1>
              <div className="flex items-center gap-2 md:gap-3 mt-1 md:mt-2">
                <div className="flex items-center gap-1 shrink-0">
                  <div className="w-1 h-3 md:w-1.5 md:h-4 bg-doom-orange skew-x-[-20deg]"></div>
                  <div className="w-1 h-3 md:w-1.5 md:h-4 bg-doom-orange/70 skew-x-[-20deg]"></div>
                  <div className="w-1 h-3 md:w-1.5 md:h-4 bg-doom-orange/40 skew-x-[-20deg]"></div>
                </div>
                <p className="text-doom-orange font-ui font-bold tracking-widest text-[10px] md:text-sm uppercase truncate md:whitespace-nowrap min-h-[20px]">
                  {displayedText}
                  <span className="animate-pulse">_</span>
                </p>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex flex-col gap-1 md:gap-2 border-l border-white/10 pl-2 md:pl-4 shrink-0">
              <a href={`mailto:${personalInfo.email}`} className="text-white/50 hover:text-doom-green transition-colors" title="Email">
                <Mail size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-doom-orange transition-colors" title="LinkedIn">
                <Linkedin size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-doom-red transition-colors" title="GitHub">
                <Github size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom HUD Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-6 flex justify-end items-end pointer-events-none">
        
        {/* Center/Right: Key Hints & Rage Button */}
        <div className="flex gap-4 items-center mb-2 pointer-events-auto">
          
          {/* Rage Button */}
          <button 
             onClick={triggerRageMode}
             className={`flex items-center gap-2 px-3 py-1 rounded border transition-all duration-200 ${
               isRageMode 
                 ? 'bg-yellow-500 border-yellow-300 text-black animate-pulse shadow-[0_0_15px_rgba(234,179,8,0.8)]' 
                 : 'bg-doom-panel/80 border-white/10 text-white/50 hover:bg-yellow-900/80 hover:text-white hover:border-yellow-500'
             }`}
           >
             <Skull size={18} className={isRageMode ? 'animate-bounce' : ''} />
             <span className="font-bold text-xs uppercase hidden md:inline">IDDQD</span>
           </button>

          <div className="flex items-center gap-2 bg-doom-panel/80 px-3 py-1 rounded border border-white/5">
            <span className="text-white/50 font-bold text-xs">[ESC]</span>
            <span className="text-white font-bold text-sm uppercase">EXIT</span>
          </div>
          <div className="flex items-center gap-2 bg-doom-panel/80 px-3 py-1 rounded border border-white/5">
            <span className="text-white/50 font-bold text-xs">[K]</span>
            <Settings size={16} className="text-white" />
          </div>
          <div className="flex items-center gap-2 bg-doom-panel/80 px-3 py-1 rounded border border-white/5">
            <span className="text-white/50 font-bold text-xs">[L]</span>
            <User size={16} className="text-doom-green" />
          </div>
        </div>

      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 z-50 p-3 bg-doom-green text-black clip-corner-both hover:bg-white transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

      {/* Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
      
      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-40 hud-scanlines opacity-20"></div>
    </>
  );
}
