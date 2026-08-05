import type { Project, Skill, Experience, SocialLink } from '../types/portfolio';

export const personalInfo = {
  name: 'Daniel Ross Camara',
  role: 'Front-End Developer',
  tagline: 'Building modern, responsive web experiences.',
  bio: `I'm a passionate Front-End Developer specializing in building clean, performant, and accessible web applications using React, TypeScript, Angular, NestJS, and modern CSS frameworks.`,
  email: 'danielrosscamara@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/1pgIGy7ziA-zxsmhbDvS69WaTpytYP4OH/view?usp=sharing',
};

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Software Developer Intern',
    company: 'Ascendant Global INC. (AGI Group)',
    period: 'Feb 2026 – April 2026',
    description: 'Developed enterprise web platforms, custom stack migrations, and modular CRM systems.',
    highlights: [
      'Migrated corporate web platform from Wix to custom stack using Ionic, Angular, and Tailwind CSS.',
      'Designed high-fidelity responsive layouts and integrated booking consultation page connected to CRM.',
      'Architected modular CRM prototype with drag-and-drop Kanban Sales Pipeline & revenue forecasting.',
      'Built Role-Based Access Control (RBAC) security, Global Activity Ledger, and Socket.io live notifications.',
      'Developed automated PDF proposal generation engine and multi-tier Lead Management dossier.',
      'Architected REST API with NestJS, Prisma ORM, and PostgreSQL database schema.',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Customer Relationship Management (CRM) System',
    description: 'Modular enterprise CRM prototype featuring an interactive Kanban Sales Pipeline, live Socket.io updates, RBAC security, automated PDF generation engine, and NestJS/Prisma/PostgreSQL backend.',
    techStack: ['NestJS', 'Angular', 'Prisma ORM', 'PostgreSQL', 'Socket.io', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/danielrosscamara',
    featured: true,
  },
  {
    id: 2,
    title: 'Corporate Web Platform',
    description: 'Enterprise web presence designed for AGI Group, migrating from Wix to a custom Ionic + Angular + Tailwind stack with integrated CRM consultation booking functionality.',
    techStack: ['Angular', 'Ionic', 'Tailwind CSS', 'TypeScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/danielrosscamara',
    featured: true,
  },
  {
    id: 3,
    title: 'Budget Planner v2',
    description: 'A personal finance app to track income, expenses, and savings goals built with React & TypeScript.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: '#',
    githubUrl: 'https://github.com/danielrosscamara/budget-planner-v2',
    featured: true,
  },
  {
    id: 4,
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive personal portfolio website built with React 18, TypeScript, and Tailwind CSS v4.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: '#',
    githubUrl: 'https://github.com/danielrosscamara/my-portfolio',
    featured: true,
  },
  {
    id: 5,
    title: 'GHL API & Webhook Bridge',
    description: 'Full-stack GoHighLevel integration suite featuring REST API v2 Middleware, Webhook Listener & Simulator, Custom Funnel Scripting Suite, and a React + Tailwind CSS Custom Dashboard App designed for GHL Custom Menu iFrame embedding.',
    techStack: ['React', 'Node.js', 'Express', 'GoHighLevel API', 'Webhooks', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/danielrosscamara/ghl-api-webhook-bridge',
    featured: true,
  },
];

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', category: 'languages' },
  { name: 'TypeScript', category: 'languages' },
  { name: 'Java',       category: 'languages' },
  { name: 'Python',     category: 'languages' },
  { name: 'C++',        category: 'languages' },
  { name: 'C#',         category: 'languages' },

  // Frontend
  { name: 'Angular',      category: 'frontend' },
  { name: 'Ionic',        category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Bootstrap',    category: 'frontend' },
  { name: 'React',        category: 'frontend' },

  // Backend & APIs
  { name: 'NestJS',    category: 'backend' },
  { name: 'Node.js',   category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'Socket.io', category: 'backend' },

  // Databases & ORM
  { name: 'PostgreSQL', category: 'databases' },
  { name: 'Firebase',   category: 'databases' },
  { name: 'Prisma ORM', category: 'databases' },

  // AI-Augmented Development
  { name: 'Cursor',            category: 'ai_tools' },
  { name: 'Google AI Studio',  category: 'ai_tools' },
  { name: 'Prompt Engineering',category: 'ai_tools' },

  // Tools and Platforms
  { name: 'Git',       category: 'tools_platforms' },
  { name: 'GitHub',    category: 'tools_platforms' },
  { name: 'Capacitor', category: 'tools_platforms' },
  { name: 'Vercel',    category: 'tools_platforms' },
  { name: 'Vite',      category: 'tools_platforms' },

  // Hardware & IoT
  { name: 'IoT System Architecture', category: 'hardware_iot' },
  { name: 'Electronic Design',       category: 'hardware_iot' },
  { name: 'Arduino',                 category: 'hardware_iot' },
  { name: 'Circuit Troubleshooting', category: 'hardware_iot' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub',   url: 'https://github.com/danielrosscamara', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/danielrosscamara', icon: 'Linkedin' },
  { name: 'Email',    url: 'mailto:danielrosscamara@gmail.com', icon: 'Mail' },
];
