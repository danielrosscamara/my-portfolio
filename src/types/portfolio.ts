export interface ProjectSourceLink {
  label: string;
  url: string;
}

export interface CategorizedTechStack {
  category: SkillCategory;
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  overview?: string;
  keyFeatures?: string[];
  techStack: string[];
  categorizedStack?: CategorizedTechStack[];
  liveUrl: string;
  githubUrl: string;
  sourceLinks?: ProjectSourceLink[];
  imageUrl?: string;
  featured: boolean;
}

export type SkillCategory = 
  | 'languages' 
  | 'frontend' 
  | 'backend' 
  | 'databases' 
  | 'ai_tools' 
  | 'tools_platforms' 
  | 'hardware_iot';

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export type Theme = 'light' | 'dark';
