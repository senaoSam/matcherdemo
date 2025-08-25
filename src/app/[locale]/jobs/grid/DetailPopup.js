'use client';

import { useEffect, useRef } from 'react';
import { X, Star, MapPin, Clock, DollarSign, Building, Calendar, Users, CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function DetailPopup({ job, isOpen, onClose, isFavorite, onToggleFavorite }) {
  const t = useTranslations('jobs');
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !job) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div ref={popupRef} className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900 rounded-full flex items-center justify-center">
                <Building className="w-12 h-12 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {job.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {job.company} • {job.type}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={onToggleFavorite}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <Star
                  className={`w-6 h-6 ${
                    isFavorite
                      ? 'text-yellow-500 fill-current'
                      : 'text-gray-400 dark:text-gray-500'
                  }`}
                />
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600 dark:text-gray-300">{job.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600 dark:text-gray-300">{job.experience}</span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600 dark:text-gray-300">{job.salary}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600 dark:text-gray-300">{job.postedDate}</span>
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-primary-600" />
              {t('description')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {job.description}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-primary-600" />
              {t('requirements')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {job.requirements.map((req, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                >
                  {req}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-primary-600" />
              {t('benefits')}
            </h3>
            <div className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
            <span className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>{job.applicationCount} {t('applications')}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
