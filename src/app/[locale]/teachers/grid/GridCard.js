'use client';

import { Star, MapPin, Clock, BookOpen, Heart, Eye } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function GridCard({
  teacher,
  onViewProfile,
  isFavorite,
  onToggleFavorite,
}) {
  const t = useTranslations('teachers');

  const handleCardClick = (e) => {
    if (e.target.closest('button')) {
      return;
    }
    onViewProfile();
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-700 ease-in-out hover:shadow-2xl hover:shadow-primary-100 dark:hover:shadow-primary-900/20 hover:scale-110 hover:border-primary-300 dark:hover:border-primary-600 cursor-pointer group hover:rounded-bl-2xl hover:rounded-br-2xl hover:-translate-y-2 hover:rotate-1 transform-gpu perspective-1000"
      onClick={handleCardClick}
    >
      <div className="relative">
        <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900 flex items-center justify-center transition-all duration-500 group-hover:from-primary-200 group-hover:to-blue-200 dark:group-hover:from-primary-800 dark:group-hover:to-blue-800 group-hover:rounded-bl-3xl group-hover:rounded-br-3xl overflow-hidden">
          {teacher.avatar ? (
            <img
              src={teacher.avatar}
              alt={teacher.name}
              className="w-full h-full object-contain transition-all duration-300 group-hover:scale-125 group-hover:rotate-6"
            />
          ) : (
            <span className="text-6xl font-bold text-primary-600 dark:text-primary-400 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6">
              {teacher.name.charAt(0)}
            </span>
          )}
        </div>
        <button
          onClick={onToggleFavorite}
          className="absolute top-3 right-3 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md transition-all duration-700 ease-in-out hover:scale-150 hover:shadow-2xl group-hover:bg-primary-50 dark:group-hover:bg-primary-900/50 group-hover:scale-125 hover:-translate-y-1 hover:rotate-12 transform-gpu"
        >
          <Heart
            className={`w-5 h-5 transition-all duration-700 ease-in-out ${
              isFavorite
                ? 'text-red-500 fill-current group-hover:scale-150 group-hover:rotate-360'
                : 'text-gray-400 dark:text-gray-500 group-hover:text-primary-500 group-hover:scale-150'
            }`}
          />
        </button>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
          {teacher.name}
        </h3>

        <div className="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-2 transition-all duration-300 group-hover:translate-x-1">
            <MapPin className="w-4 h-4 transition-colors duration-300 group-hover:text-primary-500" />
            <span>{teacher.region?.toUpperCase()}</span>
          </div>
          <div className="flex items-center space-x-2 transition-all duration-300 group-hover:translate-x-1" style={{ transitionDelay: '100ms' }}>
            <Clock className="w-4 h-4 transition-colors duration-300 group-hover:text-primary-500" />
            <span>
              {formatDate(teacher.updatedAt)}
            </span>
          </div>
          <div className="flex items-center space-x-2 transition-all duration-300 group-hover:translate-x-1" style={{ transitionDelay: '200ms' }}>
            <Eye className="w-4 h-4 transition-colors duration-300 group-hover:text-primary-500" />
            <span>
              {teacher.views} {t('views')}
            </span>
          </div>
        </div>

        {teacher.tags && teacher.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {teacher.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm line-clamp-3">
          {teacher.introduction}
        </p>
      </div>
    </div>
  );
}
