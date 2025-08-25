import { UserPlus, Search, MessageCircle, Users } from 'lucide-react';
import { TechButton } from './ui';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const steps = [
  {
    icon: UserPlus,
    titleKey: 'step1.title',
    descriptionKey: 'step1.description',
    color:
      'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400',
  },
  {
    icon: Search,
    titleKey: 'step2.title',
    descriptionKey: 'step2.description',
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400',
  },
  {
    icon: MessageCircle,
    titleKey: 'step3.title',
    descriptionKey: 'step3.description',
    color: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400',
  },
  {
    icon: Users,
    titleKey: 'step4.title',
    descriptionKey: 'step4.description',
    color:
      'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400',
  },
];

export function HowItWorks() {
  const locale = useLocale();
  const t = useTranslations('howItWorks');

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div
                  className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <step.icon className="w-8 h-8" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 dark:bg-gray-600 transform translate-x-4 z-0"></div>
                )}
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {t(step.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t(step.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('readyToStart.title')}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {t('readyToStart.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/auth/register/teacher`}>
              <TechButton
                variant="primary"
                size="lg"
                className="px-8 py-4"
              >
                {t('readyToStart.joinAsTeacher')}
              </TechButton>
            </Link>
            <Link href={`/${locale}/auth/register/company`}>
              <TechButton
                variant="secondary"
                size="lg"
                className="px-8 py-4"
              >
                {t('readyToStart.joinAsCompany')}
              </TechButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
