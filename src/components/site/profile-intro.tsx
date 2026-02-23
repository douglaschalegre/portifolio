import Image from 'next/image';
import SocialLinks from '@/components/site/social-links';
import type { ProfileContent, SocialLink } from '@/lib/site/content';

interface ProfileIntroProps {
  profile: ProfileContent;
  socialLinks: SocialLink[];
  description?: string;
  eyebrow?: string;
  showDescription?: boolean;
}

export default function ProfileIntro({
  profile,
  socialLinks,
  description,
  eyebrow,
  showDescription = true,
}: ProfileIntroProps) {
  return (
    <section className="pt-16 pb-8 sm:pt-20 sm:pb-10">
      <div className="site-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <div className="shrink-0">
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:h-24 sm:w-24">
              <Image
                src={profile.avatarSrc}
                alt={`Foto de ${profile.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80px, 96px"
                priority
              />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">
                {eyebrow}
              </p>
            ) : null}

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-sm font-medium text-orange-500">
              {profile.role}
            </p>
            {showDescription ? (
              <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
                {description ?? profile.shortBio}
              </p>
            ) : null}

            <div className={showDescription ? 'mt-6' : 'mt-4'}>
              <SocialLinks links={socialLinks} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
