import type { Metadata } from 'next';
import CompactPostList from '@/components/site/compact-post-list';
import ProfileIntro from '@/components/site/profile-intro';
import { getAllBlogPostMeta } from '@/lib/blog/content';
import { profile, socialLinks } from '@/lib/site/content';

export const metadata: Metadata = {
  title: 'Douglas Chalegre | About & Blog',
  description:
    'Engenheiro de software e pesquisador com foco em sistemas distribuídos, microserviços e arquitetura orientada a eventos. Artigos sobre software, arquitetura e IA.',
  alternates: {
    canonical: '/',
  },
};

export default async function HomePage() {
  const posts = await getAllBlogPostMeta();

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <ProfileIntro
        profile={profile}
        socialLinks={socialLinks}
        description={profile.shortBio}
      />

      <CompactPostList
        posts={posts}
        title="Artigos"
        description="Todos os artigos publicados no blog, em ordem cronológica reversa."
      />
    </div>
  );
}
