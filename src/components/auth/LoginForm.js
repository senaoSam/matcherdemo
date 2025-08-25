'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { TechInput, TechButton, TechInputGroup } from '@/components/ui';
import { authApi } from '../../services/authApi';
import { useAuthStore } from '../../stores/useAuthStore';

export function LoginForm({ onSwitchToSignup, onForgotPassword, onSubmit }) {
  const t = useTranslations('auth');
  const { login } = useAuthStore();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await authApi.login(formData);
      
      console.log('Login API response:', response); // Debug log
      
      // 檢查 API 回應格式
      if (response && response.code === '0' && response.data && response.data.auth) {
        const authData = response.data.auth;
        const userData = {
          email: authData.email,
          region: authData.region,
          role: authData.role,
          roleId: authData.role_id,
          createdAt: authData.created_at,
          currentRegion: authData.current_region,
          online: authData.online
        };
        const token = authData.token;
        
        console.log('Login successful, userData:', userData, 'token:', token);
        
        login(userData, token);
        if (onSubmit) {
          onSubmit(formData);
        }
      } else {
        console.log('Login failed, response:', response);
        setError(response?.msg || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t('login.title')}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          {t('login.subtitle')}
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex gap-3">
          <TechButton
            variant="outline"
            size="lg"
            className="flex-1"
            disabled
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </TechButton>
          <TechButton
            variant="outline"
            size="lg"
            className="flex-1"
            disabled
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </TechButton>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">
              {t('login.or')}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <TechInputGroup>
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
              <Mail className="w-5 h-5 text-gray-400" />
            </div>
            <TechInput
              type="email"
              placeholder={t('login.email')}
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              hasLeftIcon={true}
              required
            />
          </TechInputGroup>

          <TechInputGroup>
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
              <Lock className="w-5 h-5 text-gray-400" />
            </div>
            <TechInput
              type={showPassword ? 'text' : 'password'}
              placeholder={t('login.password')}
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              hasLeftIcon={true}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </TechInputGroup>

          {error && (
            <div className="text-red-500 text-sm text-center bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg">
              {error}
            </div>
          )}

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-sm text-primary-600 hover:text-primary-500 dark:text-primary-400"
            >
              {t('login.forgotPassword')}
            </button>
          </div>

          <TechButton
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={loading}
          >
            {loading ? t('login.loading') : t('login.submit')}
          </TechButton>
        </form>

        <div className="text-center">
          <span className="text-gray-600 dark:text-gray-300">
            {t('login.noAccount')}
          </span>
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="ml-1 text-primary-600 hover:text-primary-500 dark:text-primary-400 font-medium"
          >
            {t('login.signup')}
          </button>
        </div>
      </div>
    </div>
  );
}
