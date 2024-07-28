import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [tailwind(), react(), mdx()],
})
