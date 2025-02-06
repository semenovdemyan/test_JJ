import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  css: ['~/assets/scss/globals.scss'],
  plugins: ['~/plugins/element-plus.ts', '~/plugins/disableZoom.ts'],
  app: {
    head: {
      title: 'Joki Joya',
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/JJ.svg',
        },
      ],
      meta: [
        // Основные метатеги для SEO
        {
          name: 'description',
          content: 'Парки развлечений для всей семьи',
        },
        {
          name: 'keywords',
          content:
            'Парк развлечений, детский центр, аттракционы, игровые автоматы',
        },
        { name: 'author', content: 'joki-joya.ru' },
        // Отсутствие масштабирования при скролле
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
        },

        // Open Graph (для социальных сетей)
        { property: 'og:title', content: 'Joki Joya' },
        {
          property: 'og:description',
          content: 'Описание вашего сайта для социальных сетей',
        },
        { property: 'og:image', content: '/JJ.svg' },
        { property: 'og:url', content: 'https://joki-joya.ru' },

        // Twitter Card (для Twitter)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Joki Joya' },
        {
          name: 'twitter:description',
          content: 'Парки развлечений для всей семьи (для Twitter)',
        },
        { name: 'twitter:image', content: '/og-image.jpg' },
      ],
    },
  },
});
