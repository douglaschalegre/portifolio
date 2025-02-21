import Hero from '@/components/templates/hero';
import Stack from '@/components/templates/stack';
import LogosGrid from '@/components/templates/logosGrid';
import Talks from '@/components/templates/talks';
import About from '@/components/templates/about';

export default function Home() {
  return (
    <div className="bg-neutral-900">
      <Hero />
      <About />
      <Stack />
      <Talks />
      <LogosGrid />
    </div>
  );
}
