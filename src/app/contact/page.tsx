'use client';

import { type FC } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const ContactPage: FC = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm font-semibold text-white hover:text-white/90"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Voltar para a página inicial
        </Link>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Vamos criar algo incrível juntos?
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            Me conte sobre seu projeto e vamos transformar suas ideias em
            realidade.
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
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
