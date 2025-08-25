import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Search, Users, Building2, Star } from 'lucide-react';
import { TechInput, TechButton, TechInputGroup } from './ui';

export function Hero() {
  const locale = useLocale();
  const t = useTranslations('hero');
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {t('subtitle')}
          </p>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <TechInputGroup className="shadow-2xl shadow-cyan-500/20">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5 z-10" />
                <TechInput
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  className="pl-12 pr-32 text-lg rounded-r-none border-r-0 focus:ring-0 focus:border-r-0"
                />
                <TechButton
                  variant="primary"
                  size="lg"
                  className="rounded-l-none border-l-0 px-6"
                >
                  {t('searchButton')}
                </TechButton>
              </TechInputGroup>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/auth/register/teacher`}>
              <TechButton
                variant="primary"
                size="lg"
                className="px-8 py-4 flex items-center justify-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>{t('joinAsTeacher')}</span>
              </TechButton>
            </Link>
            <Link href={`/${locale}/auth/register/company`}>
              <TechButton
                variant="secondary"
                size="lg"
                className="px-8 py-4 flex items-center justify-center space-x-2"
              >
                <Building2 className="w-5 h-5" />
                <span>{t('joinAsCompany')}</span>
              </TechButton>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              10,000+
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('qualifiedTeachers')}
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              500+
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('partnerCompanies')}
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              98%
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('successRate')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
