'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { SUMMARY, SUMMARY_HIGHLIGHTS } from '@/data/resume';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

function highlight(text: string, terms: readonly string[]) {
  if (terms.length === 0) return [{ text, hl: false, key: 0 }];
  const sorted = [...terms].sort((a, b) => b.length - a.length);
  const pattern = sorted
    .map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
  const re = new RegExp(`(${pattern})`, 'g');
  return text.split(re).map((chunk, i) => ({
    text: chunk,
    hl: terms.some((t) => t.toLowerCase() === chunk.toLowerCase()),
    key: i,
  }));
}

export function Summary() {
  const tokens = useMemo(() => highlight(SUMMARY, SUMMARY_HIGHLIGHTS), []);

  return (
    <section
      id="summary"
      aria-label="Summary"
      className="scroll-mt-20 py-16 md:py-24"
    >
      <Container>
        <SectionHeading eyebrow="01 — Summary">A quick introduction.</SectionHeading>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-[15px] leading-[1.85] text-primary/80 dark:text-secondary/80 sm:text-base"
        >
          {tokens.map((t) =>
            t.hl ? (
              <strong
                key={t.key}
                className="font-semibold text-primary dark:text-secondary"
              >
                {t.text}
              </strong>
            ) : (
              <span key={t.key}>{t.text}</span>
            ),
          )}
        </motion.p>
      </Container>
    </section>
  );
}
