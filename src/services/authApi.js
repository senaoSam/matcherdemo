import { apiCaller } from '../lib/apiCaller';

export const authApi = {
  login: async (credentials) => {
    const payload = {
      email: credentials.email,
      meta: JSON.stringify({ pass: credentials.password }),
      prefetch: 3,
      pubkey: 'the-pubkey',
    };

    return apiCaller.call('authLoginPost', payload);
  },

  signup: async (userData) => {
    const payload = {
      email: userData.email,
      meta: JSON.stringify({ pass: userData.password, name: userData.name }),
      prefetch: 3,
      pubkey: 'the-pubkey',
    };

    return apiCaller.call('authSignupPost', payload);
  },

  confirmSignup: async (email, code) => {
    const payload = {
      email,
      code,
      prefetch: 3,
      pubkey: 'the-pubkey',
    };

    return apiCaller.call('authSignupConfirmPost', payload);
  },

  logout: async () => {
    return apiCaller.call('authLogoutPost');
  },
};
