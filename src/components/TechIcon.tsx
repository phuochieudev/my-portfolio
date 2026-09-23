import {
  siAntdesign,
  siCplusplus,
  siDocker,
  siDotnet,
  siGit,
  siHtml5,
  siJavascript,
  siJsonwebtokens,
  siMongodb,
  siMysql,
  siNestjs,
  siPostgresql,
  siReact,
  siSpring,
  siTailwindcss,
  siTanstack,
  siTypescript,
  siVite,
} from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';
import { Blocks, Boxes, Coffee, Database, Hash, Package, Table } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type TechIconEntry = { kind: 'brand'; icon: SimpleIcon } | { kind: 'lucide'; icon: LucideIcon };

const techIconMap: Record<string, TechIconEntry> = {
  // Languages
  JavaScript: { kind: 'brand', icon: siJavascript },
  TypeScript: { kind: 'brand', icon: siTypescript },
  Java: { kind: 'lucide', icon: Coffee },
  'C/C++': { kind: 'brand', icon: siCplusplus },
  'C#': { kind: 'lucide', icon: Hash },
  SQL: { kind: 'lucide', icon: Table },
  'HTML/CSS': { kind: 'brand', icon: siHtml5 },

  // Frontend
  'React.js': { kind: 'brand', icon: siReact },
  TailwindCSS: { kind: 'brand', icon: siTailwindcss },
  'Ant Design': { kind: 'brand', icon: siAntdesign },
  'TanStack Query': { kind: 'brand', icon: siTanstack },
  Zustand: { kind: 'lucide', icon: Package },
  Vite: { kind: 'brand', icon: siVite },

  // Backend
  NestJS: { kind: 'brand', icon: siNestjs },
  'ASP.NET Core': { kind: 'brand', icon: siDotnet },
  '.NET': { kind: 'brand', icon: siDotnet },
  SpringMVC: { kind: 'brand', icon: siSpring },
  'JWT Auth': { kind: 'brand', icon: siJsonwebtokens },
  'Entity Framework Core': { kind: 'lucide', icon: Database },

  // Systems & Tools
  PostgreSQL: { kind: 'brand', icon: siPostgresql },
  MySQL: { kind: 'brand', icon: siMysql },
  MongoDB: { kind: 'brand', icon: siMongodb },
  Docker: { kind: 'brand', icon: siDocker },
  Git: { kind: 'brand', icon: siGit },
  OOP: { kind: 'lucide', icon: Blocks },
  Microservices: { kind: 'lucide', icon: Boxes },
};

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = 'h-3.5 w-3.5' }: TechIconProps) {
  const entry = techIconMap[name];
  if (!entry) return null;

  if (entry.kind === 'lucide') {
    const Icon = entry.icon;
    return <Icon className={className} aria-hidden="true" />;
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      style={{ color: `#${entry.icon.hex}` }}
      aria-hidden="true"
    >
      <path fill="currentColor" d={entry.icon.path} />
    </svg>
  );
}
