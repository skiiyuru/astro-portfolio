import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import netlify from "@astrojs/netlify"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://skiiyuru.netlify.app/",
  prefetch: {
    prefetchAll: true,
  },
  integrations: [tailwind(), icon(), sitemap()],
  adapter: netlify(),
})
