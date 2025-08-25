'use client';

import { Heart, Eye, MapPin, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ListItem({
  teacher,
  isSelected,
  onSelect,
  isFavorite,
  onToggleFavorite,
}) {
  const t = useTranslations('teachers');

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

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
          <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900 rounded-full flex items-center justify-center overflow-hidden">
            {teacher.avatar ? (
              <img
                src={teacher.avatar}
                alt={teacher.name}
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                {teacher.name.charAt(0)}
              </span>
            )}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {teacher.name}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{teacher.region?.toUpperCase()}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{formatDate(teacher.updatedAt)}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Eye className="w-3 h-3" />
                  <span>{teacher.views} {t('views')}</span>
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
              <Heart
                className={`w-5 h-5 ${
                  isFavorite
                    ? 'text-red-500 fill-current'
                    : 'text-gray-400 dark:text-gray-500'
                }`}
              />
            </button>
          </div>

          {teacher.tags && teacher.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
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

          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {teacher.introduction}
          </p>
        </div>
      </div>
    </div>
  );
}
