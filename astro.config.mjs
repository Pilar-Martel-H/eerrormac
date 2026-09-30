import { defineConfig } from 'astro/config';
import viteStaticCopy from 'vite-plugin-static-copy';

export default defineConfig({
  site: 'https://Pilar-Martel-H.github.io',
  base: '/pensamientos-libidinosos',
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'src/content/docs/*.pdf',
            dest: 'docs'
          }
        ]
      })
    ]
  }
});
