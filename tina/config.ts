import { defineConfig, defineSchema } from "tinacms";
import { PageTemplate } from "./templates";
import { GlobalBloks } from "./globals";
import type { Document } from "./__generated__/types";
// Your hosting provider likely exposes this as an environment variable
const branch = process.env.BRANCH || "new-portfolio-site";

const Pages = {
  label: "Pages",
  name: "pages",
  path: "content/pages",
  format: "mdx",
  type: "object",
  list: true,
  ui: {
    router: (props: any) => {
      if (props.document._sys?.filename === "home") {
        return "/";
      }
      return props.document?._sys?.filename;
    },
  },
  templates: [PageTemplate],
};

const schema = defineSchema({
  //@ts-ignore tina error not generated type -->
  collections: [GlobalBloks, Pages],
});

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
  cmsCallback: (cms) => {
    cms.flags.set("branch-switcher", true);
    return cms;
  },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "/media",
      publicFolder: "public",
    },
  },
  search: {
    tina: {
      indexerToken: process.env.NEXT_PUBLIC_TINA_SEARCH,
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
  schema,
});
