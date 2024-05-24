import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import db from '@astrojs/db'
import icon from 'astro-icon'
import node from '@astrojs/node'
import vercel from '@astrojs/vercel/serverless'
import react from '@astrojs/react'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), db(), icon(), react(), mdx()],
    output: 'hybrid',
    adapter: vercel(),
})
