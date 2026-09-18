import { ArrowLeft, ArrowUpRight, Code2 } from 'lucide-react';
import { projects, skills } from '../data/portfolioData';
import type { SkillCategory } from '../types/portfolio';

interface AllProjectsProps {
  onBackToHome: () => void;
  onSelectProject: (projectId: number) => void;
}

// Category color styling matching the Technical Skills section in About.tsx
const categoryColors: Record<SkillCategory, string> = {
  languages:       'border-blue-400/50 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30',
  frontend:        'border-indigo-400/50 text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/30',
  backend:         'border-green-400/50 text-green-600 dark:text-green-400 bg-green-50/50 dark:bg-green-950/30',
  databases:       'border-emerald-400/50 text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/30',
  ai_tools:        'border-purple-400/50 text-purple-600 dark:text-purple-400 bg-purple-50/50 dark:bg-purple-950/30',
  tools_platforms: 'border-orange-400/50 text-orange-600 dark:text-orange-400 bg-orange-50/50 dark:bg-orange-950/30',
  hardware_iot:    'border-teal-400/50 text-teal-600 dark:text-teal-400 bg-teal-50/50 dark:bg-teal-950/30',
};

// Skill lookup map to dynamically resolve the category of any tech tag
const skillCategoryMap = new Map<string, SkillCategory>(
  skills.map((s) => [s.name.toLowerCase(), s.category])
);

function getTechCategory(techName: string): SkillCategory {
  const normalized = techName.toLowerCase();
  return skillCategoryMap.get(normalized) || 'frontend';
}

export default function AllProjects({ onBackToHome, onSelectProject }: AllProjectsProps) {
  return (
    <div className="min-h-screen pt-24 pb-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container">
        {/* Top Navigation Bar: Back to Home */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 font-mono-custom text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
        </div>

        {/* Section Header with Accent Underline */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white uppercase inline-block relative">
            All Projects
            <span className="block h-1 w-20 bg-primary mx-auto mt-3 rounded-full" />
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
            A comprehensive list of my work, including web applications, enterprise tools, and engineering experiments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Uniform Media / Mockup Container */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 flex flex-col">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  /* Standardized browser mockup container for uniform layout */
                  <div className="w-full h-full flex flex-col justify-between p-4 bg-linear-to-br from-gray-100/80 via-white to-gray-50 dark:from-gray-900/80 dark:via-gray-950 dark:to-gray-900">
                    {/* Mockup Header Dots */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                      </div>
                      <span className="font-mono-custom text-[10px] text-gray-400 uppercase tracking-widest">
                        {project.subtitle ? project.subtitle.split(' ')[0] : 'Project'}
                      </span>
                    </div>

                    {/* Central Watermark & Monogram */}
                    <div className="flex flex-col items-center justify-center text-center gap-2 my-auto py-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary dark:bg-primary/15">
                        <Code2 size={28} />
                      </div>
                      <span className="font-heading font-bold text-base text-gray-900 dark:text-white line-clamp-1 px-4">
                        {project.title}
                      </span>
                    </div>

                    {/* Bottom Indicator Bar */}
                    <div className="flex items-center justify-between text-[11px] font-mono-custom text-gray-500 dark:text-gray-500 pt-2 border-t border-gray-200/50 dark:border-gray-800/60">
                      <span>Status: Production</span>
                      <span className="text-primary font-semibold">Ready</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Title & Subtitle */}
              <div className="mt-5 mb-3">
                <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="font-mono-custom text-xs text-primary mt-1">
                    {project.subtitle}
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5 grow">
                {project.description}
              </p>

              {/* Categorized Tech Stack Tags using Technical Skills pill styling */}
              <div className="mb-6">
                <span className="block font-mono-custom text-[11px] text-gray-500 uppercase tracking-wider mb-2">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => {
                    const category = getTechCategory(tech);
                    const colorClass = categoryColors[category];
                    return (
                      <span
                        key={tech}
                        className={`font-mono-custom text-xs px-2.5 py-1 rounded-lg border ${colorClass} transition-all duration-200`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Action Button: View Details */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800/60 mt-auto">
                <button
                  onClick={() => onSelectProject(project.id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary/40 text-primary hover:bg-primary hover:text-white dark:border-primary/50 dark:text-primary dark:hover:bg-primary dark:hover:text-white font-mono-custom text-xs font-semibold transition-all duration-200 cursor-pointer shadow-sm"
                >
                  View Details
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
