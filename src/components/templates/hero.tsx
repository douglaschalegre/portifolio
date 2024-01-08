export default function Hero() {
  return (
    <div id="hero" className="px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Eu construo softwares utilizando tecnologias modernas.{' '}
            <a
              href="#sobre"
              className="font-semibold text-orange-500 hover:text-orange-500/90"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              Saiba mais
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Douglas Chalegre
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Eu sou um engenheiro de software focado em tecnologias web, trazendo
            uma excelente experiência do usuário, melhorando a eficiência e a
            produtividade, reduzindo custos e implementando novas tecnologias
            para auxiliar negócios.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#redes"
              className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              Fale comigo
            </a>
            <a
              href="#sobre"
              className="text-sm font-semibold leading-6 text-white hover:text-white/90"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
