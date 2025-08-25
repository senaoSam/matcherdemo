import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';

export default function Home({ params: { locale } }) {
  setRequestLocale(locale);
  
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Features />
        <HowItWorks />
      </main>
    </div>
  );
}
