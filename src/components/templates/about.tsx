'use client';

export default function About() {
  return (
    <div id="sobre" className="px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-8 sm:py-10 lg:py-12">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Sobre mim
          </h1>
          <p className="mt-6 leading-8 text-gray-300">
            Acredito que o desenvolvedor precisa ter além da visão técnica. O
            objetivo do código é solucionar problemas e no fim esse é o objetivo
            que devemos atingir.
            <p className="mt-6 leading-8 text-gray-300">
              Sou graduado em ciência da computação e atualmente em busca de
              ingressar em um mestrado para pesquisar sobre IA aplicada a
              Engenharia de Software.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
