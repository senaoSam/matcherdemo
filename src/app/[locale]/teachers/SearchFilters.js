'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { TechInput, TechButton, TechInputGroup } from '@/components/ui';

export function SearchFilters({
  patterns,
  onSearch,
  onClear,
}) {
  const t = useTranslations('teachers');
  const [patternInput, setPatternInput] = useState('');

  const handleSearch = () => {
    if (patternInput.trim()) {
      onSearch([patternInput.trim()]);
    }
  };

  const handleClear = () => {
    setPatternInput('');
    onClear();
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
      <div className="flex justify-center">
        <div className="relative w-full max-w-md">
          <div className="flex">
            <TechInputGroup className="flex-1">
              <TechInput
                type="text"
                placeholder={t('searchPlaceholder')}
                value={patternInput}
                onChange={e => setPatternInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 rounded-r-none border-r-0 focus:ring-0 focus:border-r-0"
              />
              <TechButton
                onClick={handleSearch}
                variant="primary"
                size="md"
                className="rounded-l-none border-l-0 px-4"
              >
                <Search className="w-5 h-5" />
              </TechButton>
            </TechInputGroup>
            {patterns.length > 0 && (
              <TechButton
                onClick={handleClear}
                variant="outline"
                size="md"
                className="rounded-l-none border-l-0 px-3"
              >
                <X className="w-4 h-4" />
              </TechButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
