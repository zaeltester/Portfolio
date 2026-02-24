/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import DoomHUD from './components/DoomHUD';
import DoomHero from './components/DoomHero';
import DoomExperience from './components/DoomExperience';
import DoomSkills from './components/DoomSkills';
import DoomEducation from './components/DoomEducation';
import DoomContact from './components/DoomContact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-doom-dark selection:bg-doom-red selection:text-white pb-24">
      <DoomHUD />
      <main className="max-w-6xl mx-auto px-6 relative z-10">
        <DoomHero />
        
        {/* Mobile Separators */}
        <div className="md:hidden h-px bg-gradient-to-r from-transparent via-doom-green/30 to-transparent my-12"></div>
        
        <DoomExperience />
        
        <div className="md:hidden h-px bg-gradient-to-r from-transparent via-doom-red/30 to-transparent my-12"></div>
        
        <DoomSkills />
        
        <div className="md:hidden h-px bg-gradient-to-r from-transparent via-doom-orange/30 to-transparent my-12"></div>
        
        <DoomEducation />
        
        <div className="md:hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"></div>
        
        <DoomContact />
      </main>
      <Footer />
    </div>
  );
}
