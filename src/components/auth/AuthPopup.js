'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
import { ForgotPasswordForm } from './ForgotPasswordForm';

export function AuthPopup({ isOpen, onClose }) {
  const [currentView, setCurrentView] = useState('login');

  const handleClose = () => {
    setCurrentView('login');
    onClose();
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'login':
        return (
                      <LoginForm
              onSwitchToSignup={() => setCurrentView('signup')}
              onForgotPassword={() => setCurrentView('forgotPassword')}
              onSubmit={async (data) => {
                console.log('Login successful:', data);
                onClose();
              }}
            />
        );
      case 'signup':
        return (
          <SignupForm
            onSwitchToLogin={() => setCurrentView('login')}
            onSubmit={async (data) => {
              console.log('Signup data:', data);
              // TODO: 實作註冊 API
            }}
          />
        );
      case 'forgotPassword':
        return (
          <ForgotPasswordForm
            onBack={() => setCurrentView('login')}
            onSubmit={async (email) => {
              console.log('Forgot password email:', email);
              // TODO: 實作忘記密碼 API
            }}
          />
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="w-8"></div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              TeacherMatcher
            </h1>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {renderCurrentView()}
        </div>
      </div>
    </div>
  );
}
