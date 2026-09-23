import { motion } from 'framer-motion';
import { cardVariants, viewportOnce } from '../lib/motion';

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, heading, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`mb-8 ${align === 'center' ? 'text-center' : ''}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{heading}</h2>
    </motion.div>
  );
}
