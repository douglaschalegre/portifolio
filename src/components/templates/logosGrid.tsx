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
    <section
      className="bg-neutral-900 py-12 sm:py-16"
      id="redes"
      aria-labelledby="social-title"
    >
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-y-4 text-lg font-semibold leading-8">
            <h2 id="social-title">Redes sociais</h2>
            <nav aria-label="Social media links">
              <ul className="flex gap-x-8" role="list">
                {buttons.map((button) => (
                  <li key={button.name} role="listitem">
                    <a
                      href={button.link}
                      aria-label={`${button.name} - ${button.username}`}
                      className="group"
                    >
                      <Button className="flex" aria-hidden="true">
                        {button.icon}
                      </Button>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
