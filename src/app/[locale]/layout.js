import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Providers } from '../providers';
import { Toaster } from 'react-hot-toast';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MainBackground } from '@/components/MainBackground';
import { AuthPopupProvider } from '@/components/auth/AuthPopupProvider';
import { locales } from '@/i18n';
import '../globals.sass';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages();

  return {
    title: messages.layout.title,
    description: messages.layout.description,
  };
}

export default async function LocaleLayout({ children, params: { locale } }) {
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <AuthPopupProvider>
              <Header />
              <MainBackground />
              {children}
              <Footer />
              <Toaster position="top-right" />
            </AuthPopupProvider>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
