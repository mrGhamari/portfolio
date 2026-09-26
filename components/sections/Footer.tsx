import { Mail } from 'lucide-react';
import { LinkedinIcon } from '@/components/ui/icons/LinkedinIcon';
import { PERSONAL } from '@/data/resume';
import { Container } from '@/components/ui/Container';
import { DownloadButton } from '@/components/ui/DownloadButton';

export function Footer() {
  // Rendered at build time; every deploy refreshes it.
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Footer"
      className="border-t border-black/5 py-10 dark:border-white/10"
    >
      <Container className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted">
          Built with{' '}
          <span className="text-red-500" aria-label="love" role="img">
            ❤️
          </span>{' '}
          by {PERSONAL.name}
          <span className="mx-2 text-black/20 dark:text-white/20">·</span>©{' '}
          {year}
        </p>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${PERSONAL.email}`}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-primary/70 transition-colors hover:border-accent-400 hover:text-accent-500 dark:border-white/10 dark:text-secondary/70"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={PERSONAL.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-primary/70 transition-colors hover:border-accent-400 hover:text-accent-500 dark:border-white/10 dark:text-secondary/70"
          >
            <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          <DownloadButton variant="secondary" />
        </div>
      </Container>
    </footer>
  );
}
