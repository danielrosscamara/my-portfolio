import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container flex flex-col items-center gap-2 text-center">
        <p className="font-mono-custom text-xs text-gray-500 dark:text-gray-500">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="font-mono-custom text-xs text-gray-400 dark:text-gray-600">
          Built with React + TypeScript + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
