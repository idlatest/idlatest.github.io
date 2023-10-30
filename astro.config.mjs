import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";
import sitemap from "@astrojs/sitemap";

import robots from "astro-robots";

// https://astro.build/config
export default defineConfig({
  site: "http:localhost",
  integrations: [tailwind(), expressiveCode(), mdx(), sitemap(), robots()],
});
