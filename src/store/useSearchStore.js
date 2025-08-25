import { create } from 'zustand';

export const useSearchStore = create((set, get) => ({
  // Search filters
  filters: {
    subject: '',
    location: '',
    experience: '',
    hourlyRate: '',
    availability: '',
    companyType: '',
    companySize: '',
  },

  // Search results
  teachers: [],
  companies: [],
  loading: false,
  error: null,

  // Actions
  updateFilters: newFilters => {
    set(state => ({
      filters: { ...state.filters, ...newFilters },
    }));
  },

  resetFilters: () => {
    set({
      filters: {
        subject: '',
        location: '',
        experience: '',
        hourlyRate: '',
        availability: '',
        companyType: '',
        companySize: '',
      },
    });
  },

  setTeachers: teachers => {
    set({ teachers });
  },

  setCompanies: companies => {
    set({ companies });
  },

  setLoading: loading => {
    set({ loading });
  },

  setError: error => {
    set({ error });
  },

  // Computed values
  getFilteredTeachers: () => {
    const { teachers, filters } = get();
    // This would be implemented with actual filtering logic
    return teachers;
  },

  getFilteredCompanies: () => {
    const { companies, filters } = get();
    // This would be implemented with actual filtering logic
    return companies;
  },
}));
