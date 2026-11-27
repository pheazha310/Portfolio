import type { ComponentType } from 'react';

type PageConfig = {
  title: string;
  load: () => Promise<{ default: ComponentType }>;
};

export const pageRegistry = {
  home: {
    title: 'Sophea Phal - Portfolio',
    load: () => import('./home/index'),
  },
  about: {
    title: 'About Me - Sophea Phal',
    load: () => import('./about/index'),
  },
  certificate: {
    title: 'Certificates - Sophea Phal',
    load: () => import('./certificate/index'),
  },
  contact: {
    title: 'Contact - Sophea Phal',
    load: () => import('./contact/index'),
  },
  experience: {
    title: 'Experience - Sophea Phal',
    load: () => import('./experience/index'),
  },
  projects: {
    title: 'Projects - Sophea Phal',
    load: () => import('./projects/index'),
  },
  skills: {
    title: 'Skills - Sophea Phal',
    load: () => import('./skills/index'),
  },
} satisfies Record<string, PageConfig>;

export type PageName = keyof typeof pageRegistry;

function isPageName(page: string | undefined): page is PageName {
  return page !== undefined && Object.hasOwn(pageRegistry, page);
}

export function resolvePageName(pathname: string): PageName {
  const page = pathname.split('/').filter(Boolean).pop()?.replace(/\.html$/, '');
  return isPageName(page) ? page : 'home';
}
