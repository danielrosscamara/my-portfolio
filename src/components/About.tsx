import { Download } from 'lucide-react';
import { personalInfo, skills } from '../data/portfolioData';

const categoryColors: Record<string, string> = {
  frontend: 'border-blue-400/50 text-blue-600 dark:text-blue-400',
  backend:  'border-green-400/50 text-green-600 dark:text-green-400',
  tools:    'border-purple-400/50 text-purple-600 dark:text-purple-400',
  other:    'border-gray-400/50 text-gray-600 dark:text-gray-400',
};

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container">
        {/* Section Heading */}
        <div className="mb-12">
          <span className="font-mono-custom text-sm text-primary tracking-widest uppercase">01. About Me</span>
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mt-2">
            A bit about me
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Bio + Resume Button */}
          <div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base mb-8 whitespace-pre-line">
              {personalInfo.bio}
            </p>
            <a
              id="download-resume-btn"
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-colors duration-200"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Right Column: Skills Badges */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`font-mono-custom text-xs px-3 py-1.5 rounded-full border bg-gray-50 dark:bg-gray-900 ${categoryColors[skill.category]} transition-all duration-200 hover:scale-105`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
