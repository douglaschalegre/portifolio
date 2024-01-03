'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Separator } from '../ui/separator';

const navigation = [
  { name: 'Tecnologias', href: '/#tecnologias' },
  { name: 'Redes', href: '/#redes' },
  { name: 'Talks', href: '/talks' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prot, setProt] = useState('https:');
  const [url, setUrl] = useState('localhost:3000');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setProt(window.location.protocol);
      setUrl(window.location.host);
    }
  }, []);
  const apps = [
    {
      name: 'Arquivos',
      href: `${prot}//arquivos.${url}`,
    },
    {
      name: 'Blog',
      href: `${prot}//docs.${url}`,
    },
  ];
  return (
    <header className="sticky inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Douglas Chalegre</span>
            <Image
              className="h-8 w-auto rounded"
              src="/douglas.dev.png"
              alt=""
              width={50}
              height={50}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-white/90"
            >
              {item.name}
            </a>
          ))}
          <div>
            <Separator orientation="vertical" className="bg-orange-500" />
          </div>
          {apps.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-white/90"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/#redes"
            className="text-sm font-semibold leading-6 text-white hover:text-white/90"
          >
            Fale comigo
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a
              href="https://www.instagram.com/dev.douglas"
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">Douglas Chalegre</span>
              <Image
                className="h-8 w-auto"
                src="/douglas.dev-no-bg-big.png"
                alt=""
                width={32}
                height={32}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="https://www.instagram.com/dev.douglas"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
                >
                  Fale comigo
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
