import { ArrowLeft, ExternalLink, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import type { SkillCategory } from '../types/portfolio';

interface ProjectDetailsProps {
  projectId: number;
  onBack: () => void;
}

const categoryLabels: Record<SkillCategory, string> = {
  languages:       'Languages',
  frontend:        'Frontend',
  backend:         'Backend & APIs',
  databases:       'Databases & ORM',
  ai_tools:        'AI-Augmented Development',
  tools_platforms: 'Tools & Platforms',
  hardware_iot:    'Hardware & IoT',
};

const categoryColors: Record<SkillCategory, string> = {
  languages:       'border-blue-400/50 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30',
  frontend:        'border-indigo-400/50 text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/30',
  backend:         'border-green-400/50 text-green-600 dark:text-green-400 bg-green-50/50 dark:bg-green-950/30',
  databases:       'border-emerald-400/50 text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/30',
  ai_tools:        'border-purple-400/50 text-purple-600 dark:text-purple-400 bg-purple-50/50 dark:bg-purple-950/30',
  tools_platforms: 'border-orange-400/50 text-orange-600 dark:text-orange-400 bg-orange-50/50 dark:bg-orange-950/30',
  hardware_iot:    'border-teal-400/50 text-teal-600 dark:text-teal-400 bg-teal-50/50 dark:bg-teal-950/30',
};

export default function ProjectDetails({ projectId, onBack }: ProjectDetailsProps) {
  const project = projects.find((p) => p.id === projectId) || projects[0];

  return (
    <div className="min-h-screen pt-24 pb-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container">
        {/* Top Header Bar: Back Button, Title, and Upper-Right ONLY Live Site Button */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 font-mono-custom text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>

          {/* Project Title Centerpiece */}
          <h1 className="font-heading text-lg sm:text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wider hidden sm:block">
            {project.title}
          </h1>

          {/* Upper Right: ONLY Live Site Button (Source icons removed per specification) */}
          <div>
            {project.liveUrl && project.liveUrl !== '#' ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live demo for ${project.title}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white font-semibold text-xs hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
              >
                <ExternalLink size={14} />
                Live Site
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-500 font-mono-custom text-xs">
                Internal Prototype
              </span>
            )}
          </div>
        </div>

        {/* Uniform High-Fidelity Hero Banner */}
        <div className="w-full aspect-video sm:aspect-21/9 max-h-115 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 mb-12 shadow-sm">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            /* Uniform Mockup Hero Container */
            <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 bg-linear-to-br from-gray-100/80 via-white to-gray-50 dark:from-gray-900/80 dark:via-gray-950 dark:to-gray-900">
              {/* Window Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <span className="font-mono-custom text-xs text-primary font-semibold tracking-widest uppercase">
                  {project.subtitle || 'Flagship Project'}
                </span>
              </div>

              {/* Monogram Banner Centerpiece */}
              <div className="flex flex-col items-center justify-center text-center gap-3 my-auto py-6">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary dark:bg-primary/15 shadow-inner">
                  <Code2 size={36} />
                </div>
                <h2 className="font-heading text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="font-mono-custom text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-xl">
                  {project.subtitle}
                </p>
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between text-xs font-mono-custom text-gray-500 pt-3 border-t border-gray-200/60 dark:border-gray-800/60">
                <span>Architecture Verified</span>
                <span className="text-primary font-semibold">Production Grade</span>
              </div>
            </div>
          )}
        </div>

        {/* 2-Column Content Layout (Guide: Image 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column (2/3 width): Overview, Key Features & Categorized Tech Stack */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview Section */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                {project.overview || project.description}
              </p>
            </section>

            {/* Key Features Section */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <section>
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Key Features
                </h2>
                <ul className="space-y-3.5">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      <span className="text-primary font-bold mt-0.5">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Lower-Left: Categorized Tech Stack (Replaces the crossed-out area in Image 2) */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Tech Stack
              </h2>

              {project.categorizedStack && project.categorizedStack.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {project.categorizedStack.map((group) => (
                    <div
                      key={group.category}
                      className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/40"
                    >
                      <h3 className="font-heading text-xs font-semibold text-gray-700 dark:text-gray-300 tracking-wider uppercase mb-3">
                        {categoryLabels[group.category]}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {group.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`font-mono-custom text-xs px-3 py-1.5 rounded-lg border ${categoryColors[group.category]} transition-all duration-200`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Fallback general stack pills if no explicit categorizedStack */
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono-custom text-xs px-3 py-1.5 rounded-lg border border-indigo-400/50 text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* Right Column (1/3 width): Project Info Card */}
          <div className="lg:col-span-1">
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 sticky top-24 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-800">
                Project Info
              </h3>

              {/* TYPE */}
              <div className="mb-6">
                <span className="block font-mono-custom text-xs text-gray-500 uppercase tracking-widest mb-1.5">
                  Type
                </span>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {project.subtitle || 'Web Application'}
                </p>
              </div>

              {/* LIVE DEMO */}
              <div className="mb-6">
                <span className="block font-mono-custom text-xs text-gray-500 uppercase tracking-widest mb-1.5">
                  Live Demo
                </span>
                {project.liveUrl && project.liveUrl !== '#' ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:underline"
                  >
                    Visit Live Site
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="text-sm text-gray-400 dark:text-gray-500">
                    Internal Demo
                  </span>
                )}
              </div>

              {/* SOURCE CODE */}
              <div>
                <span className="block font-mono-custom text-xs text-gray-500 uppercase tracking-widest mb-2">
                  Source Code
                </span>
                {project.sourceLinks && project.sourceLinks.length > 0 ? (
                  <div className="flex flex-col gap-2">
                    {project.sourceLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors py-1"
                      >
                        <FaGithub size={16} />
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                ) : project.githubUrl && project.githubUrl !== '#' ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors py-1"
                  >
                    <FaGithub size={16} />
                    <span>GitHub Repository</span>
                  </a>
                ) : (
                  <span className="text-sm text-gray-400 dark:text-gray-500">
                    Private Enterprise Codebase
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
