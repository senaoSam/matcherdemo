import { create } from 'zustand';

export const useTeachersStore = create((set) => ({
  viewMode: 'grid',
  selectedTeacher: null,
  patterns: [],

  setViewMode: (mode) => set({ viewMode: mode }),
  setSelectedTeacher: (teacher) => set({ selectedTeacher: teacher }),
  setPatterns: (patterns) => set({ patterns }),

  clearSelectedTeacher: () => set({ selectedTeacher: null }),
  clearPatterns: () => set({ patterns: [] }),
}));
