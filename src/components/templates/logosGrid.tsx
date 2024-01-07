'use client';
import { FaGithub, FaInstagram, FaLinkedin, FaMedium } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

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
  const animateButtons = {
    hover: {
      scale: 1.1, // You can set the scale based on the size of the button
      transition: {
        duration: 1,
        type: 'spring',
        stiffness: 200,
      },
    },
  };

  const animateText = {
    hover: {
      x: 384, // You can customize the animation properties
      transition: {
        duration: 0.1,
        type: 'spring',
        stiffness: 100,
      },
    },
    initial: {
      x: 0,
    },
  };
  return (
    <div className="bg-black py-24 sm:py-32" id="redes">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-y-4 text-lg font-semibold leading-8">
            <h2>Redes sociais</h2>
            <div>
              <ul className="flex gap-x-8">
                {buttons.map((button) => (
                  <motion.li
                    whileHover="hover" // Animation variant to apply on hover
                    variants={animateButtons} // Define animation variantsinitial={false}
                    className="w-min"
                    key={button.name}
                  >
                    <a href={button.link}>
                      <Button className="group flex transition-width duration-200 ease-in-out">
                        {button.icon}
                        <motion.p
                          variants={animateText}
                          initial="initial"
                          className="relative right-96 hidden w-0 group-hover:ml-1 group-hover:flex group-hover:w-auto"
                        >
                          {button.username}
                        </motion.p>
                      </Button>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
