import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

interface ProjectsProps {
  onViewAllProjects?: () => void;
  onSelectProject?: (projectId: number) => void;
}

export default function Projects({ onViewAllProjects, onSelectProject }: ProjectsProps) {
  const pinnedProjects = projects.filter((p) => p.pinned);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        {/* Section Heading & View All Projects Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="font-mono-custom text-sm text-primary tracking-widest uppercase">02. Projects</span>
            <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mt-2">
              Things I've built
            </h2>
          </div>

          <button
            id="view-all-projects-btn"
            onClick={onViewAllProjects}
            className="inline-flex items-center gap-1.5 font-mono-custom text-sm font-semibold text-primary hover:underline transition-colors cursor-pointer w-fit"
          >
            View all projects
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pinnedProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>

              {/* Subtitle / Type (if available) */}
              {project.subtitle && (
                <p className="font-mono-custom text-xs text-primary mb-3">
                  {project.subtitle}
                </p>
              )}

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 grow">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono-custom text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Card Footer: Source / Demo Links on Left, View Details on Right */}
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100 dark:border-gray-800/60">
                <div className="flex items-center gap-4">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <FaGithub size={16} />
                      Source
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>

                {/* View Details CTA */}
                <button
                  onClick={() => onSelectProject?.(project.id)}
                  className="inline-flex items-center gap-1 font-mono-custom text-sm font-semibold text-primary hover:underline transition-colors cursor-pointer"
                >
                  View details
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
