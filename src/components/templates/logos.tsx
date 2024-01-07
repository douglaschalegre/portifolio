'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function Logos() {
  const logos = [
    {
      name: 'Typescript',
      icon: '/ts_logo.png',
    },
    {
      name: 'Python',
      icon: '/python_logo.png',
    },
    {
      name: 'NodeJS',
      icon: '/nodejs.svg',
    },
    {
      name: 'React',
      icon: '/react_logo.png',
    },
    {
      name: 'Tailwind',
      icon: '/tailwind_logo.svg',
    },
  ];
  return (
    <div className="bg-white py-8 sm:py-16" id="tecnologias">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-y-4 px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Principais tecnologias
        </h2>

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
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={logos[index].name}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        <img
                          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                          src={logos[index].icon}
                          alt={logos[index].name}
                          width={50}
                          height={50}
                        />
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
