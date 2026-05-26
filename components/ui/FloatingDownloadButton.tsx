'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useCallback } from 'react';
import { PERSONAL } from '@/data/resume';

export function FloatingDownloadButton() {
  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = PERSONAL.resumeUrl;
    link.download = PERSONAL.resumeFilename;
    link.click();
  }, []);

  return (
    <motion.button
      type="button"
      onClick={handleDownload}
      aria-label="Download resume as PDF"
      title="Download PDF Resume"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{
        opacity: 1,
        scale: 1,
        boxShadow: [
          '0 10px 30px -10px rgba(59,130,246,0.5)',
          '0 14px 40px -8px rgba(59,130,246,0.7)',
          '0 10px 30px -10px rgba(59,130,246,0.5)',
        ],
      }}
      transition={{
        opacity: { duration: 0.4, delay: 0.6 },
        scale: { duration: 0.4, delay: 0.6 },
        boxShadow: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-600 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-primary md:hidden"
    >
      <Download className="h-5 w-5" aria-hidden="true" />
    </motion.button>
  );
}
