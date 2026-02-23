import type { Metadata } from 'next';
import ProfileIntro from '@/components/site/profile-intro';
import TalksList from '@/components/site/talks-list';
import { profile, socialLinks, talks, talksRepoUrl } from '@/lib/site/content';

export const metadata: Metadata = {
  title: 'About | Douglas Chalegre',
  description:
    'Saiba mais sobre Douglas Chalegre, experiência em engenharia de software e talks/workshops compartilhados com a comunidade.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <ProfileIntro
        profile={profile}
        socialLinks={socialLinks}
        eyebrow="About"
        description="Engenheiro de software com foco em desenvolvimento web, arquitetura e entrega de produtos que equilibram experiência, performance e manutenção."
      />

      <section className="pt-0 pb-4 sm:pb-6" aria-labelledby="about-text-title">
        <div className="site-container">
          <h2
            id="about-text-title"
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            Sobre
          </h2>
          <div className="mt-3 h-px w-14 bg-orange-500" />

          <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-300 sm:text-base">
            {profile.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <TalksList talks={talks} repoUrl={talksRepoUrl} />
    </div>
  );
}
