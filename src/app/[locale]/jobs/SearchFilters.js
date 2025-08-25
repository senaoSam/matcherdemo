'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { TechInput, TechSelect, TechButton, TechInputGroup } from '@/components/ui';

export function SearchFilters({
  tags,
  setTags,
  selectedSubject,
  setSelectedSubject,
  selectedLevel,
  setSelectedLevel,
  selectedType,
  setSelectedType,
  selectedLocation,
  setSelectedLocation,
}) {
  const t = useTranslations('jobs');
  const [tagInput, setTagInput] = useState('');

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  const subjects = [
    { value: '', label: t('allSubjects') },
    { value: 'Mathematics', label: t('math') },
    { value: 'English', label: t('english') },
    { value: 'Science', label: t('science') },
    { value: 'History', label: t('history') },
    { value: 'Music', label: t('music') },
    { value: 'Art', label: t('art') },
    { value: 'Physical Education', label: t('physicalEducation') },
    { value: 'General Education', label: t('generalEducation') },
  ];

  const levels = [
    { value: '', label: t('allLevels') },
    { value: 'Elementary', label: t('elementary') },
    { value: 'Middle School', label: t('middleSchool') },
    { value: 'High School', label: t('highSchool') },
    { value: 'University', label: t('university') },
    { value: 'All Levels', label: t('allLevels') },
  ];

  const jobTypes = [
    { value: '', label: t('allTypes') },
    { value: 'Full-time', label: t('fullTime') },
    { value: 'Part-time', label: t('partTime') },
    { value: 'Contract', label: t('contract') },
    { value: 'Freelance', label: t('freelance') },
    { value: 'Online', label: t('online') },
  ];

  const locations = [
    { value: '', label: t('allLocations') },
    { value: 'Taipei, Taiwan', label: 'Taipei, Taiwan' },
    { value: 'Kaohsiung, Taiwan', label: 'Kaohsiung, Taiwan' },
    { value: 'Taichung, Taiwan', label: 'Taichung, Taiwan' },
    { value: 'Tainan, Taiwan', label: 'Tainan, Taiwan' },
    { value: 'Remote', label: t('remote') },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="relative">
          <TechInputGroup>
            <TechInput
              type="text"
              placeholder={t('searchPlaceholder')}
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 rounded-r-none border-r-0 focus:ring-0 focus:border-r-0"
            />
            <TechButton
              onClick={addTag}
              variant="primary"
              size="md"
              className="rounded-l-none border-l-0 px-4"
            >
              <Plus className="w-5 h-5" />
            </TechButton>
          </TechInputGroup>
        </div>

        <TechSelect
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          {subjects.map((subject) => (
            <option key={subject.value} value={subject.value}>
              {subject.label}
            </option>
          ))}
        </TechSelect>

        <TechSelect
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          {levels.map((level) => (
            <option key={level.value} value={level.value}>
              {level.label}
            </option>
          ))}
        </TechSelect>

        <TechSelect
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          {jobTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </TechSelect>

        <TechSelect
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          {locations.map((location) => (
            <option key={location.value} value={location.value}>
              {location.label}
            </option>
          ))}
        </TechSelect>
      </div>
    </div>
  );
}
