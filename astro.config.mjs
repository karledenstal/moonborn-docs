import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Moonborn',
      logo: {
        src: './src/assets/moonborn_logo.png',
        replacesTitle: true,
      },
      customCss: [
        './src/css/override.css',
      ],
      social: {
        discord: 'https://discord.com',
        github: 'https://github.com/karledenstal/moonborn-docs',
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
            { label: 'Support', link: '/guides/support/' }
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'Pipeline',
          items: [
            { label: 'Overview', link: '/pipeline/overview/' },
            { label: 'Main Quests Update', link: '/pipeline/main-quests/' },
            { label: 'Minor Quests Update', link: '/pipeline/minor-quests/' },
            { label: 'Polish', link: '/pipeline/polish/' },
            { label: 'Marriage Update', link: '/pipeline/marriage/' },
          ]
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
