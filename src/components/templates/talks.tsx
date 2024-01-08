'use client';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { FaArrowCircleDown } from 'react-icons/fa';
import { Card, CardContent } from '../ui/card';

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
      photo: '/talks/twitter-clone.jpg',
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
      <div className="mx-auto max-w-2xl py-8 sm:py-10 lg:py-12">
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
        <div className="flex items-center justify-center py-8">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl"
          >
            <CarouselContent>
              {Array.from({ length: talks.length }).map((_, index) => (
                <CarouselItem
                  key={talks[index].name}
                  className="basis-1/2 md:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="m-0 flex aspect-square items-center justify-center p-0">
                        <Image
                          className="max-h-36 w-full object-cover"
                          src={talks[index].photo}
                          alt={talks[index].name}
                          width={300}
                          height={300}
                        />
                      </CardContent>
                    </Card>
                    <div className="flex justify-center pt-2">
                      <span className="text-center text-sm text-white/50">
                        {talks[index].name}
                      </span>
                      <span className="text-center text-sm text-white/50">
                        {talks[index].date}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
