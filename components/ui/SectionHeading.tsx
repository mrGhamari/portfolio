'use client';

import { motion } from 'framer-motion';

type SectionHeadingProps = {
  children: string;
  eyebrow?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ children, eyebrow, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      className={align === 'center' ? 'mb-10 text-center' : 'mb-10'}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow && (
        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-accent-500 dark:text-accent-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-primary dark:text-secondary sm:text-3xl">
        {children}
      </h2>
      <motion.span
        aria-hidden="true"
        className={`mt-3 block h-[3px] rounded-full bg-gradient-to-r from-accent-500 to-accent-300 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
        initial={{ width: 0 }}
        whileInView={{ width: 56 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}
