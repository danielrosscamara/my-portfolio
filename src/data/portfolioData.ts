import type { Project, Skill, SocialLink } from '../types/portfolio';

export const personalInfo = {
  name: 'Daniel Ross Camara',
  role: 'Front-End Developer',
  tagline: 'Building modern, responsive web experiences.',
  bio: `I'm a passionate Front-End Developer specializing in building clean, performant, and accessible web applications using React, TypeScript, and modern CSS frameworks.`,
  email: 'danielrosscamara@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/1SFfd6FU3PSKIwFc47jqBxrB4UU0_XnOl/view?usp=sharing',
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Budget Planner v2',
    description: 'A personal finance app to track income, expenses, and savings goals built with React & TypeScript.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: '#',
    githubUrl: 'https://github.com/danielrosscamara/budget-planner-v2',
    featured: true,
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A modern, responsive personal portfolio website inspired by nevo.dev.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: '#',
    githubUrl: 'https://github.com/danielrosscamara/my-portfolio',
    featured: true,
  },
];

export const skills: Skill[] = [
  { name: 'React',        category: 'frontend' },
  { name: 'TypeScript',   category: 'frontend' },
  { name: 'Angular',      category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'HTML5',        category: 'frontend' },
  { name: 'CSS3 / SCSS',  category: 'frontend' },
  { name: 'Node.js',      category: 'backend' },
  { name: 'Git & GitHub', category: 'tools' },
  { name: 'Vite',         category: 'tools' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub',   url: 'https://github.com/danielrosscamara', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/danielrosscamara', icon: 'Linkedin' },
  { name: 'Email',    url: 'mailto:daniel.camara@example.com', icon: 'Mail' },
];
