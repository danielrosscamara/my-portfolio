import { ArrowLeft, ExternalLink, ImageIcon } from 'lucide-react';
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
        {/* Top Header Bar*/}
        <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 font-mono-custom text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer shrink-0"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>

          {/* Project Title */}
          <h1 className="font-heading text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wider hidden sm:block mx-4 text-center leading-snug max-w-xl text-balance">
            {project.title}
          </h1>

          {/* Upper Right: View Live Site */}
          <div className="shrink-0">
            <a
              href={project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : '#'}
              target={project.liveUrl && project.liveUrl !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={`Visit live demo for ${project.title}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-emerald-500/50 text-emerald-600 dark:text-emerald-400 bg-emerald-50/60 dark:bg-emerald-950/40 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-gray-950 transition-all duration-200 font-mono-custom text-xs font-semibold shadow-sm shadow-emerald-500/10 cursor-pointer whitespace-nowrap shrink-0"
            >
              <ExternalLink size={14} />
              View Live Site
            </a>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="w-full aspect-video sm:aspect-21/9 max-h-115 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 mb-12 shadow-sm">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            /* Hero placeholder with gallery icon */
            <div className="w-full h-full flex items-center justify-center bg-gray-100/60 dark:bg-gray-900/50 transition-colors">
              <div className="p-6 rounded-3xl bg-gray-200/50 dark:bg-gray-800/50 text-gray-400 dark:text-gray-500 transition-colors">
                <ImageIcon size={48} />
              </div>
            </div>
          )}
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column Key Features & Categorized Tech Stack */}
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

            {/* Lower-Left: Categorized Tech Stack */}
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

          {/* Right Column: Project Info Card */}
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

              {/* SOURCE CODE */}
              <div>
                {project.githubUrl && project.githubUrl !== '#' ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                  >
                    <FaGithub size={18} />
                    <span>Source Code</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500">
                    <FaGithub size={18} />
                    <span>Private Codebase</span>
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
