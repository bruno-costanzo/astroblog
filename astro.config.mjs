import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://brunorb.netlify.app",
  integrations: [preact()],
});