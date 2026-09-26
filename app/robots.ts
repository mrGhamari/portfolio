import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

// Crawlers only read robots.txt from the domain root, so on the GitHub Pages
// project path (/portfolio/) this file is ignored; it takes effect once the
// site is served from a root domain. Submit the sitemap in Search Console.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}sitemap.xml`,
  };
}
