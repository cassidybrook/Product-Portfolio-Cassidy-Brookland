export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  period: string;
  sector: string;
  highlights: string[];
}

export interface EducationEntry {
  id: string;
  qualification: string;
  institution: string;
  period: string;
  note?: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demoAnchor: 'landing' | 'silosense' | 'gridpulse';
}

export interface PortfolioProfile {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  resumeUrl: string;
  intro: string;
  summary: string;
  site: {
    name: string;
    tagline: string;
    description: string;
  };
  featuredProject: FeaturedProject;
  howIThink: {
    title: string;
    principles: { heading: string; body: string }[];
  };
  skillGroups: SkillGroup[];
  foldedSkills: string[];
  education: EducationEntry[];
  experience: ExperienceEntry[];
  aiSummary: {
    headline: string;
    bullets: string[];
    toolchain: string;
  };
}
