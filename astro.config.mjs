import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	redirects: {
		"/": "/guides/get-started/"
	},
	trailingSlash: "always",
  integrations: [
    starlight({
      title: 'Moonborn',
      logo: {
        src: './src/assets/moonborn_logo.svg',
        replacesTitle: true,
      },
      customCss: [
        './src/css/override.css',
      ],
      social: {
        discord: 'https://discord.com',
        github: 'https://github.com/karledenstal/moonborn-aela',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Getting started', link: '/guides/get-started/' },
            { label: 'Installation', link: '/guides/installation/' },
            { label: 'Updating', link: '/guides/updating/' },
            { label: 'Uninstall', link: '/guides/uninstall/' },
            // { label: 'Support', link: '/guides/support/' }
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'Changelog',
          autogenerate: { directory: 'changelog' },
        }
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
