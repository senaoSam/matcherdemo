'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { SearchFilters } from './SearchFilters';
import { ViewToggle } from './ViewToggle';
import { GridCard } from './grid';
import { ListItem, Detail } from './list';
import { DetailPopup } from './grid';
import { X } from 'lucide-react';

export default function Jobs() {
  const locale = useLocale();
  const t = useTranslations('jobs');

  const [tags, setTags] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [favorites, setFavorites] = useState(new Set());

  const jobs = [
    {
      id: 1,
      title: 'Senior Mathematics Teacher',
      company: 'Taipei International School',
      location: 'Taipei, Taiwan',
      type: 'Full-time',
      subject: 'Mathematics',
      level: 'High School',
      experience: '5+ years',
      salary: 'NT$ 80,000 - 120,000',
      description: 'We are seeking an experienced Mathematics teacher to join our high school department. You will be responsible for teaching advanced mathematics courses and mentoring students.',
      requirements: ['Mathematics Degree', 'Teaching Certificate', 'English Fluency', 'Student Assessment', 'Curriculum Development'],
      benefits: ['Health insurance', 'Professional development', 'Housing allowance', 'Annual bonus'],
      postedDate: '2024-01-15',
      applicationCount: 23,
    },
    {
      id: 2,
      title: 'English Language Instructor',
      company: 'Kaohsiung Language Center',
      location: 'Kaohsiung, Taiwan',
      type: 'Part-time',
      subject: 'English',
      level: 'All Levels',
      experience: '2+ years',
      salary: 'NT$ 600 - 800 per hour',
      description: 'Join our dynamic language center to teach English to students of all ages. Flexible schedule available for qualified candidates.',
      requirements: ['TEFL Certificate', 'Native English Speaker', 'Teaching Experience', 'Communication Skills'],
      benefits: ['Flexible hours', 'Performance bonus', 'Training opportunities'],
      postedDate: '2024-01-14',
      applicationCount: 45,
    },
    {
      id: 3,
      title: 'Science Teacher (Online)',
      company: 'Global Online Academy',
      location: 'Remote',
      type: 'Contract',
      subject: 'Science',
      level: 'Middle School',
      experience: '3+ years',
      salary: 'NT$ 50,000 - 70,000',
      description: 'Exciting opportunity to teach science online to international students. Develop engaging virtual lessons and interactive experiments.',
      requirements: ['Science Degree', 'Online Teaching Experience', 'Digital Tools', 'Student Engagement'],
      benefits: ['Remote work', 'Flexible schedule', 'International exposure', 'Technology allowance'],
      postedDate: '2024-01-13',
      applicationCount: 31,
    },
    {
      id: 4,
      title: 'Elementary School Teacher',
      company: 'Taichung Bilingual School',
      location: 'Taichung, Taiwan',
      type: 'Full-time',
      subject: 'General Education',
      level: 'Elementary',
      experience: '1+ years',
      salary: 'NT$ 60,000 - 80,000',
      description: 'Join our bilingual elementary school to teach young learners. Create engaging lessons and foster a love for learning.',
      requirements: ['Education Degree', 'Teaching License', 'Bilingual Skills', 'Child Development'],
      benefits: ['Health benefits', 'Professional growth', 'School holidays', 'Team support'],
      postedDate: '2024-01-12',
      applicationCount: 67,
    },
    {
      id: 5,
      title: 'Music Teacher (Piano)',
      company: 'Tainan Arts Academy',
      location: 'Tainan, Taiwan',
      type: 'Freelance',
      subject: 'Music',
      level: 'All Levels',
      experience: '2+ years',
      salary: 'NT$ 800 - 1,200 per hour',
      description: 'Share your passion for music by teaching piano to students of all ages. Flexible scheduling and competitive rates.',
      requirements: ['Music Degree', 'Piano Performance', 'Teaching Experience', 'Patience'],
      benefits: ['Flexible schedule', 'Performance opportunities', 'Student recitals'],
      postedDate: '2024-01-11',
      applicationCount: 18,
    },
  ];

  const toggleFavorite = (jobId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(jobId)) {
      newFavorites.delete(jobId);
    } else {
      newFavorites.add(jobId);
    }
    setFavorites(newFavorites);
  };

  const handleViewProfile = (job) => {
    if (viewMode === 'grid') {
      setSelectedJob(job);
      setIsPopupOpen(true);
    } else {
      setSelectedJob(job);
    }
  };

  const filteredJobs = jobs.filter(job => {
    const matchesTags = tags.length === 0 || tags.some(tag =>
      job.title.toLowerCase().includes(tag.toLowerCase()) ||
      job.company.toLowerCase().includes(tag.toLowerCase()) ||
      job.location.toLowerCase().includes(tag.toLowerCase()) ||
      job.requirements.some(req => req.toLowerCase().includes(tag.toLowerCase()))
    );
    const matchesSubject = !selectedSubject || job.subject === selectedSubject;
    const matchesLevel = !selectedLevel || job.level === selectedLevel;
    const matchesType = !selectedType || job.type === selectedType;
    const matchesLocation = !selectedLocation || job.location === selectedLocation;

    return matchesTags && matchesSubject && matchesLevel && matchesType && matchesLocation;
  });

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
          tags={tags}
          setTags={setTags}
          selectedSubject={selectedSubject}
          setSelectedSubject={setSelectedSubject}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />

        <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />

        {tags.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                >
                  {tag}
                  <button
                    onClick={() => setTags(tags.filter(t => t !== tag))}
                    className="ml-1 hover:bg-primary-200 dark:hover:bg-primary-800 rounded-full p-0.5"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredJobs.map((job) => (
              <GridCard
                key={job.id}
                job={job}
                onViewProfile={() => handleViewProfile(job)}
                isFavorite={favorites.has(job.id)}
                onToggleFavorite={() => toggleFavorite(job.id)}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[80vh]">
            <div className="lg:col-span-1 min-w-0">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden h-[80vh]">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t('title')}
                  </h3>
                </div>
                <div className="h-[calc(80vh-60px)] overflow-y-auto overflow-x-hidden">
                  {filteredJobs.map((job) => (
                    <ListItem
                      key={job.id}
                      job={job}
                      isSelected={selectedJob?.id === job.id}
                      onSelect={() => handleViewProfile(job)}
                      isFavorite={favorites.has(job.id)}
                      onToggleFavorite={() => toggleFavorite(job.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-[80vh]">
                <Detail
                  job={selectedJob}
                  isFavorite={selectedJob ? favorites.has(selectedJob.id) : false}
                  onToggleFavorite={() => selectedJob && toggleFavorite(selectedJob.id)}
                />
              </div>
            </div>
          </div>
        )}

        <DetailPopup
          job={selectedJob}
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          isFavorite={selectedJob ? favorites.has(selectedJob.id) : false}
          onToggleFavorite={() => selectedJob && toggleFavorite(selectedJob.id)}
        />
      </div>
    </div>
  );
}
