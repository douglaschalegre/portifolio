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
  type?: 'Talk' | 'Workshop' | 'Talk / Workshop';
}

export const githubUsername = 'douglaschalegre';
export const githubProfileUrl = `https://github.com/${githubUsername}`;

export const profile: ProfileContent = {
  name: 'Douglas Chalegre',
  role: 'Engenheiro de Software e Pesquisador',
  avatarSrc:
    'https://www.gravatar.com/avatar/53dd21d3a0baf4ca00987869c8b23701?s=240&d=mp',
  shortBio:
    'Engenheiro de software e pesquisador com foco em sistemas distribuídos. Trabalho com microserviços, arquitetura orientada a eventos e mensageria assíncrona para construir software confiável, escalável e interoperável.',
  aboutParagraphs: [
    'Sou graduado em Ciência da Computação e atualmente mestrando, com foco em engenharia de software, inteligência artificial, agentes inteligentes.',
    'Minha atuação tem sido em plataformas distribuídas e sistemas de integração, com ênfase em microserviços, arquitetura orientada a eventos, comunicação assíncrona (filas e pub/sub) e desenho de APIs. Priorizo confiabilidade, escalabilidade, observabilidade e interoperabilidade entre sistemas.',
    'Tenho experiência em desenvolvimento web do front-end ao back-end, incluindo automação de fluxos críticos, geração de documentos em larga escala e definição de padrões de arquitetura entre times.',
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
    name: 'X',
    href: 'https://x.com/dougl4s_c',
    label: '@dougl4s_c',
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
    type: 'Workshop',
  },
  {
    title: 'Hands-on Twitter Clone',
    description:
      'Workshop full stack com uma aplicação inspirada no Twitter, realizado na FAN/FGV em Maceió.',
    date: '30/03/2022',
    href: 'https://github.com/douglaschalegre/Twitter-Clone',
    type: 'Workshop',
  },
  {
    title: 'Hands-on IA Classificadora de Cores',
    description:
      'Workshop de aplicação com IA para classificação de cores e interface front-end na semana de extensão da UNIT-AL.',
    date: '21/11/2022',
    href: 'https://github.com/douglaschalegre/colors-collector',
    type: 'Workshop',
  },
  {
    title: 'Insights sobre agentes',
    description:
      'Apresentação sobre agentes inteligentes, suas características, aplicações e desafios.',
    date: '12/02/2026',
    href: 'https://github.com/douglaschalegre/Talks/blob/master/Insights%20sobre%20agentes.pdf',
    type: 'Talk',
  }
];
