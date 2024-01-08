import { FaArrowCircleDown } from 'react-icons/fa';

export default function Talks() {
  const talks = [
    {
      name: 'Workshop Web',
      description: 'Workshop de desenvolvimento web realizado na UNIT-AL.',
      date: '15/08/2019',
      url: 'https://github.com/douglaschalegre/Talks/tree/master/Workshop%20desenvolvimento%20web',
      photo: '/talks/workshop-web.jpg',
    },
    {
      name: 'Workshop Hands-on Twitter Clone',
      description:
        'Workshop de desenvolvimento fullstack de uma aplicação clone do Twitter realizado na FAN/FGV em Maceió.',
      date: '30/03/2022',
      url: 'https://github.com/douglaschalegre/Twitter-Clone',
      photo: '/talks/workshop-twitter-clone.jpg',
    },
    {
      name: 'Workshop Hands-on IA classificadora de cores',
      description:
        'Workshop de desenvolvimento de uma aplicação que classifica cores utilizando inteligência artificial e front-end para interação. Realizado na semana de extensão da UNIT-AL.',
      date: '21/11/2022',
      url: 'https://github.com/douglaschalegre/colors-collector',
      photo: '/talks/workshop-ia-cores.jpg',
    },
  ];
  return (
    <div id="talks" className="px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-8 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Talks
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Aqui eu compartilho as talks e workshops que já ministrei para a
            comunidade. Gosto muito de participar de eventos e compartilhar
            conhecimento sempre é muito gratificante. Também tenho um{' '}
            <a
              className="text-orange-500 hover:text-orange-500/90"
              href="https://github.com/douglaschalegre/Talks"
            >
              repo
            </a>{' '}
            no GitHub com os slides/códigos das palestras, se quiser acompanhar
            para sempre ver as novas deixa sua ⭐ lá.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="flex items-center gap-1 rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              <p>Ver palestras</p>
              <div>
                <FaArrowCircleDown />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
