import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.gicpatlot.in',
  integrations: [tailwind()],
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});