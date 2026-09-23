import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, Send } from 'lucide-react';
import type { ContactContent, PersonalInfo } from '../types/portfolio';
import { GlassCard } from './GlassCard';
import { SocialIcon } from './SocialIcon';
import { cardVariants, viewportOnce } from '../lib/motion';

interface ContactSectionProps {
  contact: ContactContent;
  personalInfo: PersonalInfo;
}

export function ContactSection({ contact, personalInfo }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const externalLinks = personalInfo.socialLinks.filter((link) => link.url.startsWith('http'));

  return (
    <section id="contact" className="mt-24 scroll-mt-24">
      <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={cardVariants}>
        <GlassCard hoverLift={false} className="items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">{contact.eyebrow}</p>
          <h2 className="mt-2 max-w-2xl text-2xl font-bold text-white sm:text-3xl">{contact.heading}</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">{contact.description}</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/50"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Say Hello
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-indigo-200"
            >
              {copied ? (
                <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              ) : (
                <Copy className="h-4 w-4" aria-hidden="true" />
              )}
              {copied ? 'Copied!' : personalInfo.email}
            </button>
          </div>

          <div className="mt-6 flex gap-3 border-t border-white/10 pt-6">
            {externalLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/50 hover:text-indigo-200"
              >
                <SocialIcon name={link.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
