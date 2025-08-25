import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// localStorage.removeItem('dark-mode');

export const useDarkModeStore = create(
  persist(
    (set) => ({
      isDark: true,
      toggle: () => set(state => ({ isDark: !state.isDark })),
      setDark: isDark => set({ isDark }),
      clearStorage: () => {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('dark-mode');
        }
      },
    }),
    {
      name: 'dark-mode',
      version: 1,
      migrate: (persistedState, version) => {
        if (version === 0) {
          return { isDark: true };
        }
        return persistedState;
      },
    }
  )
);
