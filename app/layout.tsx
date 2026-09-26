import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';
import { PERSONAL } from '@/data/resume';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: `${PERSONAL.name} — ${PERSONAL.title}`,
  description:
    'Senior Frontend Developer with five years of experience in scalable, high-performance web applications. Specializing in React, Next.js, Vue.js, and modern UI/UX design systems.',
  keywords: [
    'Mohammadreza Ghamari',
    'Senior Frontend Developer',
    'React',
    'Next.js',
    'Vue.js',
    'Nuxt.js',
    'TypeScript',
    'Tehran',
  ],
  authors: [{ name: PERSONAL.name, url: PERSONAL.linkedinUrl }],
  creator: PERSONAL.name,
  openGraph: {
    title: `${PERSONAL.name} — ${PERSONAL.title}`,
    description:
      'Frontend developer with five years of experience in scalable web applications.',
    type: 'profile',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
