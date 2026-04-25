// @ts-check

import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: import.meta.env.PROD ? "https://itssera.dev" : "http://localhost:4321",
	integrations: [react(), mdx(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Geist Mono",
			cssVariable: "--font-geistmono",
		},
		{
			provider: fontProviders.fontsource(),
			name: "Geist",
			cssVariable: "--font-geist",
		},
	],

	adapter: cloudflare(),
});
