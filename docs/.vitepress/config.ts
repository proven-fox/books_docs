import { defineConfig } from 'vitepress';
import sidebar from './sidebar';

const tagline = 'Free, Modern Desktop Accounting';
const taglineAr = 'محاسبة سطح المكتب الحديثة والمجانية';

export default defineConfig({
  lang: 'ar-SA',
  base: '/books/',
  title: 'فريبي بوكس',
  description: taglineAr,
  titleTemplate: taglineAr,
  appearance: false,
  outDir: '../dist',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/books/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }],
    ['link', { rel: 'stylesheet', href: '/books/.vitepress/theme/style.css' }],
  ],

  themeConfig: {
    logo: '/books/logo.svg',
    siteTitle: false,
    nav: nav(),
    sidebar: sidebar(),
    editLink: {
      pattern: 'https://github.com/frappe/books_docs/edit/master/docs/:path',
      text: 'تعديل هذه الصفحة على GitHub',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/frappe/books' },
      {
        icon: 'youtube',
        link: 'https://www.youtube.com/channel/UCbaNaml6jBSIACQwc9Nz_0g',
      },
    ],
    footer: {
      message: 'تم الإصدار بموجب ترخيص MIT.',
      copyright: 'حقوق النشر © 2022-حاضر شركة فريبي تكنولوجيز المحدودة.',
    },
  },
});

function nav() {
  return [
    {
      text: 'الرئيسية',
      link: 'https://frappebooks.com/',
    },
    {
      text: 'تحميل',
      link: 'https://frappebooks.com/download',
    },
    {
      text: 'المجتمع',
      link: 'https://t.me/frappebooks',
    },
  ];
}
