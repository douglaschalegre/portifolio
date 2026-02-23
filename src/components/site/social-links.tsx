import type { SocialLink } from '@/lib/site/content';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
} from 'react-icons/fa';

interface SocialLinksProps {
  links: SocialLink[];
}

export default function SocialLinks({ links }: SocialLinksProps) {
  const icons: Record<string, JSX.Element> = {
    github: <FaGithub className="h-4 w-4" aria-hidden="true" />,
    linkedin: <FaLinkedin className="h-4 w-4" aria-hidden="true" />,
    instagram: <FaInstagram className="h-4 w-4" aria-hidden="true" />,
    email: <FaRegEnvelope className="h-4 w-4" aria-hidden="true" />,
    x: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-current"
        aria-hidden="true"
      >
        <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.89-7.48L5.52 22H2.4l7.24-8.28L1 2h6.4l4.42 6.76L18.9 2Zm-1.1 18h1.73L6.46 3.9H4.6L17.8 20Z" />
      </svg>
    ),
  };

  return (
    <nav aria-label="Redes sociais">
      <ul className="flex flex-wrap gap-2.5" role="list">
        {links.map((link) => {
          const isExternal = link.href.startsWith('http');
          const icon =
            icons[link.name.toLowerCase()] ?? (
              <span className="text-xs font-semibold" aria-hidden="true">
                {link.name.slice(0, 1)}
              </span>
            );

          return (
            <li key={link.name} role="listitem">
              <a
                href={link.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-200 transition hover:border-orange-500 hover:text-orange-500"
                aria-label={`${link.name}: ${link.label}`}
                title={`${link.name} (${link.label})`}
              >
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
