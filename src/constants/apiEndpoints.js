export const API_ENDPOINTS = {
  // Auth APIs
  'authLoginPost': {
    method: 'post',
    url: '/auth/login',
  },
  'authSignupPost': {
    method: 'post',
    url: '/auth/signup',
  },
  'authSignupConfirmPost': {
    method: 'post',
    url: '/auth/signup/confirm',
  },
  'authLogoutPost': {
    method: 'post',
    url: '/auth/logout',
  },

  // Teachers APIs
  'searchResumesGet': {
    method: 'get',
    url: '/search/resumes',
  },
};
