'use client';

import { Star, MapPin, Clock, DollarSign, Building, Calendar, Users, CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Detail({ job, isFavorite, onToggleFavorite }) {
  const t = useTranslations('jobs');

  if (!job) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <Building className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
          <p className="text-lg font-medium">{t('selectJob')}</p>
          <p className="text-sm">{t('selectJobDescription')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900 rounded-full flex items-center justify-center">
              <Building className="w-10 h-10 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {job.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {job.company}
              </p>
            </div>
          </div>
          
          <button
            onClick={onToggleFavorite}
            className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <Star
              className={`w-6 h-6 ${
                isFavorite
                  ? 'text-yellow-500 fill-current'
                  : 'text-gray-400 dark:text-gray-500'
              }`}
            />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600 dark:text-gray-300">{job.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600 dark:text-gray-300">{job.experience}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <DollarSign className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600 dark:text-gray-300">{job.salary}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Building className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600 dark:text-gray-300">{job.type}</span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-primary-600" />
              {t('description')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {job.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-primary-600" />
              {t('requirements')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {job.requirements.map((req, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                >
                  {req}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-primary-600" />
              {t('benefits')}
            </h3>
            <div className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
            <span className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{t('posted')}: {job.postedDate}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{job.applicationCount} {t('applications')}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
