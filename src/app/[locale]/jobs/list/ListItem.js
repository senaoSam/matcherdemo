'use client';

import { Star, MapPin, Clock, DollarSign, Building, BookOpen, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ListItem({
  job,
  isSelected,
  onSelect,
  isFavorite,
  onToggleFavorite,
}) {
  const t = useTranslations('jobs');

  return (
    <div
      className={`p-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer transition-colors ${
        isSelected
          ? 'bg-primary-50 dark:bg-primary-900/20 border-l-4 border-l-primary-500'
          : 'hover:bg-gray-50 dark:hover:bg-gray-700'
      }`}
      onClick={onSelect}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900 rounded-full flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2 break-words">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 truncate">
                {job.company} • {job.subject} • {job.level}
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-2 flex-wrap">
                <span className="flex items-center space-x-1 min-w-0">
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{job.location}</span>
                </span>
                <span className="flex items-center space-x-1 min-w-0">
                  <Clock className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{job.experience}</span>
                </span>
                <span className="flex items-center space-x-1 min-w-0">
                  <DollarSign className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{job.salary}</span>
                </span>
                <span className="flex items-center space-x-1 min-w-0">
                  <Building className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{job.type}</span>
                </span>
              </div>
            </div>

            <button
              onClick={e => {
                e.stopPropagation();
                onToggleFavorite();
              }}
              className="flex-shrink-0 p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full transition-colors"
            >
              <Star
                className={`w-5 h-5 ${
                  isFavorite
                    ? 'text-yellow-500 fill-current'
                    : 'text-gray-400 dark:text-gray-500'
                }`}
              />
            </button>
          </div>

          <div className="flex flex-wrap gap-1 mb-2">
            {job.requirements.slice(0, 3).map((req, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
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
    </div>
  );
}
