import { PERSONAL } from '@/data/resume';

/** Path prefix for public assets; empty since the site is served from the domain root. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Absolute URL of the site root, always with a trailing slash. */
export const SITE_URL =
  process.env.NODE_ENV === 'production'
    ? PERSONAL.portfolioUrl
    : 'http://localhost:3000/';

export const SITE_TITLE = `${PERSONAL.name} — ${PERSONAL.title}`;

export const SITE_DESCRIPTION =
  'Mohammadreza Ghamari — Senior Frontend Developer in Tehran with five years building fast, SEO-friendly web apps with React, Next.js, Vue and Nuxt.';
