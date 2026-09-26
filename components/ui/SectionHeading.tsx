import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  children: string;
  eyebrow?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ children, eyebrow, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={cn('reveal mb-10', align === 'center' && 'text-center')}>
      {eyebrow && (
        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-accent-500 dark:text-accent-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-primary dark:text-secondary sm:text-3xl">
        {children}
      </h2>
      <span
        aria-hidden="true"
        className={cn(
          'reveal-line mt-3 block h-[3px] w-14 rounded-full bg-gradient-to-r from-accent-500 to-accent-300',
          align === 'center' && 'mx-auto',
        )}
      />
    </div>
  );
}
