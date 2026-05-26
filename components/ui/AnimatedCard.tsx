'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

export function AnimatedCard({
  children,
  className,
  delay = 0,
  href,
  target,
  rel,
  ariaLabel,
}: AnimatedCardProps) {
  const sharedClass = cn(
    'block rounded-2xl border p-5',
    'border-black/10 bg-white',
    'dark:border-white/10 dark:bg-white/[0.03]',
    'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
    className,
  );

  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const, delay },
    whileHover: { scale: 1.02, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.18)' },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={sharedClass}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div className={sharedClass} {...motionProps}>
      {children}
    </motion.div>
  );
}
