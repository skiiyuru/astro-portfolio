import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import netlify from "@astrojs/netlify"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://stargazers.club",
  prefetch: {
    prefetchAll: true,
  },
  integrations: [tailwind(), icon(), sitemap()],
  output: "hybrid",
  adapter: netlify(),
})
