import Hero from '@/components/templates/hero';
import Logos from '@/components/templates/logos';
import LogosGrid from '@/components/templates/logosGrid';
import Talks from '@/components/templates/talks';

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Logos />
      <Talks />
      <LogosGrid />
      {/* TODO:
      - [] Section sobre mim
      */}
    </div>
  );
}
