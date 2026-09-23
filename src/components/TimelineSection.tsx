import { motion } from 'framer-motion';
import type { TimelineEntry } from '../types/portfolio';
import { SectionHeading } from './SectionHeading';
import { TimelineItem } from './TimelineItem';
import { gridContainerVariants, viewportOnce } from '../lib/motion';

interface TimelineSectionProps {
  timeline: TimelineEntry[];
}

export function TimelineSection({ timeline }: TimelineSectionProps) {
  return (
    <section id="experience" className="mt-24 scroll-mt-24">
      <SectionHeading eyebrow="Experience" heading="Where I've worked & studied" />
      <motion.div variants={gridContainerVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        {timeline.map((entry, index) => (
          <TimelineItem key={entry.id} entry={entry} isLast={index === timeline.length - 1} />
        ))}
      </motion.div>
    </section>
  );
}
