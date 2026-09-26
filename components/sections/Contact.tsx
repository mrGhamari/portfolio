import { Mail, MapPin, Phone } from 'lucide-react';
import { LinkedinIcon } from '@/components/ui/icons/LinkedinIcon';
import { PERSONAL } from '@/data/resume';
import { ContactCard } from '@/components/ui/ContactCard';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Contact() {
  const items = [
    { icon: Mail,     label: 'Email',    value: PERSONAL.email,          href: `mailto:${PERSONAL.email}`,    external: false },
    { icon: Phone,    label: 'Phone',    value: PERSONAL.phone,          href: `tel:${PERSONAL.phoneHref}`,   external: false },
    { icon: MapPin,   label: 'Location', value: PERSONAL.location,       href: '#contact',                     external: false },
    { icon: LinkedinIcon, label: 'LinkedIn', value: PERSONAL.linkedinHandle, href: PERSONAL.linkedinUrl,           external: true },
  ] as const;

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="scroll-mt-20 py-16 md:py-24"
    >
      <Container>
        <SectionHeading eyebrow="05 — Contact">
          Let’s build something.
        </SectionHeading>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <ContactCard
              key={it.label}
              icon={it.icon}
              label={it.label}
              value={it.value}
              href={it.href}
              external={it.external}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
