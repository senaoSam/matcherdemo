'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { SearchFilters } from './SearchFilters';
import { ViewToggle } from './ViewToggle';
import { GridCard } from './grid';
import { ListItem, Detail } from './list';
import { DetailPopup } from './grid';
import { AlertCircle } from 'lucide-react';
import { useTeachersStore } from '../../../stores/useTeachersStore';
import { useTeachers } from '../../../hooks/useTeachers';

export default function Teachers() {
  const t = useTranslations('teachers');

  const { viewMode, setViewMode, selectedTeacher, setSelectedTeacher, patterns } = useTeachersStore();
  const { teachers, loading, error, hasMore, searchTeachers, clearSearch, fetchNextPage, isFetchingNextPage } = useTeachers(patterns);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [favorites, setFavorites] = useState(new Set());

  const handleSeeMore = () => {
    if (hasMore) {
      fetchNextPage();
    }
  };

  const toggleFavorite = teacherId => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(teacherId)) {
      newFavorites.delete(teacherId);
    } else {
      newFavorites.add(teacherId);
    }
    setFavorites(newFavorites);
  };

  const handleViewProfile = teacher => {
    if (viewMode === 'grid') {
      setSelectedTeacher(teacher);
      setIsPopupOpen(true);
    } else {
      setSelectedTeacher(teacher);
    }
  };

  const filteredTeachers = teachers;

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Error</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('subtitle')}
          </p>
        </div>

        <SearchFilters
          patterns={patterns}
          onSearch={searchTeachers}
          onClear={clearSearch}
        />

        <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />

        {loading && teachers.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <>
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTeachers.map(teacher => (
                  <GridCard
                    key={teacher.id}
                    teacher={teacher}
                    onViewProfile={() => handleViewProfile(teacher)}
                    isFavorite={teacher.followed}
                    onToggleFavorite={() => toggleFavorite(teacher.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[80vh]">
                <div className="lg:col-span-1">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden h-[80vh]">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {t('title')}
                      </h3>
                    </div>
                    <div className="h-[calc(80vh-60px)] overflow-y-auto">
                      {filteredTeachers.map(teacher => (
                        <ListItem
                          key={teacher.id}
                          teacher={teacher}
                          isSelected={selectedTeacher?.id === teacher.id}
                          onSelect={() => handleViewProfile(teacher)}
                          isFavorite={teacher.followed}
                          onToggleFavorite={() => toggleFavorite(teacher.id)}
                        />
                      ))}
                      {hasMore && (
                        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                          <button
                            onClick={handleSeeMore}
                            disabled={isFetchingNextPage}
                            className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          >
                            {isFetchingNextPage ? (
                              <div className="flex items-center justify-center gap-2">
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                Loading...
                              </div>
                            ) : (
                              'See More'
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-[80vh]">
                    <Detail
                      teacher={selectedTeacher}
                      isFavorite={
                        selectedTeacher ? selectedTeacher.followed : false
                      }
                      onToggleFavorite={() =>
                        selectedTeacher && toggleFavorite(selectedTeacher.id)
                      }
                    />
                  </div>
                </div>
              </div>
            )}

            {viewMode === 'grid' && hasMore && (
              <div className="text-center mt-8">
                <button
                  onClick={handleSeeMore}
                  disabled={isFetchingNextPage}
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isFetchingNextPage ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Loading...
                    </div>
                  ) : (
                    'See More'
                  )}
                </button>
              </div>
            )}
          </>
        )}

        <DetailPopup
          teacher={selectedTeacher}
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          isFavorite={
            selectedTeacher ? selectedTeacher.followed : false
          }
          onToggleFavorite={() =>
            selectedTeacher && toggleFavorite(selectedTeacher.id)
          }
        />
      </div>
    </div>
  );
}
