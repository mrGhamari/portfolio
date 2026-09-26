import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';
import { StructuredData } from '@/components/seo/StructuredData';
import { PERSONAL } from '@/data/resume';
import { BASE_PATH, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Search Console HTML-tag token (public: it ships in the page's <head>).
// The GOOGLE_SITE_VERIFICATION repo variable can override it; `||` because the
// workflow passes an empty string when that variable is unset.
const googleVerification =
  process.env.GOOGLE_SITE_VERIFICATION ||
  'iECZJoSaDjiMc2GI0zg1Z7BwFIAJ8Yp9CW2XxBQnEdE';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // The Persian name in the title helps the page rank for searches in Persian.
    default: `${PERSONAL.name} (${PERSONAL.nameFa}) — ${PERSONAL.title}`,
    template: `%s | ${PERSONAL.name}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: PERSONAL.name,
  keywords: [
    'Mohammadreza Ghamari',
    PERSONAL.nameFa,
    'Senior Frontend Developer',
    'Frontend Developer Tehran',
    'React Developer',
    'Next.js Developer',
    'Vue.js Developer',
    'Nuxt.js',
    'TypeScript',
    'Tehran',
    'Iran',
  ],
  authors: [{ name: PERSONAL.name, url: PERSONAL.linkedinUrl }],
  creator: PERSONAL.name,
  publisher: PERSONAL.name,
  category: 'technology',
  // Relative to metadataBase, so this resolves to the /portfolio/ URL.
  alternates: { canonical: './' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'profile',
    url: './',
    siteName: PERSONAL.name,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en_US',
    firstName: PERSONAL.name.split(' ')[0],
    lastName: PERSONAL.name.split(' ').slice(1).join(' '),
    username: PERSONAL.linkedinHandle,
    images: [
      {
        url: 'og-image.png',
        width: 1200,
        height: 630,
        alt: `${PERSONAL.name} — ${PERSONAL.title}`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['og-image.png'],
  },
  icons: {
    icon: [
      { url: `${BASE_PATH}/icon-32.png`, sizes: '32x32', type: 'image/png' },
      { url: `${BASE_PATH}/icon-192.png`, sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: `${BASE_PATH}/apple-touch-icon.png`, sizes: '180x180' }],
  },
  // Stops iOS from turning dates/numbers in the resume into phone links.
  formatDetection: { telephone: false, address: false, email: false },
  ...(googleVerification && { verification: { google: googleVerification } }),
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
      <head>
        {/* Without JS the typewriter never runs, so show the full title. */}
        <noscript>
          <style>{'.typed-rest{opacity:1!important}'}</style>
        </noscript>
      </head>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
        <StructuredData />
      </body>
    </html>
  );
}
