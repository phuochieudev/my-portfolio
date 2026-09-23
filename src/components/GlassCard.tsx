import { motion } from 'framer-motion';
import { useRef } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import { cardVariants } from '../lib/motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverLift?: boolean;
}

export function GlassCard({ children, className = '', hoverLift = true }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--glow-x', `${event.clientX - rect.left}px`);
    node.style.setProperty('--glow-y', `${event.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      variants={cardVariants}
      whileHover={hoverLift ? { y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-indigo-400/40 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(500px circle at var(--glow-x, 50%) var(--glow-y, 0%), rgba(99,102,241,0.16), transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent"
      />
      <div className="relative flex h-full flex-col">{children}</div>
    </motion.div>
  );
}
