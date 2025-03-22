import Hero from '@/components/templates/hero';
import Stack from '@/components/templates/stack';
import Talks from '@/components/templates/talks';
import About from '@/components/templates/about';
import Contact from '@/components/templates/contact';
import { ErrorBoundary } from '@/components/error-boundary';

export default function Home() {
  return (
    <div className="bg-neutral-900">
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ErrorBoundary>
        <About />
      </ErrorBoundary>
      <ErrorBoundary>
        <Stack />
      </ErrorBoundary>
      <ErrorBoundary>
        <Talks />
      </ErrorBoundary>
      <ErrorBoundary>
        <Contact />
      </ErrorBoundary>
    </div>
  );
}
