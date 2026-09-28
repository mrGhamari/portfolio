import { Download, Mail, MapPin, Phone } from 'lucide-react';
import type { CSSProperties } from 'react';
import { LinkedinIcon } from '@/components/ui/icons/LinkedinIcon';
import { PERSONAL } from '@/data/resume';
import { ContactPill } from '@/components/ui/ContactPill';
import { Container } from '@/components/ui/Container';
import { HandleToName } from '@/components/ui/HandleToName';
import { TypedTitle } from '@/components/ui/TypedTitle';

const delay = (seconds: number): CSSProperties => ({
  animationDelay: `${seconds}s`,
});

export function Hero() {
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
          className="mt-4 text-[clamp(1.5rem,7.2vw,2.25rem)] font-bold leading-[1.05] tracking-tight text-primary dark:text-secondary md:text-6xl"
        >
          <HandleToName name={PERSONAL.name} handle={PERSONAL.linkedinHandle} />
        </h1>

        <TypedTitle
          text={PERSONAL.title}
          startDelay={1500}
          className="mt-4 min-h-[1.5em] text-xl font-light tracking-wide text-muted md:text-2xl"
        />

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
