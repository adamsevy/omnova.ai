import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Platform',
      href: getPermalink('/#platform'),
    },
    {
      text: 'Services',
      href: getPermalink('/#services'),
    },
    {
      text: 'Technology',
      href: getPermalink('/#technology'),
    },
  ],
  actions: [
    {
      text: 'Schedule Demo',
      href: getPermalink('/#contact'),
      variant: 'primary',
    },
  ],
  showToggleTheme: false,
  showRssFeed: false,
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footerNote: `© ${new Date().getFullYear()} OmNova Dynamis. All rights reserved.`,
};
