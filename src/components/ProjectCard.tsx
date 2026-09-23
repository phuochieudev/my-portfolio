import { ArrowUpRight, Calendar, Kanban, ShoppingCart, Store } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Project, ProjectIconName } from '../types/portfolio';
import { GlassCard } from './GlassCard';
import { SocialIcon } from './SocialIcon';

const projectVisuals: Record<ProjectIconName, { Icon: LucideIcon; gradient: string }> = {
  store: { Icon: Store, gradient: 'from-emerald-500/25 via-teal-500/10 to-transparent' },
  ecommerce: { Icon: ShoppingCart, gradient: 'from-violet-500/25 via-fuchsia-500/10 to-transparent' },
  tasks: { Icon: Kanban, gradient: 'from-sky-500/25 via-blue-500/10 to-transparent' },
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { Icon, gradient } = projectVisuals[project.icon];

  return (
    <GlassCard className={project.featured ? 'ring-1 ring-indigo-400/30' : ''}>
      <div
        className={`relative -mx-6 -mt-6 mb-4 flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${gradient}`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] [background-size:18px_18px]"
        />
        <Icon className="relative h-14 w-14 text-white/30" strokeWidth={1.25} aria-hidden="true" />
        {project.featured && (
          <span className="absolute right-3 top-3 rounded-full bg-indigo-500/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg shadow-indigo-500/40">
            Featured
          </span>
        )}
      </div>

      <p className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
        {project.startDate} – {project.endDate}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
      <p className="text-xs font-medium text-indigo-300">{project.role}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400 line-clamp-3">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-indigo-200"
        >
          <SocialIcon name="github" className="h-4 w-4" />
          View Source
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            Live Demo
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </GlassCard>
  );
}
