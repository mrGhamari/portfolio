'use client';

import { useReducedMotion } from 'framer-motion';
import { Download, Mail, MapPin, Phone } from 'lucide-react';
import { LinkedinIcon } from '@/components/ui/icons/LinkedinIcon';
import { useEffect, useState, type CSSProperties } from 'react';
import { PERSONAL } from '@/data/resume';
import { ContactPill } from '@/components/ui/ContactPill';
import { Container } from '@/components/ui/Container';
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

const nameLetters = PERSONAL.name.split('');

const delay = (seconds: number): CSSProperties => ({
  animationDelay: `${seconds}s`,
});

export function Hero() {
  const typed = useTypewriter(PERSONAL.title);
  const typingDone = typed.length === PERSONAL.title.length;

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[calc(100vh-3.5rem)] items-center pt-24 pb-16 md:min-h-screen md:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-20 -z-10 h-72 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(59,130,246,0.18),transparent_70%)]"
      />

      <Container>
        <p
          className="animate-fade-up font-mono text-xs font-medium uppercase tracking-[0.4em] text-accent-500 dark:text-accent-400"
        >
          Curriculum Vitae
        </p>

        <h1
          aria-label={PERSONAL.name}
          className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-primary dark:text-secondary md:text-6xl"
        >
          {nameLetters.map((char, i) => (
            <span
              key={i}
              style={delay(0.1 + i * 0.025)}
              className="inline-block animate-letter-rise"
            >
              {char === ' ' ? ' ' : char}
            </span>
          ))}
        </h1>

        <p className="mt-4 min-h-[1.5em] text-xl font-light tracking-wide text-muted md:text-2xl">
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
          <span className="opacity-0">{PERSONAL.title.slice(typed.length)}</span>
        </p>

        <p
          style={delay(0.3)}
          className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-primary/70 dark:text-secondary/70"
        >
          Five years building scalable, high-performance web apps with React,
          Next.js, and Vue. Currently based in {PERSONAL.location}.
        </p>

        <div
          style={delay(0.45)}
          className="animate-fade-up mt-8 flex flex-wrap items-center gap-2"
        >
          <ContactPill icon={Mail}     label={PERSONAL.email}          href={`mailto:${PERSONAL.email}`} />
          <ContactPill icon={Phone}    label={PERSONAL.phone}          href={`tel:${PERSONAL.phoneHref}`} />
          <ContactPill icon={MapPin}   label={PERSONAL.location}       href="#contact" />
          <ContactPill icon={LinkedinIcon} label={PERSONAL.linkedinHandle} href={PERSONAL.linkedinUrl} external />
          <ContactPill icon={Download} label="Download Resume"         href={PERSONAL.resumeUrl}    download={PERSONAL.resumeFilename} />
        </div>
      </Container>
    </section>
  );
}
