import {
  Shield,
  Zap,
  Globe,
  MessageSquare,
  Calendar,
  Award,
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Verified Profiles',
    description:
      'All teachers and companies are thoroughly verified to ensure quality and trust.',
  },
  {
    icon: Zap,
    title: 'Quick Matching',
    description:
      'Advanced algorithms help you find the perfect match in minutes, not days.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connect with teachers and companies from around the world.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Communication',
    description:
      'Built-in messaging system for seamless communication between parties.',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description:
      'Easy scheduling and calendar management for all your teaching needs.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Rating and review system to maintain high standards.',
  },
];

export function Features() {
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose TeacherMatcher?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform provides everything you need to connect teachers with
            companies efficiently and effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                  <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
