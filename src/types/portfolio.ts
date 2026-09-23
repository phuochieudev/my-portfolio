export type SocialIconName = 'github' | 'linkedin' | 'mail' | 'phone';

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: SocialIconName;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  birthDate: string;
  email: string;
  phone: string;
  avatarInitials: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
}

export interface AboutContent {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  principles: string[];
}

export type SkillCategoryIcon = 'languages' | 'frontend' | 'backend' | 'tools';

export interface SkillCategory {
  id: string;
  title: string;
  icon: SkillCategoryIcon;
  skills: string[];
}

export type TimelineEntryType = 'work' | 'education';

export interface TimelineEntry {
  id: string;
  type: TimelineEntryType;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  points: string[];
}

export type ProjectIconName = 'store' | 'ecommerce' | 'tasks';

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  startDate: string;
  endDate: string;
  featured?: boolean;
  icon: ProjectIconName;
}

export interface ContactContent {
  eyebrow: string;
  heading: string;
  description: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  about: AboutContent;
  skillCategories: SkillCategory[];
  timeline: TimelineEntry[];
  projects: Project[];
  contact: ContactContent;
}
