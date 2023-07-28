import Image from 'next/image';
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Push to deploy.',
    description:
      "I'll take care of deploying your app. The deployment process involves a series of steps, including preparing the application for release, configuring it to work in the target environment.",
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description:
      '(Secure Sockets Layer) certificates are vital digital certificates that establish a secure and encrypted connection between users web browsers and web servers. .',
    icon: LockClosedIcon,
  },
  {
    name: 'Store secure informations.',
    description:
      'Databases provide a structured way to store data, enabling efficient querying, indexing, and updating of information. They offer data integrity and security mechanisms, ensuring that data remains consistent and protected from unauthorized access.',
    icon: ServerIcon,
  },
];

export default function Feature() {
  return (
    <div className='overflow-hidden bg-black py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:pr-8 lg:pt-4'>
            <div className='lg:max-w-lg'>
              <h2 className='text-base font-semibold leading-7 text-orange-500'>
                Web Development
              </h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                Beautiful web applications
              </p>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Web applications are the future of software. They are
                accessible, easy to use, and can be used on any device. I can
                help you build a web application that will make your customers
                happy.
              </p>
              <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none'>
                {features.map((feature) => (
                  <div key={feature.name} className='relative pl-9'>
                    <dt className='inline font-semibold text-white'>
                      <feature.icon
                        className='absolute left-1 top-1 h-5 w-5 text-orange-500'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
            alt='Product screenshot'
            className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0'
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
