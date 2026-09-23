import { motion } from 'framer-motion';
import type { Project } from '../types/portfolio';
import { gridContainerVariants, viewportOnce } from '../lib/motion';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './SectionHeading';

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="mt-24 scroll-mt-24">
      <SectionHeading eyebrow="Featured Projects" heading="Things I've built" />
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
