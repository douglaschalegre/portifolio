'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-white/5 bg-neutral-900/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Douglas Chalegre</span>
            <Image
              className="h-8 w-auto rounded"
              src="/douglas.dev.png"
              alt=""
              width={50}
              height={50}
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white transition hover:text-orange-500"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end" />
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 bg-black/30" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Douglas Chalegre</span>
              <Image
                className="h-8 w-auto rounded"
                src="/douglas.dev-no-bg-big.png"
                alt=""
                width={32}
                height={32}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-zinc-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-8">
            <nav aria-label="Mobile">
              <ul className="space-y-2" role="list">
                {navigation.map((item) => (
                  <li key={item.name} role="listitem">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white transition hover:bg-white/10 hover:text-orange-500"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
