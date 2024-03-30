import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercelServerless from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  output: 'hybrid',
  adapter: vercelServerless({
    webAnalytics: {
      enabled: true
    }
  }),
});