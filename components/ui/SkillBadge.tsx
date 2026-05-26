'use client';

import { motion } from 'framer-motion';

type SkillBadgeProps = {
  label: string;
  index?: number;
};

export function SkillBadge({ label, index = 0 }: SkillBadgeProps) {
  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 22,
        delay: index * 0.04,
      }}
      whileHover={{ y: -2 }}
      className={[
        'cursor-default rounded-md border px-2.5 py-1 text-[13px] font-medium',
        'border-black/10 bg-white text-primary',
        'dark:border-white/10 dark:bg-white/[0.04] dark:text-secondary',
        'transition-colors duration-300',
        'hover:border-accent-400 hover:text-accent-600',
        'dark:hover:border-accent-400 dark:hover:text-accent-300',
      ].join(' ')}
    >
      {label}
    </motion.li>
  );
}
