'use client';

import { EXPERIENCE } from '@/data/resume';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TimelineItem } from '@/components/ui/TimelineItem';

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Professional experience"
      className="scroll-mt-20 py-16 md:py-24"
    >
      <Container>
        <SectionHeading eyebrow="03 — Experience">
          Where I’ve worked.
        </SectionHeading>
        <ol>
          {EXPERIENCE.map((item, idx) => (
            <TimelineItem
              key={`${item.company}-${item.period}`}
              item={item}
              isLast={idx === EXPERIENCE.length - 1}
              index={idx}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
}
