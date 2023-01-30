import { Text } from '@/components/atoms/text';
import { Title } from '@/components/molecules/title';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex items-center justify-center'>
      <div className='flex flex-col sm:max-w-6xl'>
        <section className='h-screen flex justify-between items-center'>
          <div>
            <h1 className='text-sm text-orange-500'>Hi, my name is</h1>
            <h2 className='font-bold text-6xl leading-relaxed'>
              Douglas Chalegre.
            </h2>
            <h2 className='font-bold text-3xl leading-relaxed text-gray-300'>
              I build cool software using modern technologies.
            </h2>
            <p className='text-gray-500 max-w-xl'>
              I&apos;m a software developer focused on web technologies,
              bringing a excelent UX, improving efficiency and productivity,
              reducing costs, and implementing new technologies to support
              business operations.
            </p>
          </div>
        </section>

        <section id='about'>
          <div>
            <Title>About Me</Title>
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='flex gap-4 flex-col sm:justify-between'>
              <Text className='text-gray-500 max-w-lg'>
                Hey there! My name is Douglas and I love the web 🥰. I began my
                journey in IT with a interest in CyberSec, joined a computer
                science bachelor degree and fell in love with web development!
              </Text>
              <Text className='text-gray-500 max-w-lg'>
                Couple of years later, after a lot of a lot of improvement on my
                web development skills 😅. I&apos;ve had the opportunity of
                working in a{' '}
                <a href='https://t-hand.com.br/' className='text-orange-500'>
                  acessibility startup
                </a>
                ,{' '}
                <a href='https://www.tjal.jus.br/' className='text-orange-500'>
                  public judicial organization
                </a>
                ,{' '}
                <a
                  href='https://www.capgemini.com/'
                  className='text-orange-500'
                >
                  a global leader in consulting, technology services and digital
                  transformation
                </a>
                . Currently, I&apos;m developing a huge project within the{' '}
                <a href='https://www.bb.com.br/' className='text-orange-500'>
                  second largest bank in latin america
                </a>
                . Focused on bringing inovative technologies and processes in
                order to maximize agile development and product quality.
              </Text>
              <Text>
                This are some of the technologies I&apos;ve been using 👨‍💻
              </Text>
              <ul className='text-gray-500 max-w-lg grid grid-cols-2 sm:grid-cols-3'>
                <li className='list-disc list-inside marker:text-orange-500'>
                  JavaScript (ES6)
                </li>
                <li className='list-disc list-inside marker:text-orange-500'>
                  TypeScript
                </li>
                <li className='list-disc list-inside marker:text-orange-500'>
                  React
                </li>
                <li className='list-disc list-inside marker:text-orange-500'>
                  NextJS
                </li>
                <li className='list-disc list-inside marker:text-orange-500'>
                  Node.js
                </li>
                <li className='list-disc list-inside marker:text-orange-500'>
                  Express
                </li>
                <li className='list-disc list-inside marker:text-orange-500'>
                  Strapi
                </li>
                <li className='list-disc list-inside marker:text-orange-500'>
                  Python
                </li>
                <li className='list-disc list-inside marker:text-orange-500'>
                  FastApi
                </li>
                <li className='list-disc list-inside marker:text-orange-500'>
                  Angular 2+
                </li>
              </ul>
            </div>
            <div className='flex justify-center sm:block'>
              <Image
                src='/profile-pic-gray-bg (2).jpg'
                width='150'
                height='150'
                alt={''}
                className='rounded'
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
