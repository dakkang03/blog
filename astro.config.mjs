import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
    site: 'https://dakkang03.github.io',
	base: '/blog',
    integrations: [mdx(), sitemap()],
    i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    routing: {
      prefixDefaultLocale: true,
    },
    }
});