import jsImage from '@/assets/javascript.svg?url';
import tsImage from '@/assets/typeScript.svg?url';
import reactImage from '@/assets/react.svg?url';
import vueImage from '@/assets/vue.svg?url';

export const TECH_STACK = [
  { src: jsImage, alt: 'JavaScript', className: 'js' },
  { src: tsImage, alt: 'TypeScript', className: 'ts' },
  { src: reactImage, alt: 'React', className: 'react' },
  { src: vueImage, alt: 'Vue', className: 'vue' },
];

export const SKILLS = [
  {
    id: 'frontend',
    category: 'Frontend',
    items: [
      { id: 'html-css', name: 'HTML/CSS', level: 90 },
      { id: 'javascript', name: 'JavaScript', level: 85 },
      { id: 'typescript', name: 'TypeScript', level: 70 },
      { id: 'vuejs', name: 'VueJs', level: 85 },
      { id: 'reactjs', name: 'ReactJs', level: 50 },
    ],
  },
  {
    id: 'tools',
    category: 'Tools & Technologies',
    items: [
      { id: 'nodejs', name: 'NodeJs', level: 40 },
      { id: 'vite', name: 'Vite', level: 60 },
      { id: 'git', name: 'Git', level: 70 },
      { id: 'seo', name: 'SEO Tools', level: 70 },
      { id: 'rest-api', name: 'REST APIs', level: 80 },
    ],
  },
];

export const PROJECTS = [
  {
    id: 'agility',
    title: 'Agility',
    description:
      'A Vue & Nuxt-powered content website on Agile and Scrum, delivering insightful articles, guides, and resources for efficient project and team management.',
    image: '',
    technologies: [
      'NuxtJs',
      'VueJs',
      'TypeScript',
      'Vite',
      'NuxtUI',
      'Tailwind CSS',
      'SEO Optimization',
    ],
    link: 'https://www.agility.ir',
  },
  {
    id: 'booking-engine',
    title: 'Booking Engine',
    description:
      'A platform that enables hotels to create their own websites effortlessly, offering customizable templates, content management, and booking features for a seamless online presence.',
    image: '',
    technologies: [
      'NuxtJs',
      'VueJs',
      'TypeScript',
      'Vuetify',
      'Pinia',
      'Vite',
      'SEO Optimization',
    ],
    link: 'https://tochal.bookat.org/',
  },
  {
    id: 'forex-crm',
    title: 'Forex Broker CRM',
    description:
      'A CRM platform for Forex brokers, built to manage clients, track trades, monitor performance, and streamline customer relations efficiently.',
    image: '',
    technologies: [
      'ReactJs',
      'NextJs',
      'Socket.io',
      'Redux',
      'TypeScript',
      'Material UI',
    ],
    link: 'https://deltafx.com',
  },
];

export const CONTACT_INFO = [
  {
    id: 'location',
    title: 'Location',
    icon: 'fas fa-map-marker-alt',
    content: 'Iran, Tehran',
  },
  {
    id: 'phone',
    title: 'Phone',
    icon: 'fas fa-phone',
    content: '+98 933 975 2422',
  },
  {
    id: 'email',
    title: 'Email',
    icon: 'fas fa-envelope',
    content: 'mmdrza77@gmail.com',
  },
];

export const SOCIAL_LINKS = [
  { id: 'github', icon: 'fab fa-github', url: 'https://github.com/mrGhamari', label: 'GitHub' },
  { id: 'linkedin', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/mrghamari', label: 'LinkedIn' },
  { id: 'instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/_mmdrza_', label: 'Instagram' },
  { id: 'telegram', icon: 'fab fa-telegram', url: 'https://t.me/mmdrza', label: 'Telegram' },
];

export const PERSONAL_INFO = {
  name: 'Mohammadreza Ghamari',
  role: 'Frontend Developer',
  description:
    'Skilled in developing modern, high-performance web applications using React and Vue.js, with a focus on creating user-friendly interfaces and delivering seamless user experiences.',
};
