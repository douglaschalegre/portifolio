'use client';

import { useEffect, useRef, useState } from 'react';
import {
  FaFacebookF,
  FaLink,
  FaLinkedin,
  FaRegEnvelope,
  FaTelegramPlane,
  FaWhatsapp,
} from 'react-icons/fa';

interface SharePostProps {
  title: string;
  url: string;
}

type CopyFeedback = 'success' | 'error' | null;

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
      aria-hidden="true"
    >
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.89-7.48L5.52 22H2.4l7.24-8.28L1 2h6.4l4.42 6.76L18.9 2Zm-1.1 18h1.73L6.46 3.9H4.6L17.8 20Z" />
    </svg>
  );
}

function BlueskyIcon() {
  return (
    <svg
      viewBox="0 0 600 530"
      className="h-4 w-4 fill-current"
      aria-hidden="true"
    >
      <path d="m128.3 44.2c67.7 50.9 140.5 154.2 171.7 218.8 31.2-64.6 104-167.9 171.7-218.8 48.8-36.7 127.8-65.1 127.8 25.1 0 18-10.3 151.4-16.4 173-21.3 75-98.8 94.1-167.8 82.3 120.6 20.6 151.3 88.8 85 157-125.7 129.2-180.6-32.4-194.7-73.8-2.6-7.6-3.8-11.2-5.6-11.2s-3 3.6-5.6 11.2c-14.1 41.4-69 203-194.7 73.8-66.3-68.2-35.6-136.4 85-157-69 11.8-146.5-7.3-167.8-82.3-6.1-21.6-16.4-155-16.4-173 0-90.2 79-61.8 127.8-25.1z" />
    </svg>
  );
}

function encode(value: string) {
  return encodeURIComponent(value);
}

export default function SharePost({ title, url }: SharePostProps) {
  const [copyFeedback, setCopyFeedback] = useState<CopyFeedback>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function scheduleFeedbackReset() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setCopyFeedback(null);
    }, 2000);
  }

  async function handleCopy() {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error('Clipboard API unavailable');
      }

      await navigator.clipboard.writeText(url);
      setCopyFeedback('success');
    } catch {
      setCopyFeedback('error');
      // eslint-disable-next-line no-alert
      window.prompt('Copie o link:', url);
    } finally {
      scheduleFeedbackReset();
    }
  }

  const encodedTitle = encode(title);
  const encodedUrl = encode(url);
  const encodedWhatsAppText = encode(`${title} ${url}`);
  const encodedShareText = encode(`${title} ${url}`);
  const encodedEmailBody = encode(`${title}\n\n${url}`);

  const links = [
    {
      name: 'X',
      href: `https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: <XIcon />,
    },
    {
      name: 'Bluesky',
      href: `https://bsky.app/intent/compose?text=${encodedShareText}`,
      icon: <BlueskyIcon />,
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: <FaLinkedin className="h-4 w-4" aria-hidden="true" />,
    },
    {
      name: 'WhatsApp',
      href: `https://wa.me/?text=${encodedWhatsAppText}`,
      icon: <FaWhatsapp className="h-4 w-4" aria-hidden="true" />,
    },
    {
      name: 'Telegram',
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <FaTelegramPlane className="h-4 w-4" aria-hidden="true" />,
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <FaFacebookF className="h-4 w-4" aria-hidden="true" />,
    },
    {
      name: 'Email',
      href: `mailto:?subject=${encodedTitle}&body=${encodedEmailBody}`,
      icon: <FaRegEnvelope className="h-4 w-4" aria-hidden="true" />,
    },
  ] as const;

  const actionClassName =
    'inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-200 transition hover:border-orange-500 hover:text-orange-500';

  return (
    <section aria-label="Share this post" className="mt-10 sm:mt-12">
      <p className="text-sm font-medium text-zinc-300">Share this post</p>

      <div className="mt-3 flex flex-wrap items-center gap-2.5">
        {links.map((link) => {
          const isExternal = link.href.startsWith('http');

          return (
            <a
              key={link.name}
              href={link.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              aria-label={`Share on ${link.name}`}
              title={`Share on ${link.name}`}
              className={actionClassName}
            >
              {link.icon}
            </a>
          );
        })}

        <button
          type="button"
          onClick={handleCopy}
          className={actionClassName}
          aria-label="Copy link"
          title="Copy link"
        >
          <FaLink className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <p
        className="mt-2 min-h-[1.25rem] text-xs text-zinc-400"
        aria-live="polite"
      >
        {copyFeedback === 'success' ? 'Link copiado' : null}
        {copyFeedback === 'error' ? 'Não foi possível copiar' : null}
      </p>
    </section>
  );
}
