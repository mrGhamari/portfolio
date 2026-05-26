'use client';

import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '@/data/resume';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Languages } from '@/components/sections/Languages';

export function Education() {
  return (
    <section
      id="education"
      aria-label="Education"
      className="scroll-mt-20 py-16 md:py-24"
    >
      <Container>
        <SectionHeading eyebrow="04 — Education">
          The fundamentals.
        </SectionHeading>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {EDUCATION.map((e, i) => (
            <AnimatedCard
              key={e.degree}
              delay={i * 0.08}
              href={e.url}
              target={e.url ? '_blank' : undefined}
              rel={e.url ? 'noopener noreferrer' : undefined}
              ariaLabel={`${e.degree} at ${e.school}`}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/10 text-accent-500">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-bold text-primary dark:text-secondary">
                  {e.degree}
                </h3>
              </div>
              <p className="mt-3 text-sm italic text-muted">{e.school}</p>
            </AnimatedCard>
          ))}

          <Languages />
        </div>
      </Container>
    </section>
  );
}
