import { Download } from 'lucide-react';
import type { PersonalInfo } from '../types/portfolio';

interface NavBarProps {
  personalInfo: PersonalInfo;
}

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function NavBar({ personalInfo }: NavBarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#090d16]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-semibold tracking-tight text-white">
          {personalInfo.avatarInitials}
          <span className="ml-2 hidden text-zinc-500 sm:inline">/ {personalInfo.title}</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={personalInfo.resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-indigo-200"
        >
          <Download className="h-3.5 w-3.5" aria-hidden="true" />
          Resume
        </a>
      </div>
    </header>
  );
}
