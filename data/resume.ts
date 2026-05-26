export type Personal = Readonly<{
  name: string;
  title: string;
  email: string;
  phone: string;
  phoneHref: string;
  location: string;
  linkedinHandle: string;
  linkedinUrl: string;
  portfolioUrl: string;
  resumeUrl: string;
  resumeFilename: string;
}>;

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export type SkillGroup = Readonly<{
  category: string;
  level: SkillLevel;
  items: readonly string[];
}>;

export type Experience = Readonly<{
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: readonly string[];
}>;

export type Education = Readonly<{
  degree: string;
  school: string;
  url?: string;
}>;

export type Language = Readonly<{
  name: string;
  level: string;
}>;

export type NavLink = Readonly<{
  id: string;
  label: string;
}>;

export const PERSONAL: Personal = {
  name: 'Mohammadreza Ghamari',
  title: 'Senior Frontend Developer',
  email: 'mmdrza77@gmail.com',
  phone: '+98 933 975 2422',
  phoneHref: '+989339752422',
  location: 'Tehran, Iran',
  linkedinHandle: 'mrGhamari',
  linkedinUrl: 'https://www.linkedin.com/in/mrGhamari',
  portfolioUrl: 'https://mrghamari.github.io/portfolio/',
  resumeUrl: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/Resume.pdf`,
  resumeFilename: 'Mohammadreza_Ghamari_Resume.pdf',
} as const;

export const SUMMARY =
  'I am a frontend developer with five years of experience, specializing in scalable and high-performance web applications. My expertise lies in ReactJs and NextJs, with growing proficiency in VueJs, supported by strong skills in state management, UI/UX design systems, and SEO optimization. I am passionate about continuous learning and actively explore emerging technologies to integrate them into real-world projects. Beyond technical skills, I thrive in cross-functional collaboration and effectively bridge communication between developers, designers, and stakeholders to deliver impactful solutions.';

export const SUMMARY_HIGHLIGHTS: readonly string[] = [
  'frontend developer',
  'five years',
  'ReactJs',
  'NextJs',
  'VueJs',
  'state management',
  'UI/UX design systems',
  'SEO optimization',
];

export const SKILL_GROUPS: readonly SkillGroup[] = [
  { category: 'Languages',              level: 5, items: ['JavaScript', 'TypeScript'] },
  { category: 'Frameworks',             level: 5, items: ['Next.js', 'React.js', 'Vue.js', 'Nuxt.js'] },
  { category: 'Version Control System', level: 4, items: ['Git', 'Azure'] },
  { category: 'Databases',              level: 3, items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { category: 'Other',                  level: 3, items: ['SEO Technical', 'Node.js', 'Docker', 'Express.js'] },
] as const;

export const EXPERIENCE: readonly Experience[] = [
  {
    role: 'Senior Frontend Developer',
    company: 'Trend Marketing Solution',
    period: '09/2025 — 03/2026',
    location: 'Tehran, Iran',
    bullets: [
      'Built a modular dashboard featuring User administration, Campaign orchestration, and Social Media integration with Next.js and Shadcn UI.',
    ],
  },
  {
    role: 'Senior Frontend Developer',
    company: 'Mahdaad',
    period: '05/2025 — 09/2025',
    location: 'Tehran, Iran',
    bullets: [
      'Responsible for the development, debugging and maintenance of the Agility website — a blog-based platform built with Nuxt.js and Vue.js — as well as its back-office dashboard.',
      'Implemented SSR (Server-Side Rendering) and optimized SEO strategies using Nuxt SEO for enhanced performance and search engine visibility.',
      'Developed backend features using Directus (headless CMS), designed database schemas and data models, and implemented seamless integration with the database.',
      'Led the UI refactoring process by deprecating Nuxt UI. Implemented the company’s internal design system (Pantograph) with Tailwind CSS to improve consistency and maintainability.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Lamasoo',
    period: '09/2024 — 05/2025',
    location: 'Tehran, Iran',
    bullets: [
      'Developed a hotel website from the ground up using Nuxt 3 and Vue 3, implementing a modern and scalable architecture with SSR. Optimized SEO with Nuxt SEO to boost performance, maintainability, and search engine visibility.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Techonica',
    period: '07/2023 — 08/2024',
    location: 'Tehran, Iran',
    bullets: [
      'Developed & maintained the DeltaFX trading platform using React and Next.js (App Router).',
      'Developed payment system including admin, user, and provider panels.',
      'Developed Risk Management System including Insight, Customers, and Transactions modules.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Aasood',
    period: '11/2022 — 08/2023',
    location: 'Tehran, Iran',
    bullets: [
      'Developed the Aasood admin panel.',
      'Rewrote and developed two legacy admin panels using modern technologies.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Tejarat Shayan',
    period: '02/2022 — 09/2022',
    location: 'Tehran, Iran',
    bullets: [
      'Designed and developed the Ecotam web application with a server-side architecture using Nuxt 3 and Vue 3. Implemented scalable, high-performance solutions to ensure a modern and user-friendly experience.',
    ],
  },
] as const;

export const EDUCATION: readonly Education[] = [
  {
    degree: "Bachelor's Degree in Industrial Engineering",
    school: 'University Of Eyvanakey',
    url: 'https://www.eyc.ac.ir/',
  },
] as const;

export const LANGUAGES: readonly Language[] = [
  { name: 'English', level: 'Working proficiency (actively improving)' },
] as const;

export const NAV_LINKS: readonly NavLink[] = [
  { id: 'summary',    label: 'Summary' },
  { id: 'skills',     label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education',  label: 'Education' },
  { id: 'contact',    label: 'Contact' },
] as const;
