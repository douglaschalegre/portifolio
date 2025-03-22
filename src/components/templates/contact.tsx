'use client';

import { type FC } from 'react';
import Link from 'next/link';

const Contact: FC = () => {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="contact-title"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Vamos criar algo incrível juntos?
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            Me conte sobre seu projeto e vamos transformar suas ideias em
            realidade.
          </p>
        </div>
        <div className="mt-16 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-orange-500/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            Preencher formulário
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
