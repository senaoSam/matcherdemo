import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import httpClient from '../lib/httpClient';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      user: null,
      token: null,

      login: (userData, token) => {
        httpClient.setAuthToken(token);
        set({
          isAuthenticated: true,
          user: userData,
          token,
        });
      },

      logout: () => {
        httpClient.setAuthToken(null);
        set({
          isAuthenticated: false,
          user: null,
          token: null,
        });
      },

      updateUser: (userData) => set({
        user: { ...get().user, ...userData },
      }),

      init: () => {
        const state = get();
        if (state.token) {
          httpClient.setAuthToken(state.token);
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        token: state.token,
      }),
    }
  )
);
