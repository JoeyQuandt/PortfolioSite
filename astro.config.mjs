import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
const tina = ({
  directiveName = "tina"
} = {}) => ({
  name: "tina-cms",
  hooks: {
    "astro:config:setup": ({
      addClientDirective,
      opts
    }) => {
      addClientDirective({
        name: directiveName,
        entrypoint: "./client-directives/tina.mjs"
      });
    }
  }
});


// https://astro.build/config
export default defineConfig({
  integrations: [tina(), react(), tailwind({
    applyBaseStyles: false
  }), icon()]
});