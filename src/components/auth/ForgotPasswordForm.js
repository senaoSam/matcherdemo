'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, ArrowLeft } from 'lucide-react';
import { TechInput, TechButton, TechInputGroup } from '@/components/ui';

export function ForgotPasswordForm({ onBack, onSubmit }) {
  const t = useTranslations('auth');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(email);
      setSubmitted(true);
    } catch (error) {
      console.error('Forgot password error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="space-y-6 text-center">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
          <Mail className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t('forgotPassword.checkEmail')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {t('forgotPassword.checkEmailDesc')}
          </p>
        </div>
        <TechButton
          variant="outline"
          onClick={onBack}
          className="w-full"
        >
          {t('forgotPassword.backToLogin')}
        </TechButton>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t('forgotPassword.title')}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          {t('forgotPassword.subtitle')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <TechInputGroup>
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
            <Mail className="w-5 h-5 text-gray-400" />
          </div>
          <TechInput
            type="email"
            placeholder={t('forgotPassword.email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            hasLeftIcon={true}
            required
          />
        </TechInputGroup>

        <TechButton
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={loading}
        >
          {loading ? t('forgotPassword.loading') : t('forgotPassword.submit')}
        </TechButton>
      </form>

      <div className="text-center">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center text-primary-600 hover:text-primary-500 dark:text-primary-400"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          {t('forgotPassword.backToLogin')}
        </button>
      </div>
    </div>
  );
}
