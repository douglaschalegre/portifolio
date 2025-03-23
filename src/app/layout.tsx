import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/templates/navbar';
import { Analytics } from '@vercel/analytics/react';
import SkipLink from '@/components/skip-link';
import LogosGrid from '@/components/templates/logosGrid';
import BackToTop from '@/components/back-to-top';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://douglaschalegre.com'),
  title: 'Douglas Chalegre | Engenheiro de Software',
  description:
    'Engenheiro de software focado em tecnologias web, trazendo uma excelente experiência do usuário, melhorando a eficiência e a produtividade.',
  keywords: [
    'engenheiro de software',
    'desenvolvedor web',
    'react',
    'typescript',
    'next.js',
  ],
  authors: [{ name: 'Douglas Chalegre' }],
  creator: 'Douglas Chalegre',
  publisher: 'Douglas Chalegre',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://douglaschalegre.com',
    title: 'Douglas Chalegre | Engenheiro de Software',
    description:
      'Engenheiro de software focado em tecnologias web, trazendo uma excelente experiência do usuário.',
    siteName: 'Douglas Chalegre',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Douglas Chalegre',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Douglas Chalegre | Engenheiro de Software',
    description:
      'Engenheiro de software focado em tecnologias web, trazendo uma excelente experiência do usuário.',
    images: ['/og-image.png'],
    creator: '@dev_douglas',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Douglas Chalegre',
              jobTitle: 'Engenheiro de Software',
              url: 'https://douglaschalegre.com',
              sameAs: [
                'https://github.com/douglaschalegre',
                'https://www.linkedin.com/in/douglaschalegre/',
                'https://www.instagram.com/dev.douglas/',
              ],
              email: 'douglas.chalegre@gmail.com',
              description:
                'Engenheiro de software focado em tecnologias web, trazendo uma excelente experiência do usuário.',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelancer',
              },
              skills: [
                'React',
                'TypeScript',
                'Next.js',
                'Web Development',
                'Software Engineering',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <SkipLink />
        <Navbar />
        <main id="main-content">{children}</main>
        <Analytics />
        <LogosGrid />
        <BackToTop />
      </body>
    </html>
  );
}
