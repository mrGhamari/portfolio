import type { MetadataRoute } from 'next';
import { PERSONAL } from '@/data/resume';
import { BASE_PATH, SITE_DESCRIPTION, SITE_TITLE } from '@/lib/site';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_TITLE,
    short_name: PERSONAL.name,
    description: SITE_DESCRIPTION,
    start_url: `${BASE_PATH}/`,
    scope: `${BASE_PATH}/`,
    display: 'browser',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    icons: [
      { src: `${BASE_PATH}/icon-192.png`, sizes: '192x192', type: 'image/png' },
      { src: `${BASE_PATH}/icon-512.png`, sizes: '512x512', type: 'image/png' },
    ],
  };
}
