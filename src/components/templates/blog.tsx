'use client';

import { type FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  href: string;
  category: string;
}

const Blog: FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.text();

        // Parse the HTML content to extract articles
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');

        // Find all article links
        const articleLinks = Array.from(
          doc.querySelectorAll('a[href*="/articles/"]'),
        );

        const blogPosts: BlogPost[] = articleLinks
          .filter((link) => link.textContent !== '🧑‍💻Douglas Chalegre')
          .map((link) => {
            const title = link.textContent || '';
            const href = `https://docs.douglaschalegre.com${link.getAttribute(
              'href',
            )}`;

            // Extract category from the sidebar structure
            const parentUl = link.closest('ul');
            const categoryDiv = parentUl?.previousElementSibling;
            console.log('Link:', title);
            console.log('Parent UL:', parentUl);
            console.log('Category Div:', categoryDiv);

            // Get category from the div's text content
            const category = categoryDiv?.textContent?.trim() || 'Geral';
            console.log('Final Category:', category);

            return {
              title,
              description: `Artigo sobre ${title.toLowerCase()}`,
              date: new Date().toISOString().split('T')[0],
              readTime: `5 min`,
              href,
              category,
            };
          });

        setPosts(blogPosts.slice(0, 3));
        setError(null);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setError(
          'Não foi possível carregar os artigos. Por favor, tente novamente mais tarde.',
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section id="blog" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Blog Técnico
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-300">
              Carregando artigos...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="blog" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Blog Técnico
            </h2>
            <p className="mt-2 text-lg leading-8 text-red-400">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Blog Técnico
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            Artigos sobre desenvolvimento web, boas práticas e tecnologias que
            utilizo.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-center justify-center gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <span className="rounded-full bg-orange-500/10 px-2 py-1 text-orange-500">
                  {post.category}
                </span>
                <span className="text-gray-500">
                  {post.readTime} de leitura
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <Link
                    href={post.href}
                    className="hover:text-orange-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="https://docs.douglaschalegre.com/articles"
            className="inline-flex items-center text-sm font-semibold text-white hover:text-orange-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver todos os artigos
            <ArrowRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
