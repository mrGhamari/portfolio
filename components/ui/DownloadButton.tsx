'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useCallback } from 'react';
import { PERSONAL } from '@/data/resume';
import { cn } from '@/lib/utils';

type DownloadButtonProps = {
  variant?: 'primary' | 'secondary' | 'compact';
  className?: string;
  showLabel?: boolean;
};

export function DownloadButton({
  variant = 'primary',
  className,
  showLabel = true,
}: DownloadButtonProps) {
  // MotionConfig's reducedMotion only disables transforms, not this box-shadow loop.
  const reduceMotion = useReducedMotion();
  const pulse = variant === 'primary' && !reduceMotion;

  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = PERSONAL.resumeUrl;
    link.download = PERSONAL.resumeFilename;
    link.click();
  }, []);

  const base = cn(
    'group relative inline-flex items-center gap-2 rounded-full font-semibold',
    'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2',
    'dark:focus-visible:ring-offset-primary',
  );

  const variants = {
    primary:
      'px-6 py-3 text-sm bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-[0_8px_24px_-8px_rgba(59,130,246,0.6)] hover:shadow-[0_12px_32px_-8px_rgba(59,130,246,0.8)]',
    secondary:
      'px-5 py-2.5 text-sm border border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white',
    compact:
      'px-4 py-2 text-xs bg-primary text-secondary dark:bg-secondary dark:text-primary hover:opacity-90',
  } as const;

  return (
    <motion.button
      type="button"
      onClick={handleDownload}
      aria-label="Download resume as PDF"
      title="Download PDF Resume"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      animate={
        pulse
          ? {
              boxShadow: [
                '0 8px 24px -8px rgba(59,130,246,0.45)',
                '0 8px 28px -8px rgba(59,130,246,0.7)',
                '0 8px 24px -8px rgba(59,130,246,0.45)',
              ],
            }
          : undefined
      }
      transition={
        pulse
          ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
          : undefined
      }
      className={cn(base, variants[variant], className)}
    >
      <Download
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
        aria-hidden="true"
      />
      {showLabel && 'Download Resume'}
    </motion.button>
  );
}
