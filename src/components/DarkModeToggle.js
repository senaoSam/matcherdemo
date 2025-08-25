'use client';

import { Moon, Sun } from 'lucide-react';
import { useDarkModeStore } from '../store/useDarkModeStore';

export function DarkModeToggle() {
  const { isDark, toggle } = useDarkModeStore();

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-md text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
      aria-label={isDark ? '切換到淺色模式' : '切換到深色模式'}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
