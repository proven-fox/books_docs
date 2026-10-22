import { defineConfig } from 'vitepress';
import sidebar from './sidebar';

const tagline = 'Free, Modern Desktop Accounting';
const taglineAr = 'محاسبة سطح المكتب الحديثة والمجانية';

export default defineConfig({
  lang: 'ar-SA',
  title: 'Omni Start Soft',
  description: taglineAr,
  titleTemplate: taglineAr,
  appearance: false,
  outDir: '../dist',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }],
    ['link', { rel: 'stylesheet', href: '/.vitepress/theme/style.css' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: false,
    nav: nav(),
    sidebar: sidebar(),
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/muthallathat/books' },
      {
        icon: 'youtube',
          // link: 'https://www.youtube.com/channel/UCbaNaml6jBSIACQwc9Nz_0g',
      link: 'https://www.youtube.com/@muthallathat',
        },
    ],
    footer: {
      message: 'تم الإصدار بموجب ترخيص MIT.',
      copyright: 'حقوق النشر © 2022-حاضر Omni Start Soft.',
    },
  },
});

function nav() {
  return [
    {
      text: 'الرئيسية',
      link: 'https://muthallathat.com/',
    },
    // {
    //   text: 'تحميل',
    //   link: 'https://muthallathat.com/download',
    // },
    {
      text: 'المجتمع',
      link: 'https://t.me/muthallathat',
    },
  ];
}
