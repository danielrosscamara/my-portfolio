import type { Project, Skill, Experience, SocialLink } from '../types/portfolio';

export const personalInfo = {
  name: 'Daniel Ross Camara',
  role: 'AI-Native Full-Stack Developer',
  tagline: 'Building modern, responsive web experiences.',
  bio: `I'm a full-stack developer who loves building responsive web apps and experimenting with modern AI workflows. With hands-on experience in React, Angular, NestJS, and Python, I enjoy turning ideas into clean, reliable software from the database up to the user interface.`,
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
    title: 'Renoog AI',
    subtitle: 'AI Storytelling & Character Roleplay Platform',
    description: 'A private interactive storytelling and creative writing app where users chat with custom AI characters, explore branching story paths, and keep their writing completely private.',
    overview: 'Renoog AI is an interactive creative writing and storytelling app that lets you chat with custom AI characters and build fictional worlds. Unlike cloud apps that store and track your conversations, Renoog AI keeps your stories completely private on your own device. You can connect your favorite AI models, create rich character personalities, and explore branching storylines in real time.',
    keyFeatures: [
      'Choose Your Favorite AI: Easily connect popular cloud AI providers or run completely private offline models on your own computer',
      'Instant Live Typing: Story dialogue streams word-by-word with zero delay, just like chatting with a live collaborator',
      'Swipe Through Story Choices: Want a different reply? Swipe sideways to explore alternative character reactions without losing story progress',
      'Import Community Characters: Easily load character cards and custom personalities made by the creative writing community',
      'Long-Term Story Memory: Characters remember past events, dialogue nuances, and relationships throughout extended writing sessions',
      'Distraction-Free Dark Mode: A sleek, comfortable interface designed for long, immersive creative sessions',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'SQLite', 'Ollama', 'OpenRouter API', 'SSE'],
    categorizedStack: [
      { category: 'frontend', technologies: ['React', 'TypeScript', 'Tailwind CSS'] },
      { category: 'backend', technologies: ['FastAPI', 'Python', 'REST APIs', 'SSE'] },
      { category: 'databases', technologies: ['SQLite'] },
      { category: 'ai_tools', technologies: ['Ollama', 'OpenRouter API', 'Prompt Engineering'] },
      { category: 'languages', technologies: ['TypeScript', 'Python'] },
      { category: 'tools_platforms', technologies: ['Git', 'GitHub', 'Vite'] },
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/danielrosscamara/renoog-ai',
    sourceLinks: [
      { label: 'GitHub Repository', url: 'https://github.com/danielrosscamara/renoog-ai' },
    ],
    imageUrl: '/projects/renoog ai.png',
    featured: true,
    pinned: true,
    status: 'In Progress (WIP)',
  },
  {
    id: 2,
    title: 'Customer Relationship Management (CRM) System',
    subtitle: 'Modular Enterprise CRM Platform',
    description: 'An all-in-one business management platform featuring a visual drag-and-drop sales pipeline, instant PDF quote generation, and real-time team collaboration.',
    overview: 'An all-in-one business management platform designed to help sales teams track prospective clients, organize deals, and close sales faster. Features an intuitive visual board where team members can drag and drop deals through each stage, generate professional PDF quotes with one click, and see team updates happen live on their screens.',
    keyFeatures: [
      'Visual Deal Pipeline: Easily drag and drop prospective clients through each sales stage on a clean, visual board',
      'One-Click PDF Proposals: Instantly generate polished PDF proposals and cost estimates to send to clients in seconds',
      'Live Team Collaboration: Notes, deals, and customer interactions update in real time across the entire sales team',
      'Role-Based Team Permissions: Keeps company data secure by giving managers, agents, and admins tailored access levels',
      'Revenue Forecasting: Automatically calculates projected monthly earnings based on deals currently in progress',
    ],
    techStack: ['NestJS', 'Angular', 'Prisma ORM', 'PostgreSQL', 'Socket.io', 'Tailwind CSS'],
    categorizedStack: [
      { category: 'frontend', technologies: ['Angular', 'Ionic', 'Tailwind CSS'] },
      { category: 'backend', technologies: ['NestJS', 'Node.js', 'Socket.io', 'REST APIs'] },
      { category: 'databases', technologies: ['PostgreSQL', 'Prisma ORM'] },
      { category: 'languages', technologies: ['TypeScript', 'JavaScript'] },
    ],
    liveUrl: '#',
    githubUrl: '#',
    sourceLinks: [],
    featured: true,
    pinned: true,
  },
  {
    id: 3,
    title: 'Personal Portfolio Website',
    subtitle: 'Modern Developer Portfolio',
    description: 'A modern, responsive personal portfolio website crafted to showcase software development projects, technical skills, and professional experience with fluid animations and dual-theme support.',
    overview: 'A modern, interactive portfolio crafted to showcase my software development projects, technical skills, and professional experience. Built from the ground up for speed, fluid aesthetics, and seamless usability on any device—from smartphones to widescreen desktop displays.',
    keyFeatures: [
      'Light & Dark Mode: Smoothly switch between a crisp light theme and an eye-friendly dark mode with your preference saved automatically',
      'Interactive Project Deep Dives: Explore detailed overviews, real app screenshots, and live demonstrations for every featured project',
      'Fluid Visual Animations: Designed with subtle motion and modern glassmorphic styling to create an engaging, premium user experience',
      'Fully Responsive Design: Perfectly adapts to any screen size, ensuring a fast and beautiful experience on mobile and desktop',
      'Fast & Accessible: Engineered for instant loading speeds and clear readability for all visitors',
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
    pinned: true,
  },
  {
    id: 4,
    title: 'OutSmart — Smart Energy Monitoring Outlet',
    subtitle: 'IoT Smart Outlet & Energy Management System (Thesis)',
    description: 'An IoT-enabled smart outlet device and real-time web dashboard for monitoring and controlling connected appliances to optimize electricity consumption and detect energy waste.',
    overview: 'OutSmart is a full-stack IoT energy management platform consisting of custom smart outlet hardware (ESP8266 + PZEM-004T AC sensor + Solid State Relay) and a real-time responsive web application. Enables live telemetry streaming (Voltage, Current, Power, Power Factor), remote device control, idle appliance alerts, power bill estimation, and automated scheduling via Firebase Realtime Database.',
    keyFeatures: [
      'Custom IoT hardware unit engineered with NodeMCU ESP8266, PZEM-004T AC sensor, and SSR-40 DA relay',
      'Real-time bi-directional telemetry sync and remote relay actuation via Firebase Realtime Database',
      'Interactive web dashboard featuring live AC power gauges, consumption analytics, and bill estimation',
      'Automated idle appliance detection with push notifications and customizable operating schedules',
      'Non-invasive current sensing using split-core current transformer (CT coil) and step-down AC-DC power supply',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Bootstrap Studio', 'IoT System Architecture', 'Arduino'],
    categorizedStack: [
      { category: 'frontend', technologies: ['HTML', 'CSS'] },
      { category: 'languages', technologies: ['JavaScript'] },
      { category: 'databases', technologies: ['Firebase'] },
      { category: 'tools_platforms', technologies: ['Bootstrap Studio', 'Git', 'GitHub'] },
      { category: 'hardware_iot', technologies: ['IoT System Architecture', 'Electronic Design', 'Arduino'] },
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/danielrosscamara/outsmart',
    sourceLinks: [
      { label: 'GitHub Repository', url: 'https://github.com/danielrosscamara/outsmart' },
    ],
    imageUrl: '/projects/outsmart.png',
    featured: true,
    pinned: true,
  },
  {
    id: 5,
    title: 'Corporate Web Platform',
    subtitle: 'Enterprise Corporate Web Presence',
    description: 'A custom corporate website built for Ascendant Global INC. (AGI Group) with an integrated consultation booking system and optimized mobile performance.',
    overview: 'A professional corporate website created for Ascendant Global INC. (AGI Group) to establish a modern digital presence. Replaced an outdated website builder with a custom, high-speed web application that lets prospective corporate clients easily book consultations directly into the company\'s internal schedule.',
    keyFeatures: [
      'Custom Corporate Branding: A sleek, professional look tailored to modern B2B clients, replacing slow generic website templates',
      'Direct Consultation Booking: An intuitive booking calendar where visitors can schedule discovery calls in just a few clicks',
      'Lightning-Fast Page Speeds: Heavily optimized assets deliver instant page loads and smooth scrolling on all devices',
      'Mobile-First Usability: Flawlessly tested on smartphones and tablets so busy executives can explore services on the go',
      'CRM Connected: Inquiries and booked calls feed automatically into the company\'s internal client pipeline',
    ],
    techStack: ['Angular', 'Ionic', 'Tailwind CSS', 'TypeScript'],
    categorizedStack: [
      { category: 'frontend', technologies: ['Angular', 'Ionic', 'Tailwind CSS'] },
      { category: 'languages', technologies: ['TypeScript', 'JavaScript'] },
      { category: 'tools_platforms', technologies: ['Git', 'GitHub', 'Vercel'] },
    ],
    liveUrl: '#',
    githubUrl: '#',
    sourceLinks: [],
    imageUrl: '/projects/agi website.png',
    featured: true,
    pinned: true,
  },
  {
    id: 6,
    title: 'Budget Planner v2',
    subtitle: 'Personal Finance & Budget Tracker',
    description: 'A friendly personal finance app designed to help users track expenses, visualize spending habits, and reach savings goals with zero complicated spreadsheets.',
    overview: 'A friendly personal finance app designed to help everyday users take control of their money without complicated spreadsheets. Easily log daily expenses, set monthly savings goals, and visualize where your paycheck goes with colorful charts.',
    keyFeatures: [
      'Visual Spending Breakdown: See your spending organized into easy-to-read charts for groceries, bills, entertainment, and more',
      'Savings Goal Tracker: Set financial milestones—like emergency funds or vacation budgets—and watch your progress grow',
      'Instant Budget Health Check: Immediately see how much spendable cash you have left for the remainder of the month',
      'Private On-Device Storage: Your financial information stays strictly on your own device—no accounts or sensitive bank logins required',
      'Comfortable Themes: Clean design with quick toggles between light and dark modes for day or night budgeting',
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
    featured: false,
    pinned: false,
  },
  {
    id: 7,
    title: 'GHL API & Webhook Bridge',
    subtitle: 'Full-Stack Integration Suite',
    description: 'An automated marketing integration tool that captures customer leads in real time, routes inquiries into sales pipelines, and provides a centralized tracking dashboard.',
    overview: 'An automated integration tool built for businesses using the GoHighLevel marketing platform. It connects marketing funnels, customer forms, and automated messaging together so that incoming sales leads are instantly captured and routed without manual data entry.',
    keyFeatures: [
      'Automated Lead Capture: Instantly transfers customer form submissions into sales pipelines with zero delays or lost inquiries',
      'Live Event Monitor: A visual dashboard where business managers can watch new customer activities and triggers as they happen',
      'Embedded Dashboard: Fits directly inside the GoHighLevel platform so staff never have to juggle multiple open browser windows',
      'Reliable Notification Bridge: Sends immediate alerts whenever a high-value customer takes an important action on the website',
      'Automated Conversion Tracking: Tracks client journeys from initial ad click to final purchase to measure marketing success',
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
      { label: 'GitHub Repository', url: 'https://github.com/danielrosscamara/ghl-api-webhook-bridge' },
    ],
    featured: false,
    pinned: false,
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
  { name: 'NestJS',                   category: 'backend' },
  { name: 'Node.js',                  category: 'backend' },
  { name: 'FastAPI',                  category: 'backend' },
  { name: 'REST APIs',                category: 'backend' },
  { name: 'Socket.io',                category: 'backend' },
  { name: 'SSE', category: 'backend' },

  // Databases & ORM
  { name: 'PostgreSQL', category: 'databases' },
  { name: 'SQLite',     category: 'databases' },
  { name: 'Firebase',   category: 'databases' },
  { name: 'Prisma ORM', category: 'databases' },

  // AI-Augmented Development
  { name: 'Antigravity',       category: 'ai_tools' },
  { name: 'Ollama',            category: 'ai_tools' },
  { name: 'Cursor',            category: 'ai_tools' },
  { name: 'Google AI Studio',  category: 'ai_tools' },
  { name: 'OpenRouter API',    category: 'ai_tools' },
  { name: 'Prompt Engineering',category: 'ai_tools' },

  // Tools and Platforms
  { name: 'Git',              category: 'tools_platforms' },
  { name: 'GitHub',           category: 'tools_platforms' },
  { name: 'Capacitor',        category: 'tools_platforms' },
  { name: 'Bootstrap Studio', category: 'tools_platforms' },
  { name: 'Vercel',           category: 'tools_platforms' },
  { name: 'Vite',             category: 'tools_platforms' },

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
