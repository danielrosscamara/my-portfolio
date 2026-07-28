import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Decorative background blobs — inspired by nevo.dev */}
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl animate-float-rev pointer-events-none" />

      {/* Hero Content */}
      <div className="container relative z-10 text-center animate-fade-in-up">
        {/* Role badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono-custom text-xs text-gray-600 dark:text-gray-400 tracking-widest uppercase">
            {personalInfo.role}
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight tracking-tight">
          Hi, I'm{' '}
          <span className="text-primary">{personalInfo.name}</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-10">
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="hero-view-projects-btn"
            href="#projects"
            className="px-6 py-3 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/20"
          >
            View Projects
          </a>
          <a
            id="hero-contact-btn"
            href="#contact"
            className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
