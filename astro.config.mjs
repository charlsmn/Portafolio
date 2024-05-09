import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import db from '@astrojs/db'
import icon from 'astro-icon'

import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), db(), icon()],
    output: 'server',
    adapter: node({
        mode: 'standalone',
    }),
})
