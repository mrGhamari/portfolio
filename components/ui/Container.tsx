import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto w-full max-w-4xl px-6 sm:px-8', className)}
      {...rest}
    >
      {children}
    </div>
  );
}
