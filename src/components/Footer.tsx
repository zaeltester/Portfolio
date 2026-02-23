import { personalInfo } from '../data/resume';

export default function Footer() {
  return (
    <footer className="py-8 text-center relative z-10">
      <div className="text-white/30 font-ui text-sm tracking-widest uppercase">
        © {new Date().getFullYear()} {personalInfo.name} // UAC PERSONNEL ID: 8392-A
      </div>
    </footer>
  );
}
