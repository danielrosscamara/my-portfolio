import type { Project, Skill, Experience, SocialLink } from '../types/portfolio';

export const personalInfo = {
  name: 'Daniel Ross Camara',
  role: 'Front-End Developer',
  tagline: 'Building modern, responsive web experiences.',
  bio: `I'm a passionate Front-End Developer specializing in building clean, performant, and accessible web applications using React, TypeScript, Angular, NestJS, and modern CSS frameworks.`,
  email: 'danielrosscamara@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/1UuLKqz5Xhk8XFtkmsv1nHZuOc8ZDCf0m/view?usp=sharing',
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
    subtitle: 'Modular Enterprise CRM Platform',
    description: 'Modular enterprise CRM prototype featuring an interactive Kanban Sales Pipeline, live Socket.io updates, RBAC security, automated PDF generation engine, and NestJS/Prisma/PostgreSQL backend.',
    overview: 'A modular, high-performance enterprise CRM platform built to streamline multi-tier lead management, automated client consultations, and sales revenue forecasting. Engineered with an interactive drag-and-drop Kanban pipeline and real-time activity ledgers powered by NestJS and WebSockets.',
    keyFeatures: [
      'Interactive drag-and-drop Kanban Sales Pipeline with dynamic revenue forecasting',
      'Role-Based Access Control (RBAC) security for multi-tiered team permissions',
      'Real-time client activity ledger and live updates via Socket.io',
      'Automated server-side PDF proposal generation engine for sales reps',
      'RESTful API architecture backed by NestJS, Prisma ORM, and PostgreSQL',
    ],
    techStack: ['NestJS', 'Angular', 'Prisma ORM', 'PostgreSQL', 'Socket.io', 'Tailwind CSS'],
    categorizedStack: [
      { category: 'frontend', technologies: ['Angular', 'Ionic', 'Tailwind CSS'] },
      { category: 'backend', technologies: ['NestJS', 'Node.js', 'Socket.io', 'REST APIs'] },
      { category: 'databases', technologies: ['PostgreSQL', 'Prisma ORM'] },
      { category: 'languages', technologies: ['TypeScript', 'JavaScript'] },
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/danielrosscamara',
    sourceLinks: [
      { label: 'Frontend Repo', url: 'https://github.com/danielrosscamara' },
      { label: 'Backend API Repo', url: 'https://github.com/danielrosscamara' },
    ],
    featured: true,
  },
  {
    id: 2,
    title: 'Corporate Web Platform',
    subtitle: 'Enterprise Corporate Web Presence',
    description: 'Enterprise web presence designed for AGI Group, migrating from Wix to a custom Ionic + Angular + Tailwind stack with integrated CRM consultation booking functionality.',
    overview: 'Comprehensive corporate web platform engineered for Ascendant Global INC. (AGI Group), replacing legacy Wix infrastructure with a custom, highly responsive stack. Seamlessly integrates consultation booking directly into internal CRM workflows.',
    keyFeatures: [
      'Full migration from Wix to custom Ionic + Angular + Tailwind CSS architecture',
      'High-fidelity responsive UI layouts with zero visual compromises across devices',
      'Integrated multi-step consultation booking flow linked to internal CRM',
      'Optimized Core Web Vitals and lightning-fast asset delivery',
    ],
    techStack: ['Angular', 'Ionic', 'Tailwind CSS', 'TypeScript'],
    categorizedStack: [
      { category: 'frontend', technologies: ['Angular', 'Ionic', 'Tailwind CSS'] },
      { category: 'languages', technologies: ['TypeScript', 'JavaScript'] },
      { category: 'tools_platforms', technologies: ['Git', 'GitHub', 'Vercel'] },
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/danielrosscamara',
    sourceLinks: [
      { label: 'Source Code', url: 'https://github.com/danielrosscamara' },
    ],
    featured: true,
  },
  {
    id: 3,
    title: 'Budget Planner v2',
    subtitle: 'Personal Finance & Budget Tracker',
    description: 'A personal finance app to track income, expenses, and savings goals built with React & TypeScript.',
    overview: 'A sleek, reactive personal finance web application enabling users to track recurring income, categorize expenses, monitor monthly spending trends, and plan savings goals with instant visual feedback.',
    keyFeatures: [
      'Interactive expense logging with categorized visual breakdown charts',
      'Dynamic savings goal progress tracking with monthly remaining budget calculations',
      'Persistent local storage state with reactive real-time updates',
      'Responsive dark/light themed interface with fluid input validation',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    categorizedStack: [
      { category: 'frontend', technologies: ['React', 'Tailwind CSS'] },
      { category: 'languages', technologies: ['TypeScript', 'JavaScript'] },
      { category: 'tools_platforms', technologies: ['Vite', 'Git', 'GitHub'] },
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/danielrosscamara/budget-planner-v2',
    sourceLinks: [
      { label: 'GitHub Repository', url: 'https://github.com/danielrosscamara/budget-planner-v2' },
    ],
    featured: true,
  },
  {
    id: 4,
    title: 'Personal Portfolio Website',
    subtitle: 'Modern Developer Portfolio',
    description: 'A modern, responsive personal portfolio website built with React 18, TypeScript, and Tailwind CSS v4.',
    overview: 'A performance-focused, accessible personal portfolio website built with React 19, TypeScript, and Tailwind CSS v4. Features atmospheric ambient animations, a custom token-driven design system, and a dual-theme engine.',
    keyFeatures: [
      'Custom Neo-Glassmorphism navigation bar with persistent dark/light theme toggle',
      'Atmospheric floating background blobs and fluid micro-interactions',
      'Single source of truth TypeScript architecture with strict ESLint conformance',
      'Responsive layout scaling from mobile viewports (375px) to 4K displays',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    categorizedStack: [
      { category: 'frontend', technologies: ['React', 'Tailwind CSS'] },
      { category: 'languages', technologies: ['TypeScript', 'JavaScript'] },
      { category: 'tools_platforms', technologies: ['Vite', 'Git', 'GitHub', 'Vercel'] },
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/danielrosscamara/my-portfolio',
    sourceLinks: [
      { label: 'GitHub Repository', url: 'https://github.com/danielrosscamara/my-portfolio' },
    ],
    featured: true,
  },
  {
    id: 5,
    title: 'GHL API & Webhook Bridge',
    subtitle: 'Full-Stack Integration Suite',
    description: 'Full-stack GoHighLevel integration suite featuring REST API v2 Middleware, Webhook Listener & Simulator, Custom Funnel Scripting Suite, and a React + Tailwind CSS Custom Dashboard App designed for GHL Custom Menu iFrame embedding.',
    overview: 'Full-stack GoHighLevel integration suite featuring REST API v2 Middleware, real-time Webhook Listener & Simulator, custom funnel scripting suite, and an embedded React + Tailwind CSS dashboard app.',
    keyFeatures: [
      'High-throughput GoHighLevel REST API v2 middleware proxy',
      'Real-time webhook listener and event payload simulator for testing',
      'Custom funnel scripting suite for automated conversion tracking',
      'React dashboard designed for seamless GHL Custom Menu iFrame embedding',
    ],
    techStack: ['React', 'Node.js', 'Express', 'GoHighLevel API', 'Webhooks', 'Tailwind CSS'],
    categorizedStack: [
      { category: 'frontend', technologies: ['React', 'Tailwind CSS'] },
      { category: 'backend', technologies: ['Node.js', 'Express', 'REST APIs'] },
      { category: 'languages', technologies: ['JavaScript', 'TypeScript'] },
      { category: 'tools_platforms', technologies: ['Git', 'GitHub'] },
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/danielrosscamara/ghl-api-webhook-bridge',
    sourceLinks: [
      { label: 'Integration Repo', url: 'https://github.com/danielrosscamara/ghl-api-webhook-bridge' },
    ],
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
