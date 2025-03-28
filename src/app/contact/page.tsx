'use client';

import { type FC } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const ContactPage: FC = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <header className="mb-16">
          <nav aria-label="Back to home">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-semibold text-white hover:text-white/90"
              aria-label="Voltar para a página inicial"
            >
              <ArrowLeftIcon className="mr-2 h-4 w-4" aria-hidden="true" />
              Voltar para a página inicial
            </Link>
          </nav>
        </header>
        <main aria-labelledby="contact-title">
          <div className="mx-auto max-w-2xl text-center">
            <h1
              id="contact-title"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Vamos conversar sobre seu projeto?
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-300">
              Preencha o formulário abaixo e me conte mais sobre suas ideias.
              Vou responder o mais rápido possível.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <iframe
              src="https://form.typeform.com/to/qyxelXNr"
              className="h-[600px] w-full rounded-lg border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Formulário de contato"
              aria-label="Formulário de contato"
              role="application"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContactPage;
