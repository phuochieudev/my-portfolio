import { motion } from 'framer-motion';
import type { AboutContent } from '../types/portfolio';
import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';
import { cardVariants, viewportOnce } from '../lib/motion';

interface AboutSectionProps {
  about: AboutContent;
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="mt-24 scroll-mt-24">
      <SectionHeading eyebrow={about.eyebrow} heading={about.heading} />
      <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={cardVariants}>
        <GlassCard hoverLift={false}>
          <div className="flex flex-col gap-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-zinc-400">
                {paragraph}
              </p>
            ))}
            <div className="mt-2 flex flex-wrap gap-2 border-t border-white/10 pt-4">
              {about.principles.map((principle) => (
                <span
                  key={principle}
                  className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200"
                >
                  {principle}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
