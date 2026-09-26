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
      {DOTS.map((n) => (
        <span
          key={n}
          aria-hidden="true"
          className={cn(
            'block h-2 w-2 rounded-full',
            n <= level
              ? 'bg-accent-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]'
              : 'bg-black/15 dark:bg-white/15',
          )}
        />
      ))}
    </span>
  );
}
