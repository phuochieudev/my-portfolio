import type { PersonalInfo } from '../types/portfolio';

interface SiteFooterProps {
  personalInfo: PersonalInfo;
}

export function SiteFooter({ personalInfo }: SiteFooterProps) {
  return (
    <footer className="mt-16 border-t border-white/5 py-8 text-center">
      <p className="text-xs text-zinc-600">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </p>
      <a href="#top" className="mt-2 inline-block text-xs text-zinc-600 transition-colors hover:text-indigo-300">
        Back to top ↑
      </a>
    </footer>
  );
}
