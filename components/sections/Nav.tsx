'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NAV_LINKS, PERSONAL } from '@/data/resume';
import { DownloadButton } from '@/components/ui/DownloadButton';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('summary');
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.getElementById(l.id),
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0.1, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hero = document.getElementById('top');
    if (!hero) {
      setShowHeader(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setShowHeader(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-56px 0px 0px 0px' },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{ y: showHeader ? 0 : -80, opacity: showHeader ? 1 : 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden={!showHeader}
      className={cn(
        'fixed inset-x-0 top-0 z-40 border-b border-black/5 bg-secondary/75 backdrop-blur-xl backdrop-saturate-150 dark:border-white/10 dark:bg-primary/75',
        !showHeader && 'pointer-events-none',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between px-6 sm:px-8"
      >
        <a
          href="#top"
          className="font-bold tracking-tight text-primary dark:text-secondary"
        >
          <span className="text-accent-500">M</span>G.
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            const active = activeId === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={cn(
                    'relative text-xs font-semibold uppercase tracking-widest transition-colors',
                    active
                      ? 'text-accent-500 dark:text-accent-400'
                      : 'text-muted hover:text-accent-500 dark:hover:text-accent-400',
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-accent-500"
                      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <DownloadButton variant="compact" />
          </div>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-primary transition-colors hover:border-accent-400 hover:text-accent-500 dark:border-white/10 dark:text-secondary md:hidden"
          >
            {open ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-black/5 dark:border-white/10 md:hidden"
          >
            <ul className="space-y-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-primary/80 transition-colors hover:bg-black/5 hover:text-accent-500 dark:text-secondary/80 dark:hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={PERSONAL.resumeUrl}
                  download={PERSONAL.resumeFilename}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-accent-500"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
