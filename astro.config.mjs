import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";
import icon from "astro-icon";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), db(), icon()]
});