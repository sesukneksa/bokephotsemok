import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://bokephotsemok.pages.dev',
  output: 'server',
  adapter: cloudflare(),
});