import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/30 dark:border-gray-800/50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16">
        {/* Brand Logo */}
        <a href="#" className="font-heading text-xl font-bold text-gray-900 dark:text-white tracking-tight">
          {personalInfo.name.split(' ')[0]}
          <span className="text-primary">.</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-mono-custom text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Theme Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            id="mobile-menu-btn"
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-mono-custom text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
