'use client';

import { useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

function useTypewriter(text: string, speed = 60, startDelay = 300) {
  const reduceMotion = useReducedMotion();
  const [out, setOut] = useState('');
  useEffect(() => {
    if (reduceMotion) {
      setOut(text);
      return;
    }
    setOut('');
    let i = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;
    const timeoutId = window.setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length && intervalId) clearInterval(intervalId);
      }, speed);
    }, startDelay);
    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay, reduceMotion]);
  return out;
}

type TypedTitleProps = {
  text: string;
  className?: string;
  /** ms before typing starts. */
  startDelay?: number;
};

export function TypedTitle({ text, className, startDelay }: TypedTitleProps) {
  const typed = useTypewriter(text, undefined, startDelay);
  const typingDone = typed.length === text.length;

  return (
    <p className={className}>
      {/* The whole title is always in the DOM exactly once (so it's in the
          static HTML for crawlers); the not-yet-typed tail is just transparent. */}
      <span>{typed}</span>
      <span
        aria-hidden="true"
        className={cn(
          'ml-0.5 inline-block h-[0.95em] w-[2px] translate-y-[2px] bg-accent-500 align-middle',
          typingDone && 'animate-caret-blink',
        )}
      />
      <span className="typed-rest opacity-0">{text.slice(typed.length)}</span>
    </p>
  );
}
