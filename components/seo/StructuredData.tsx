import { EDUCATION, EXPERIENCE, LANGUAGES, PERSONAL, SKILL_GROUPS } from '@/data/resume';
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/lib/site';

const personId = `${SITE_URL}#person`;
const websiteId = `${SITE_URL}#website`;

const [latest] = EXPERIENCE;
const isCurrentJob = latest?.period.endsWith('Present') ?? false;

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}#profile`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      inLanguage: 'en',
      isPartOf: { '@id': websiteId },
      mainEntity: { '@id': personId },
      primaryImageOfPage: `${SITE_URL}og-image.png`,
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: SITE_URL,
      name: SITE_TITLE,
      alternateName: [PERSONAL.name, PERSONAL.nameFa],
      inLanguage: 'en',
      publisher: { '@id': personId },
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: PERSONAL.name,
      alternateName: PERSONAL.nameFa,
      givenName: PERSONAL.name.split(' ')[0],
      familyName: PERSONAL.name.split(' ').slice(1).join(' '),
      jobTitle: PERSONAL.title,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      image: `${SITE_URL}og-image.png`,
      email: `mailto:${PERSONAL.email}`,
      telephone: PERSONAL.phoneHref,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tehran',
        addressCountry: 'IR',
      },
      sameAs: [PERSONAL.linkedinUrl, PERSONAL.githubUrl],
      knowsAbout: SKILL_GROUPS.flatMap((g) => g.items),
      knowsLanguage: LANGUAGES.map((l) => l.name),
      alumniOf: EDUCATION.map((e) => ({
        '@type': 'CollegeOrUniversity',
        name: e.school,
        ...(e.url && { url: e.url }),
      })),
      ...(isCurrentJob && {
        worksFor: { '@type': 'Organization', name: latest.company },
      }),
      hasOccupation: {
        '@type': 'Occupation',
        name: latest?.role ?? PERSONAL.title,
        occupationLocation: { '@type': 'City', name: 'Tehran' },
        skills: SKILL_GROUPS.flatMap((g) => g.items).join(', '),
      },
    },
  ],
};

// Escape `<` so resume text can never close the <script> element early.
const json = JSON.stringify(structuredData).replace(/</g, '\\u003c');

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
