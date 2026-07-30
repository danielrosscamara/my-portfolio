import { Download, Briefcase } from 'lucide-react';
import { personalInfo, skills, experiences } from '../data/portfolioData';
import type { SkillCategory } from '../types/portfolio';

const categoryLabels: Record<SkillCategory, string> = {
  languages:       'Languages',
  frontend:        'Frontend',
  backend:         'Backend & APIs',
  databases:       'Databases & ORM',
  ai_tools:        'AI-Augmented Development',
  tools_platforms: 'Tools and Platforms',
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

export default function About() {
  // Group skills by category
  const categories = Array.from(new Set(skills.map((s) => s.category))) as SkillCategory[];

  return (
    <section id="about" className="py-24">
      <div className="container">
        {/* Section Heading */}
        <div className="mb-12">
          <span className="font-mono-custom text-sm text-primary tracking-widest uppercase">01. About Me</span>
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Background & Skills
          </h2>
        </div>

        {/* Bio & Resume Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-16">
          <div className="md:col-span-2">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base mb-6 whitespace-pre-line">
              {personalInfo.bio}
            </p>
          </div>
          <div className="flex md:justify-end">
            <a
              id="download-resume-btn"
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors duration-200 shadow-md shadow-primary/20"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Professional Experience Section */}
        {experiences.length > 0 && (
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Briefcase size={22} className="text-primary" />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                      {exp.role} <span className="text-primary">@ {exp.company}</span>
                    </h4>
                    <span className="font-mono-custom text-xs text-gray-500 dark:text-gray-400 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-900 w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-primary mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categorized Skills Section */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => {
              const catSkills = skills.filter((s) => s.category === cat);
              return (
                <div
                  key={cat}
                  className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/40"
                >
                  <h4 className="font-heading text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-wider uppercase mb-3">
                    {categoryLabels[cat]}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {catSkills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`font-mono-custom text-xs px-3 py-1.5 rounded-lg border ${categoryColors[skill.category]} transition-all duration-200 hover:scale-105`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
