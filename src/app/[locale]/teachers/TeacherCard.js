'use client';

import { Star, MapPin, Clock, BookOpen } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export function TeacherCard({ teacher, onClick }) {
  const locale = useLocale();
  const t = useTranslations('teachers');

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-primary-100 dark:hover:shadow-primary-900/20 hover:scale-105 hover:border-primary-300 dark:hover:border-primary-600 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rounded-full">
          <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            {teacher.name.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
            {teacher.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {teacher.subject} • {teacher.level}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 transition-all duration-300 ${
              i < teacher.rating
                ? 'text-yellow-400 fill-current group-hover:scale-110 group-hover:rotate-12'
                : 'text-gray-300 dark:text-gray-600'
            }`}
            style={{ transitionDelay: `${i * 50}ms` }}
          />
        ))}
        <span className="text-gray-600 dark:text-gray-400 ml-1">
          ({teacher.rating.toFixed(1)})
        </span>
      </div>

      <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center space-x-2 transition-all duration-300 group-hover:translate-x-1">
          <MapPin className="w-4 h-4 transition-colors duration-300 group-hover:text-primary-500" />
          <span>{teacher.location}</span>
        </div>
        <div className="flex items-center space-x-2 transition-all duration-300 group-hover:translate-x-1" style={{ transitionDelay: '100ms' }}>
          <Clock className="w-4 h-4 transition-colors duration-300 group-hover:text-primary-500" />
          <span>
            {teacher.experience} {t('yearsExperience')}
          </span>
        </div>
        <div className="flex items-center space-x-2 transition-all duration-300 group-hover:translate-x-1" style={{ transitionDelay: '200ms' }}>
          <BookOpen className="w-4 h-4 transition-colors duration-300 group-hover:text-primary-500" />
          <span>
            {teacher.students} {t('students')}
          </span>
        </div>
      </div>
    </div>
  );
}
