import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import type { TimelineEntry } from '../types/portfolio';
import { GlassCard } from './GlassCard';
import { cardVariants } from '../lib/motion';

interface TimelineItemProps {
  entry: TimelineEntry;
  isLast: boolean;
}

export function TimelineItem({ entry, isLast }: TimelineItemProps) {
  const Icon = entry.type === 'work' ? Briefcase : GraduationCap;

  return (
    <motion.div variants={cardVariants} className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
            entry.current
              ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300'
              : 'border-indigo-400/30 bg-indigo-500/10 text-indigo-300'
          }`}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        {!isLast && (
          <span className="mt-2 w-px flex-1 bg-gradient-to-b from-white/15 to-transparent" aria-hidden="true" />
        )}
      </div>

      <div className="flex-1 pb-8">
        <GlassCard hoverLift={false}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-base font-semibold text-white">{entry.title}</h3>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
              {entry.startDate} – {entry.endDate}
            </span>
          </div>
          <p className="mt-1 text-sm font-medium text-indigo-300">
            {entry.organization} · {entry.location}
          </p>
          <ul className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
            {entry.points.map((point) => (
              <li key={point} className="text-xs leading-relaxed text-zinc-400">
                {point}
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </motion.div>
  );
}
