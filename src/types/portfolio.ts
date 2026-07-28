export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export type Theme = 'light' | 'dark';
