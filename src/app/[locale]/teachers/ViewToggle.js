'use client';

import { Grid3X3, List } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ViewToggle({ viewMode, setViewMode }) {
  const t = useTranslations('teachers');

  return (
    <div className="flex justify-end mb-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-1">
        <div className="flex">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-md transition-all duration-200 flex items-center space-x-2 ${
              viewMode === 'grid'
                ? 'bg-primary-500 text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <Grid3X3 className="w-4 h-4" />
            <span className="text-sm font-medium">{t('gridView')}</span>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-md transition-all duration-200 flex items-center space-x-2 ${
              viewMode === 'list'
                ? 'bg-primary-500 text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <List className="w-4 h-4" />
            <span className="text-sm font-medium">{t('listView')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
