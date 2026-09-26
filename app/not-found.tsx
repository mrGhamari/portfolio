import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-accent-500">
        404
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 text-muted">This page doesn’t exist or has moved.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
      >
        Back to the resume
      </Link>
    </main>
  );
}
