import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      userType: null, // 'teacher' or 'company'
      token: null,

      // Actions
      login: (userData, token) => {
        set({
          user: userData,
          isAuthenticated: true,
          userType: userData.type,
          token,
        });
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          userType: null,
          token: null,
        });
      },

      updateProfile: profileData => {
        const currentUser = get().user;
        if (currentUser) {
          set({
            user: { ...currentUser, ...profileData },
          });
        }
      },

      setUserType: type => {
        set({ userType: type });
      },
    }),
    {
      name: 'auth-storage',
      partialize: state => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        userType: state.userType,
        token: state.token,
      }),
    }
  )
);
