export interface ProfileContent {
  name: string;
  role: string;
  avatarSrc: string;
  shortBio: string;
  aboutParagraphs: string[];
}

export interface SocialLink {
  name: string;
  href: string;
  label: string;
}

export interface TalkItem {
  title: string;
  description: string;
  date: string;
  href: string;
}

export const profile: ProfileContent = {
  name: 'Douglas Chalegre',
  role: 'Engenheiro de Software',
  avatarSrc: '/profile-pic-gray-bg%20(2).jpg',
  shortBio:
    'Engenheiro de software focado em produtos web. Trabalho conectando experiência do usuário, arquitetura e execução para transformar problemas reais em software simples de operar e manter.',
  aboutParagraphs: [
    'Sou graduado em Ciência da Computação e atuo principalmente com desenvolvimento web, com uma trajetória que passou por front-end, full stack e hoje tem um foco forte em back-end e arquitetura de APIs.',
    'Gosto de construir software com clareza: menos complexidade acidental, boas interfaces entre componentes e decisões técnicas que façam sentido para o negócio e para o time que mantém o produto.',
    'Também tenho interesse contínuo em inteligência artificial e segurança, especialmente quando esses temas ajudam a melhorar qualidade, produtividade e tomada de decisão em engenharia de software.',
  ],
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/douglaschalegre',
    label: 'douglaschalegre',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/douglaschalegre/',
    label: 'douglaschalegre',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/dev.douglas/',
    label: '@dev.douglas',
  },
  {
    name: 'Email',
    href: 'mailto:douglas.chalegre@gmail.com',
    label: 'douglas.chalegre@gmail.com',
  },
];

export const talksRepoUrl =
  'https://github.com/douglaschalegre/Talks';

export const talks: TalkItem[] = [
  {
    title: 'Workshop Web',
    description: 'Workshop de desenvolvimento web realizado na UNIT-AL.',
    date: '15/08/2019',
    href: 'https://github.com/douglaschalegre/Talks/tree/master/Workshop%20desenvolvimento%20web',
  },
  {
    title: 'Hands-on Twitter Clone',
    description:
      'Workshop full stack com uma aplicação inspirada no Twitter, realizado na FAN/FGV em Maceió.',
    date: '30/03/2022',
    href: 'https://github.com/douglaschalegre/Twitter-Clone',
  },
  {
    title: 'Hands-on IA Classificadora de Cores',
    description:
      'Workshop de aplicação com IA para classificação de cores e interface front-end na semana de extensão da UNIT-AL.',
    date: '21/11/2022',
    href: 'https://github.com/douglaschalegre/colors-collector',
  },
];
