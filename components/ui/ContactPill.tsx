'use client';

import { motion } from 'framer-motion';
import type { ComponentType, SVGProps } from 'react';

type ContactPillProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
  external?: boolean;
  download?: string | boolean;
  index?: number;
};

export function ContactPill({
  icon: Icon,
  label,
  href,
  external = false,
  download,
  index = 0,
}: ContactPillProps) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      download={download}
      aria-label={label}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2 }}
      className={[
        'group inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm',
        'border border-black/10 bg-white text-primary/80',
        'dark:border-white/10 dark:bg-white/[0.03] dark:text-secondary/80',
        'transition-colors duration-300',
        'hover:border-accent-400 hover:text-accent-600',
        'dark:hover:border-accent-400 dark:hover:text-accent-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500',
      ].join(' ')}
    >
      <Icon
        className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-accent-500"
        aria-hidden="true"
      />
      <span className="font-medium">{label}</span>
    </motion.a>
  );
}
