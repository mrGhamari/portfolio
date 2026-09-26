import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

export function AnimatedCard({
  children,
  className,
  href,
  target,
  rel,
  ariaLabel,
}: AnimatedCardProps) {
  const sharedClass = cn(
    'reveal block rounded-2xl border p-5',
    'border-black/10 bg-white',
    'dark:border-white/10 dark:bg-white/[0.03]',
    'transition-[scale,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
    'hover:scale-[1.02] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.18)]',
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={cn(
          sharedClass,
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500',
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <div className={sharedClass}>
      {children}
    </div>
  );
}
