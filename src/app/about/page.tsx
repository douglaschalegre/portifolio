import type { Metadata } from 'next';
import Image from 'next/image';
import GitHubActivity from '@/components/site/github-activity';
import SocialLinks from '@/components/site/social-links';
import TalksList from '@/components/site/talks-list';
import {
  githubProfileUrl,
  githubUsername,
  profile,
  socialLinks,
  talks,
  talksRepoUrl,
} from '@/lib/site/content';

export const metadata: Metadata = {
  title: 'About | Douglas Chalegre',
  description:
    'Saiba mais sobre Douglas Chalegre: engenharia de software, sistemas distribuídos, microserviços, mensageria assíncrona, IA e talks/workshops.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <section
        className="pb-4 pt-16 sm:pb-6 sm:pt-20"
        aria-labelledby="about-text-title"
      >
        <div className="site-container">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">
            About
          </p>
          <h2
            id="about-text-title"
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Sobre
          </h2>
          <div className="mt-3 h-px w-14 bg-orange-500" />

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
            <div className="shrink-0">
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:h-24 sm:w-24">
                <Image
                  src={profile.avatarSrc}
                  alt={`Foto de ${profile.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 80px, 96px"
                />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {profile.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-orange-500">
                {profile.role}
              </p>
              <div className="mt-4">
                <SocialLinks links={socialLinks} />
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-300 sm:text-base">
            {profile.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <GitHubActivity
            username={githubUsername}
            profileUrl={githubProfileUrl}
          />
        </div>
      </section>

      <TalksList talks={talks} repoUrl={talksRepoUrl} />
    </div>
  );
}
