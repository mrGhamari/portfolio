'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === 'dark';
  const ariaLabel = mounted
    ? `Switch to ${isDark ? 'light' : 'dark'} mode`
    : 'Toggle theme';

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      suppressHydrationWarning
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full',
        'border border-black/10 bg-white text-primary',
        'dark:border-white/10 dark:bg-white/[0.04] dark:text-secondary',
        'transition-colors duration-300',
        'hover:border-accent-400 hover:text-accent-500',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500',
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={isDark ? 'moon' : 'sun'}
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {isDark ? (
              <Moon className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Sun className="h-4 w-4" aria-hidden="true" />
            )}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
