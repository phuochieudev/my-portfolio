import { motion } from 'framer-motion';
import { Braces, Database, LayoutGrid, Server } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { SkillCategory, SkillCategoryIcon } from '../types/portfolio';
import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';
import { TechIcon } from './TechIcon';
import { gridContainerVariants, viewportOnce } from '../lib/motion';

const iconMap: Record<SkillCategoryIcon, LucideIcon> = {
  languages: Braces,
  frontend: LayoutGrid,
  backend: Server,
  tools: Database,
};

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  const Icon = iconMap[category.icon];

  return (
    <GlassCard>
      <div className="flex items-center gap-2 text-zinc-500">
        <Icon className="h-4 w-4" aria-hidden="true" />
        <h3 className="text-xs font-semibold uppercase tracking-wider">{category.title}</h3>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-300 transition-colors hover:border-indigo-400/40 hover:text-indigo-200"
          >
            <TechIcon name={skill} className="h-3.5 w-3.5 shrink-0" />
            {skill}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

export function SkillsSection({ skillCategories }: SkillsSectionProps) {
  return (
    <section id="skills" className="mt-24 scroll-mt-24">
      <SectionHeading eyebrow="Tech Stack" heading="Tools I reach for" />
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {skillCategories.map((category) => (
          <SkillCategoryCard key={category.id} category={category} />
        ))}
      </motion.div>
    </section>
  );
}
