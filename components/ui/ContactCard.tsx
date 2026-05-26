'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

type ContactCardProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  index?: number;
};

export function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external = false,
  index = 0,
}: ContactCardProps) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={`${label}: ${value}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02, y: -2 }}
      className={[
        'group flex items-center gap-4 rounded-2xl border p-5',
        'border-black/10 bg-white',
        'dark:border-white/10 dark:bg-white/[0.03]',
        'transition-colors duration-300',
        'hover:border-accent-400/60 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.3)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500',
      ].join(' ')}
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          {label}
        </p>
        <p className="mt-0.5 truncate font-medium text-primary dark:text-secondary">
          {value}
        </p>
      </div>
      <ArrowUpRight
        className="h-4 w-4 text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
    </motion.a>
  );
}
