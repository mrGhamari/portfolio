import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

// Served at https://mrghamari.github.io/robots.txt (the domain root), so
// crawlers read it and discover the sitemap from here.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}sitemap.xml`,
  };
}
