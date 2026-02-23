import type { SocialLink } from '@/lib/site/content';

interface SocialLinksProps {
  links: SocialLink[];
}

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <nav aria-label="Redes sociais">
      <ul className="flex flex-wrap gap-2.5" role="list">
        {links.map((link) => {
          const isExternal = link.href.startsWith('http');

          return (
            <li key={link.name} role="listitem">
              <a
                href={link.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-200 transition hover:border-orange-500 hover:text-orange-500"
                aria-label={`${link.name}: ${link.label}`}
              >
                <span className="font-medium">{link.name}</span>
                <span className="mx-2 text-zinc-500">/</span>
                <span className="text-zinc-300">{link.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
