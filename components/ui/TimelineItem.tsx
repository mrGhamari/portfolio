'use client';

import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useRef } from 'react';
import type { Experience } from '@/data/resume';

type TimelineItemProps = {
  item: Experience;
  isLast: boolean;
  index: number;
};

export function TimelineItem({ item, isLast, index }: TimelineItemProps) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <li ref={ref} className="relative pl-8 pb-10 last:pb-0 sm:pl-10">
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[6px] top-3 -bottom-2 w-px bg-gradient-to-b from-black/15 via-black/15 to-transparent dark:from-white/15 dark:via-white/15 sm:left-[7px]"
        />
      )}

      <span
        aria-hidden="true"
        className={`pulse-dot absolute left-0 top-[6px] h-3 w-3 rounded-full bg-accent-500 ring-4 ring-secondary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] dark:ring-primary sm:left-[1px] ${
          inView ? 'scale-100' : 'scale-75'
        }`}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="text-base font-bold text-primary dark:text-secondary sm:text-lg">
            {item.role}
          </h3>
          <p className="font-mono text-xs text-muted">
            {item.period}
            <span className="mx-1.5 text-black/30 dark:text-white/30">·</span>
            {item.location}
          </p>
        </div>

        <p className="mt-1 flex items-center gap-1.5 text-sm italic text-accent-600 dark:text-accent-400">
          <MapPin className="h-3 w-3" aria-hidden="true" />
          {item.company}
        </p>

        <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-primary/80 dark:text-secondary/80">
          {item.bullets.map((b, i) => (
            <li key={i} className="relative pl-5">
              <span
                aria-hidden="true"
                className="absolute left-0 top-[0.65em] h-1.5 w-1.5 rounded-full bg-accent-400/80"
              />
              {b}
            </li>
          ))}
        </ul>
      </motion.div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.55); }
          50% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
        }
        .pulse-dot {
          animation: ${inView ? 'pulse 2.2s ease-out infinite' : 'none'};
        }
      `}</style>
    </li>
  );
}
