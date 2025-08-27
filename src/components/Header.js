'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Bell, Globe, User } from 'lucide-react';
import { DarkModeToggle } from './DarkModeToggle';
import { useDarkModeStore } from '../store/useDarkModeStore';
import { useAuthStore } from '../stores/useAuthStore';
import { useAuthPopup } from './auth/AuthPopupProvider';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const router = useRouter();
  const { isDark } = useDarkModeStore();
  const { isAuthenticated, user, logout, init } = useAuthStore();
  const { openAuthPopup } = useAuthPopup();

  const testMes = 'push test'
  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (isLangMenuOpen && !event.target.closest('.language-menu')) {
        setIsLangMenuOpen(false);
      }
      if (isUserMenuOpen && !event.target.closest('.user-menu')) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangMenuOpen, isUserMenuOpen]);

  const switchLocale = newLocale => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    setIsLangMenuOpen(false);
  };

  return (
    <header className="relative bg-gradient-to-r from-slate-900/80 via-blue-900/60 to-purple-900/80 backdrop-blur-xl border-b border-transparent sticky top-0 z-50">
      <div className="absolute inset-0 overflow-hidden">
        {/* 動態背景網格 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(59,130,246,0.1)_50%)] bg-[length:20px_20px] animate-grid-flow"></div>
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_50%,rgba(147,51,234,0.1)_50%)] bg-[length:20px_20px] animate-grid-flow-reverse"></div>
        </div>

        {/* 流動漸變背景 */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-gradient-flow"></div>

        {/* 粒子效果 */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-particle-float"
              style={{
                left: `${(i * 5.5) % 100}%`,
                top: `${(i * 4.7) % 100}%`,
                animationDelay: `${(i * 0.15) % 3}s`,
                animationDuration: `${3 + (i * 0.1) % 2}s`,
              }}
            />
          ))}
        </div>

        {/* 底部流動邊框 */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-border-flow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          <Link href={`/${locale}`} className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:rotate-3 transform-gpu">
                <span className="text-white font-bold text-xl drop-shadow-lg">T</span>
              </div>
              <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur-xl opacity-50 group-hover:opacity-80 transition-all duration-1000 ease-in-out animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold text-white drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-1000 ease-in-out group-hover:scale-105">
              Matcher
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center h-16 overflow-hidden1">
              <Link
                href={`/${locale}/jobs`}
                className={`relative transition-all duration-1000 ease-in-out font-medium group h-20 flex items-center px-3 ${
                  pathname.includes('/jobs')
                    ? 'text-cyan-400 -rotate-[10deg] text-2xl'
                    : 'text-gray-300 hover:text-cyan-400 hover:rotate-[10deg] hover:animate-pulse text-sm'
                }`}
              >
                <span className="relative z-10 group-hover:animate-bounce">
                  {t('jobs')}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-1000 ease-in-out ${
                    pathname.includes('/jobs')
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100 origin-left'
                  }`} style={{ bottom: '-2px' }}></div>
                </span>
              </Link>
              <Link
                href={`/${locale}/teachers`}
                className={`relative transition-all duration-1000 ease-in-out font-medium group h-20 flex items-center px-3 ${
                  pathname.includes('/teachers')
                    ? 'text-cyan-400 -rotate-[10deg] text-2xl'
                    : 'text-gray-300 hover:text-cyan-400 hover:rotate-[10deg] hover:animate-pulse text-sm'
                }`}
              >
                <span className="relative z-10 group-hover:animate-bounce">
                  {t('teachers')}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-1000 ease-in-out ${
                    pathname.includes('/teachers')
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100 origin-left'
                  }`} style={{ bottom: '-2px' }}></div>
                </span>
              </Link>
              <Link
                href={`/${locale}/about`}
                className={`relative transition-all duration-1000 ease-in-out font-medium group h-20 flex items-center px-3 ${
                  pathname.includes('/about')
                    ? 'text-cyan-400 -rotate-[10deg] text-2xl'
                    : 'text-gray-300 hover:text-cyan-400 hover:rotate-[10deg] hover:animate-pulse text-sm'
                }`}
              >
                <span className="relative z-10 group-hover:animate-bounce">
                  {t('about')}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-1000 ease-in-out ${
                    pathname.includes('/about')
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100 origin-left'
                  }`} style={{ bottom: '-2px' }}></div>
                </span>
              </Link>
              <Link
                href={`/${locale}/post-job`}
                className={`relative transition-all duration-1000 ease-in-out flex items-center space-x-2 font-medium group h-20 px-3 ${
                  pathname.includes('/post-job')
                    ? 'text-cyan-400 -rotate-[10deg] text-2xl'
                    : 'text-gray-300 hover:text-cyan-400 hover:rotate-[10deg] hover:animate-pulse text-sm'
                }`}
              >
                <span className="relative z-10 group-hover:animate-bounce">
                  {t('postJobs')}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-1000 ease-in-out ${
                    pathname.includes('/post-job')
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100 origin-left'
                  }`} style={{ bottom: '-2px' }}></div>
                </span>
              </Link>
              <Link
                href={`/${locale}/notifications`}
                className={`relative transition-all duration-1000 ease-in-out group h-20 flex items-center px-3 ${
                  pathname.includes('/notifications')
                    ? 'text-cyan-400 -rotate-[10deg] text-lg'
                    : 'text-gray-300 hover:text-cyan-400 hover:rotate-[10deg] hover:animate-pulse text-sm'
                }`}
              >
                <div className="relative">
                  <Bell className="w-5 h-5 transition-all duration-1000 ease-in-out group-hover:animate-bounce group-hover:scale-110" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <span className="relative z-10">
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-1000 ease-in-out ${
                    pathname.includes('/notifications')
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100 origin-left'
                  }`} style={{ bottom: '-2px' }}></div>
                </span>
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <DarkModeToggle />

              <div className="relative language-menu">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-all duration-1000 ease-in-out group"
                >
                  <Globe className="w-4 h-4 transition-all duration-1000 ease-in-out group-hover:rotate-180 group-hover:scale-110" />
                </button>
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-slate-800/90 backdrop-blur-xl rounded-lg shadow-2xl border border-cyan-500/30 z-10">
                    <button
                      onClick={() => switchLocale('en')}
                      className="block w-full text-left px-4 py-2 text-sm rounded text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-500"
                    >
                      English
                    </button>
                    <button
                      onClick={() => switchLocale('zh')}
                      className="block w-full text-left px-4 py-2 text-sm rounded text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-500"
                    >
                      繁體中文
                    </button>
                  </div>
                )}
              </div>

              {isAuthenticated ? (
                <div className="relative user-menu">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 px-4 py-2 rounded-full transition-all duration-1000 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{user?.name || 'User'}</span>
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-32 bg-slate-800/90 backdrop-blur-xl rounded-lg shadow-2xl border border-cyan-500/30 z-10">
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm rounded text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-500"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={openAuthPopup}
                  className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 px-6 py-2 rounded-full transition-all duration-1000 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 group overflow-hidden"
                >
                  <span className="relative z-10">{t('login')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out"></div>
                </button>
              )}
            </div>

            <button
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/20 transition-all duration-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 transition-all duration-500 ease-in-out" />
              ) : (
                <Menu className="w-6 h-6 transition-all duration-500 ease-in-out" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-cyan-500/30">
            <nav className="flex flex-col space-y-4">
              <Link
                href={`/${locale}/jobs`}
                className={`px-4 py-2 text-sm font-medium transition-all duration-500 hover:bg-cyan-500/20 rounded-lg ${
                  pathname.includes('/jobs')
                    ? 'text-cyan-400 bg-cyan-500/20'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {t('jobs')}
              </Link>
              <Link
                href={`/${locale}/teachers`}
                className={`px-4 py-2 text-sm font-medium transition-all duration-500 hover:bg-cyan-500/20 rounded-lg ${
                  pathname.includes('/teachers')
                    ? 'text-cyan-400 bg-cyan-500/20'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {t('teachers')}
              </Link>
              <Link
                href={`/${locale}/about`}
                className={`px-4 py-2 text-sm font-medium transition-all duration-500 hover:bg-cyan-500/20 rounded-lg ${
                  pathname.includes('/about')
                    ? 'text-cyan-400 bg-cyan-500/20'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {t('about')}
              </Link>
              <Link
                href={`/${locale}/post-job`}
                className={`px-4 py-2 text-sm font-medium transition-all duration-500 hover:bg-cyan-500/20 rounded-lg ${
                  pathname.includes('/post-job')
                    ? 'text-cyan-400 bg-cyan-500/20'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {t('postJobs')}
              </Link>
              <Link
                href={`/${locale}/notifications`}
                className={`px-4 py-2 text-sm font-medium transition-all duration-500 hover:bg-cyan-500/20 rounded-lg ${
                  pathname.includes('/notifications')
                    ? 'text-cyan-400 bg-cyan-500/20'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {t('notifications')}
              </Link>
            </nav>
          </div>
        )}
      </div>



      <style jsx>{`
        @keyframes grid-flow {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(20px) translateY(20px); }
        }
        
        @keyframes grid-flow-reverse {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(-20px) translateY(-20px); }
        }
        
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes particle-float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
        }
        
        @keyframes border-flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-grid-flow {
          animation: grid-flow 20s linear infinite;
        }
        
        .animate-grid-flow-reverse {
          animation: grid-flow-reverse 25s linear infinite;
        }
        
        .animate-gradient-flow {
          animation: gradient-flow 15s ease infinite;
        }
        
        .animate-particle-float {
          animation: particle-float 5s ease-in-out infinite;
        }
        
        .animate-border-flow {
          animation: border-flow 8s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
}
