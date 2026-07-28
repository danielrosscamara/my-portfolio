import { useState, useEffect } from 'react';
import type { Theme } from '../types/portfolio';

export function useTheme() {
  // 1. useState holds the current theme ('light' or 'dark').
  // Checks localStorage on first load, defaulting to 'light'.
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'light';
  });

  // 2. useEffect applies/removes the '.dark' class on <html> and saves preference.
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 3. Helper function to toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}
