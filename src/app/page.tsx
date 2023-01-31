'use client';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Text } from '@/components/atoms/text';
import { Title } from '@/components/molecules/title';

export default function Home() {
  return (
    <main className='flex items-center justify-center'>
      <div className='flex flex-col sm:max-w-6xl'>
        <nav className='mt-1'>
          <motion.div
            initial={{ x: -2000 }}
            animate={{ x: 0 }}
            className='absolute rounded-sm -z-10  bg-orange-400 w-full h-4'
          />

          <ul className='w-full flex justify-end items-center gap-4 text-black text-sm'>
            <li>
              <a href='#about'>About me</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
          </ul>
        </nav>
        <section
          className='h-screen flex justify-between items-center'
          id='home'
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='text-sm text-orange-500'
            >
              Hi, my name is
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='font-bold text-6xl leading-relaxed'
            >
              Douglas Chalegre.
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className='font-bold text-3xl leading-relaxed text-gray-300'
            >
              I build cool software using modern technologies.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className='text-gray-500 max-w-xl'
            >
              I&apos;m a software developer focused on web technologies,
              bringing a excelent UX, improving efficiency and productivity,
              reducing costs, and implementing new technologies to support
              business operations.
            </motion.p>
          </div>
        </section>

        <section className='h-screen' id='about'>
          <div>
            <Title>About Me</Title>
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='flex gap-4 flex-col sm:justify-between'>
              <Text className='text-gray-500 max-w-lg'>
                Hey there! My name is Douglas and I love the web. I began my
                journey in IT with a interest in CyberSec, joined a Computer
                Science bachelor degree and fell in love with web development!
              </Text>
              <Text className='text-gray-500 max-w-lg'>
                Couple of years later, after of a lot of improvement on my web
                development skills, I&apos;ve had the opportunity of working in
                an{' '}
                <a href='https://t-hand.com.br/' className='text-orange-500'>
                  Acessibility startup
                </a>
                ,{' '}
                <a href='https://www.tjal.jus.br/' className='text-orange-500'>
                  public judicial organization
                </a>{' '}
                and{' '}
                <a
                  href='https://www.capgemini.com/'
                  className='text-orange-500'
                >
                  a global leader in consulting, technology services and digital
                  transformation
                </a>
                . Currently, I&apos;m developing a huge project within the{' '}
                <a href='https://www.bb.com.br/' className='text-orange-500'>
                  second largest bank in Latin America
                </a>
                , focused on bringing inovative technologies and processes in
                order to maximize agile development and product quality.
              </Text>
              <Text>
                Those are some of the technologies I&apos;ve been using
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
              <div>
                <Image
                  src='/profile-pic-gray-bg (2).jpg'
                  width='150'
                  height='150'
                  alt={''}
                  className='rounded'
                />
                <div className='w-[150px] h-[150px] -top-32 -right-8 -z-10 relative rounded border border-orange-400' />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
