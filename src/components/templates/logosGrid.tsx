'use client';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Button } from '../ui/button';

export default function LogosGrid() {
  const buttons = [
    {
      name: 'Instagram',
      icon: <FaInstagram className="h-6 w-6" aria-hidden="true" />,
      link: 'https://www.instagram.com/dev.douglas/',
      username: '@dev.douglas',
    },
    {
      name: 'Github',
      icon: <FaGithub className="h-6 w-6" aria-hidden="true" />,
      link: 'https://github.com/douglaschalegre',
      username: 'douglaschalegre',
    },
    {
      name: 'Linkedin',
      icon: <FaLinkedin className="h-6 w-6" aria-hidden="true" />,
      link: 'https://www.linkedin.com/in/douglaschalegre/',
      username: 'douglaschalegre',
    },
    {
      name: 'Email',
      icon: <HiOutlineMail className="h-6 w-6" aria-hidden="true" />,
      link: 'mailto:douglas.chalegre@gmail.com',
      username: 'douglas.chalegre@gmail.com',
    },
  ];

  return (
    <div className="bg-neutral-900 py-12 sm:py-16" id="redes">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-y-4 text-lg font-semibold leading-8">
            <h2>Redes sociais</h2>
            <div>
              <ul className="flex gap-x-8">
                {buttons.map((button) => (
                  <li className="w-min" key={button.name}>
                    <a href={button.link}>
                      <Button className="group flex">{button.icon}</Button>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
