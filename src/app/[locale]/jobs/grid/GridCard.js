'use client';

import { Star, MapPin, Clock, Building, DollarSign, BookOpen, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function GridCard({
  job,
  onViewProfile,
  isFavorite,
  onToggleFavorite,
}) {
  const t = useTranslations('jobs');

  const handleCardClick = (e) => {
    if (e.target.closest('button')) {
      return;
    }
    onViewProfile();
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-700 ease-in-out hover:shadow-2xl hover:shadow-primary-100 dark:hover:shadow-primary-900/20 hover:scale-110 hover:border-primary-300 dark:hover:border-primary-600 cursor-pointer group hover:rounded-bl-2xl hover:rounded-br-2xl hover:-translate-y-2 hover:rotate-1 transform-gpu"
      onClick={handleCardClick}
    >
      <div className="relative">
        <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900 flex items-center justify-center transition-all duration-500 group-hover:from-primary-200 group-hover:to-blue-200 dark:group-hover:from-primary-800 dark:group-hover:to-blue-800 group-hover:rounded-bl-3xl group-hover:rounded-br-3xl">
          <div className="flex flex-col items-center justify-center text-center">
            <BookOpen className="w-16 h-16 text-primary-600 dark:text-primary-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 mb-2" />
            <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
              {job.subject}
            </p>
            <p className="text-xs text-primary-500 dark:text-primary-300 mt-1">
              {job.level}
            </p>
          </div>
        </div>
        <button
          onClick={onToggleFavorite}
          className="absolute top-3 right-3 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md transition-all duration-700 ease-in-out hover:scale-150 hover:shadow-2xl group-hover:bg-primary-50 dark:group-hover:bg-primary-900/50 group-hover:scale-125 hover:-translate-y-1 hover:rotate-12 transform-gpu"
        >
          <Star
            className={`w-5 h-5 transition-all duration-700 ease-in-out ${
              isFavorite
                ? 'text-yellow-500 fill-current group-hover:scale-150 group-hover:rotate-360'
                : 'text-gray-400 dark:text-gray-500 group-hover:text-primary-500 group-hover:scale-150'
            }`}
          />
        </button>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 line-clamp-2">
          {job.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 font-medium">
          {job.company}
        </p>

        <div className="space-y-3 mb-6 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-2 transition-all duration-300 group-hover:translate-x-1">
            <MapPin className="w-4 h-4 transition-colors duration-300 group-hover:text-primary-500" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center space-x-2 transition-all duration-300 group-hover:translate-x-1" style={{ transitionDelay: '100ms' }}>
            <Clock className="w-4 h-4 transition-colors duration-300 group-hover:text-primary-500" />
            <span>{job.experience}</span>
          </div>
          <div className="flex items-center space-x-2 transition-all duration-300 group-hover:translate-x-1" style={{ transitionDelay: '200ms' }}>
            <DollarSign className="w-4 h-4 transition-colors duration-300 group-hover:text-primary-500" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center space-x-2 transition-all duration-300 group-hover:translate-x-1" style={{ transitionDelay: '300ms' }}>
            <Building className="w-4 h-4 transition-colors duration-300 group-hover:text-primary-500" />
            <span>{job.type}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.requirements.slice(0, 3).map((req, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full transition-all duration-300 group-hover:bg-primary-100 dark:group-hover:bg-primary-900 group-hover:text-primary-700 dark:group-hover:text-primary-300"
            >
              {req}
            </span>
          ))}
          {job.requirements.length > 3 && (
            <span className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full">
              +{job.requirements.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>{t('posted')}: {job.postedDate}</span>
          <span className="flex items-center space-x-1">
            <Users className="w-3 h-3" />
            <span>{job.applicationCount} {t('applications')}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
