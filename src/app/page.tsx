import Hero from '@/components/templates/hero';
import Stack from '@/components/templates/stack';
import LogosGrid from '@/components/templates/logosGrid';
import Talks from '@/components/templates/talks';

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Stack />
      <Talks />
      <LogosGrid />
      {/* TODO:
      - [] Section sobre mim
      */}
    </div>
  );
}
