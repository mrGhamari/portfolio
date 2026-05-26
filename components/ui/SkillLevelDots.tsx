'use client';

import { motion } from 'framer-motion';
import type { SkillLevel } from '@/data/resume';
import { cn } from '@/lib/utils';

const DOTS = [1, 2, 3, 4, 5] as const;

type SkillLevelDotsProps = {
  level: SkillLevel;
};

export function SkillLevelDots({ level }: SkillLevelDotsProps) {
  return (
    <span
      role="img"
      aria-label={`Skill level ${level} of 5`}
      title={`${level}/5`}
      className="flex shrink-0 items-center gap-1.5"
    >
      {DOTS.map((n) => {
        const filled = n <= level;
        return (
          <motion.span
            key={n}
            aria-hidden="true"
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: 'spring',
              stiffness: 320,
              damping: 22,
              delay: 0.15 + (n - 1) * 0.07,
            }}
            className={cn(
              'block h-2 w-2 rounded-full transition-colors duration-300',
              filled
                ? 'bg-accent-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]'
                : 'bg-black/15 dark:bg-white/15',
            )}
          />
        );
      })}
    </span>
  );
}
