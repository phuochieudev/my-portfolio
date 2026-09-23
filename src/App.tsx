import { NavBar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { SiteFooter } from './components/SiteFooter';
import { portfolioData } from './data/portfolioData';

function App() {
  const { personalInfo, about, skillCategories, timeline, projects, contact } = portfolioData;

  return (
    <div id="top" className="relative min-h-screen bg-[#090d16] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <NavBar personalInfo={personalInfo} />

      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <HeroSection personalInfo={personalInfo} />
        <AboutSection about={about} />
        <SkillsSection skillCategories={skillCategories} />
        <TimelineSection timeline={timeline} />
        <ProjectsSection projects={projects} />
        <ContactSection contact={contact} personalInfo={personalInfo} />
      </main>

      <SiteFooter personalInfo={personalInfo} />
    </div>
  );
}

export default App;
