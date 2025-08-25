import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export function Footer() {
  const locale = useLocale();
  const t = useTranslations('footer');
  
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">TeacherMatcher</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-md">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/teachers`}
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors"
                >
                  {t('quickLinks.findTeachers')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/companies`}
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors"
                >
                  {t('quickLinks.findCompanies')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors"
                >
                  {t('quickLinks.aboutUs')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors"
                >
                  {t('quickLinks.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('support.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/help`}
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors"
                >
                  {t('support.help')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/faq`}
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors"
                >
                  {t('support.faq')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors"
                >
                  {t('support.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 dark:text-gray-400">
                  {t('contact.email')}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 dark:text-gray-400">
                  {t('contact.phone')}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 dark:text-gray-400">
                  {t('contact.address')}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('copyright')}
            </p>
            <div className="flex space-x-6">
              <Link
                href={`/${locale}/privacy`}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('privacy')}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
