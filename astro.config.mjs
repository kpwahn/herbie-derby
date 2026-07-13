// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/herbie-derby',
	site: 'https://kpwahn.github.io/',
	integrations: [
		starlight({
			title: 'Herbie Derby',
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Herbs',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Milkweed', slug: 'herbs/milkweed' },
					],
				},
				// {
				// 	label: 'Reference',
				// 	items: [{ autogenerate: { directory: 'reference' } }],
				// },
			],
		}),
	],
});
