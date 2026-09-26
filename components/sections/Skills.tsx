import { SKILL_GROUPS } from '@/data/resume';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillBadge } from '@/components/ui/SkillBadge';
import { SkillLevelDots } from '@/components/ui/SkillLevelDots';

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="scroll-mt-20 py-16 md:py-24"
    >
      <Container>
        <SectionHeading eyebrow="02 — Skills">
          The stack I build with.
        </SectionHeading>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="reveal">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm font-semibold text-primary dark:text-secondary">
                  {group.category}
                </h3>
                <SkillLevelDots level={group.level} />
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillBadge key={item} label={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
