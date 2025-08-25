'use client';

import {
  MapPin,
  Clock,
  Heart,
  Eye,
  Calendar,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Detail({ teacher, isFavorite, onToggleFavorite }) {
  const t = useTranslations('teachers');

  if (!teacher) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
        <div className="text-center">
          <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
          <p className="text-lg">{t('selectTeacher')}</p>
        </div>
      </div>
    );
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900 rounded-full flex items-center justify-center overflow-hidden">
              {teacher.avatar ? (
                <img
                  src={teacher.avatar}
                  alt={teacher.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {teacher.name.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {teacher.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {teacher.region?.toUpperCase()} • {formatDate(teacher.updatedAt)}
              </p>
            </div>
          </div>

          <button
            onClick={onToggleFavorite}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <Heart
              className={`w-6 h-6 ${
                isFavorite
                  ? 'text-red-500 fill-current'
                  : 'text-gray-400 dark:text-gray-500'
              }`}
            />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600 dark:text-gray-300">
              {teacher.region?.toUpperCase()}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600 dark:text-gray-300">
              {formatDate(teacher.updatedAt)}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Eye className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600 dark:text-gray-300">
              {teacher.views} {t('views')}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-primary-600" />
            {t('introduction')}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {teacher.introduction}
          </p>
          {teacher.tags && teacher.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {teacher.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-primary-600" />
            {t('profileInfo')}
          </h3>
          <div className="space-y-3">
            <div className="border-l-4 border-primary-200 dark:border-primary-700 pl-4">
              <h4 className="font-medium text-gray-900 dark:text-white">
                {t('teacherId')}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {teacher.tid}
              </p>
            </div>
            <div className="border-l-4 border-primary-200 dark:border-primary-700 pl-4">
              <h4 className="font-medium text-gray-900 dark:text-white">
                {t('resumeId')}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {teacher.id}
              </p>
            </div>
            <div className="border-l-4 border-primary-200 dark:border-primary-700 pl-4">
              <h4 className="font-medium text-gray-900 dark:text-white">
                {t('lastUpdated')}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {formatDate(teacher.updatedAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
