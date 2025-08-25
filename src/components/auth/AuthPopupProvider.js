'use client';

import { createContext, useContext, useState } from 'react';
import { AuthPopup } from './AuthPopup';

const AuthPopupContext = createContext();

export function useAuthPopup() {
  const context = useContext(AuthPopupContext);
  if (!context) {
    throw new Error('useAuthPopup must be used within AuthPopupProvider');
  }
  return context;
}

export function AuthPopupProvider({ children }) {
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);

  const openAuthPopup = () => setIsAuthPopupOpen(true);
  const closeAuthPopup = () => setIsAuthPopupOpen(false);

  return (
    <AuthPopupContext.Provider value={{ openAuthPopup, closeAuthPopup }}>
      {children}
      <AuthPopup
        isOpen={isAuthPopupOpen}
        onClose={closeAuthPopup}
      />
    </AuthPopupContext.Provider>
  );
}
