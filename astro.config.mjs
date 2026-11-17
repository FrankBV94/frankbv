// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
   i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
  site: 'https://frankbv.github.io/',
   base: 'frankbv',
});
