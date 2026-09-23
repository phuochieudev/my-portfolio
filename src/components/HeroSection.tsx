import { motion } from 'framer-motion';
import { Cake, Download, MapPin, Sparkles } from 'lucide-react';
import type { PersonalInfo, SocialLink } from '../types/portfolio';
import { GlassCard } from './GlassCard';
import { SocialIcon } from './SocialIcon';
import { gridContainerVariants } from '../lib/motion';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
}

function SocialButton({ link }: { link: SocialLink }) {
  const isExternal = link.url.startsWith('http');
  return (
    <a
      href={link.url}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      aria-label={link.label}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-indigo-200"
    >
      <SocialIcon name={link.icon} className="h-4 w-4" />
    </a>
  );
}

export function HeroSection({ personalInfo }: HeroSectionProps) {
  return (
    <motion.div variants={gridContainerVariants} initial="hidden" animate="visible">
      <GlassCard hoverLift={false}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-xl font-semibold text-white shadow-lg shadow-indigo-500/30">
                {personalInfo.avatarInitials}
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Open to work
              </span>
            </div>

            <h1 className="mt-6 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              {personalInfo.name}
            </h1>
            <p className="mt-2 flex items-center gap-1.5 text-lg font-medium text-indigo-300">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              {personalInfo.title}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">{personalInfo.tagline}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Cake className="h-3.5 w-3.5" aria-hidden="true" />
                {personalInfo.birthDate}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/50"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
            <div className="flex gap-2">
              {personalInfo.socialLinks.map((link) => (
                <SocialButton key={link.id} link={link} />
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
