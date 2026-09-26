type SkillBadgeProps = {
  label: string;
};

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <li
      className={[
        'cursor-default rounded-md border px-2.5 py-1 text-[13px] font-medium',
        'border-black/10 bg-white text-primary',
        'dark:border-white/10 dark:bg-white/[0.04] dark:text-secondary',
        'transition-[color,border-color,translate] duration-300 hover:-translate-y-0.5',
        'hover:border-accent-400 hover:text-accent-600',
        'dark:hover:border-accent-400 dark:hover:text-accent-300',
      ].join(' ')}
    >
      {label}
    </li>
  );
}
