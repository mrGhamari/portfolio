'use client';

import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Phone } from 'lucide-react';
import { LinkedinIcon } from '@/components/ui/icons/LinkedinIcon';
import { useEffect, useState } from 'react';
import { PERSONAL } from '@/data/resume';
import { ContactPill } from '@/components/ui/ContactPill';
import { Container } from '@/components/ui/Container';

function useTypewriter(text: string, speed = 60, startDelay = 300) {
  const [out, setOut] = useState('');
  useEffect(() => {
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
  }, [text, speed, startDelay]);
  return out;
}

const nameLetters = PERSONAL.name.split('');

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
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs font-medium uppercase tracking-[0.4em] text-accent-500 dark:text-accent-400"
        >
          Curriculum Vitae
        </motion.p>

        <h1
          aria-label={PERSONAL.name}
          className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-primary dark:text-secondary md:text-6xl"
        >
          {nameLetters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + i * 0.025,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-4 min-h-[1.5em] text-xl font-light tracking-wide text-muted md:text-2xl"
        >
          <span>{typed}</span>
          <motion.span
            aria-hidden="true"
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1,
              repeat: typingDone ? Infinity : 0,
              ease: 'linear',
            }}
            className="ml-0.5 inline-block h-[0.95em] w-[2px] translate-y-[2px] bg-accent-500 align-middle"
          />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-primary/70 dark:text-secondary/70"
        >
          Five years building scalable, high-performance web apps with React,
          Next.js, and Vue. Currently based in {PERSONAL.location}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.45 }}
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          <ContactPill icon={Mail}     label={PERSONAL.email}          href={`mailto:${PERSONAL.email}`}                              index={0} />
          <ContactPill icon={Phone}    label={PERSONAL.phone}          href={`tel:${PERSONAL.phoneHref}`}                              index={1} />
          <ContactPill icon={MapPin}   label={PERSONAL.location}       href="#contact"                                                  index={2} />
          <ContactPill icon={LinkedinIcon} label={PERSONAL.linkedinHandle} href={PERSONAL.linkedinUrl} external                             index={3} />
          <ContactPill icon={Download} label="Download Resume"         href={PERSONAL.resumeUrl}    download={PERSONAL.resumeFilename}  index={4} />
        </motion.div>
      </Container>
    </section>
  );
}
