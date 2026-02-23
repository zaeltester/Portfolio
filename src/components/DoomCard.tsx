import { ReactNode, FC } from 'react';

interface DoomCardProps {
  children: ReactNode;
  title?: string;
  className?: string;
  accent?: 'red' | 'orange' | 'green';
}

const DoomCard: FC<DoomCardProps> = ({ children, title, className = "", accent = 'red' }) => {
  const accentColor = {
    red: 'border-doom-red',
    orange: 'border-doom-orange',
    green: 'border-doom-green'
  }[accent];

  const bgColor = {
    red: 'bg-doom-red',
    orange: 'bg-doom-orange',
    green: 'bg-doom-green'
  }[accent];

  return (
    <div className={`relative mb-8 ${className}`}>
      {/* Header Bar */}
      {title && (
        <div className="flex items-center mb-1">
          <div className={`h-6 px-4 flex items-center ${bgColor} text-black font-display font-bold text-xl tracking-wider clip-corner-tl`}>
            {title.toUpperCase()}
          </div>
          <div className={`h-1 flex-1 ${bgColor} opacity-50 ml-2`}></div>
        </div>
      )}

      {/* Content Box */}
      <div className={`bg-doom-panel/90 backdrop-blur-sm border-l-4 ${accentColor} p-6 relative clip-corner-br`}>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 bg-white/5 pointer-events-none"></div>
        
        {children}
      </div>
    </div>
  );
};

export default DoomCard;
