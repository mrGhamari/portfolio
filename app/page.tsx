import { Nav } from '@/components/sections/Nav';
import { Hero } from '@/components/sections/Hero';
import { Summary } from '@/components/sections/Summary';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { FloatingDownloadButton } from '@/components/ui/FloatingDownloadButton';

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main id="main">
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <FloatingDownloadButton />
    </>
  );
}
