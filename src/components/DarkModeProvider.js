'use client';

import { useEffect, useState } from 'react';
import { useDarkModeStore } from '../store/useDarkModeStore';

export function DarkModeProvider({ children }) {
  const { isDark, setDark } = useDarkModeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const saved = localStorage.getItem('dark-mode');

    if (saved !== null) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.state && typeof parsed.state.isDark === 'boolean') {
          setDark(parsed.state.isDark);
        } else if (typeof parsed === 'boolean') {
          setDark(parsed);
        } else {
          setDark(mediaQuery.matches);
        }
      } catch (error) {
        console.error('Error parsing dark mode from localStorage:', error);
        setDark(mediaQuery.matches);
      }
    } else {
      setDark(mediaQuery.matches);
    }

    const handleChange = e => {
      setDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setDark]);

  useEffect(() => {
    if (mounted && typeof document !== 'undefined') {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDark, mounted]);

  return children;
}
