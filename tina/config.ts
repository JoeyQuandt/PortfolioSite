import { defineConfig, defineSchema } from "tinacms";
import { PageTemplate, ProjectTemplate } from "./templates";
import { GlobalBloks } from "./globals";
import type { Document } from "./__generated__/types";
// Your hosting provider likely exposes this as an environment variable
const branch = process.env.BRANCH || "main";

// Type for the router function props
type RouterProps = {
  document: {
    _sys: {
      filename: string;
      relativePath?: string;
    };
  };
};

const Pages = {
  label: "Pages",
  name: "pages",
  path: "content/pages",
  format: "mdx",
  type: "object",
  list: true,
  ui: {
    router: (props: RouterProps) => {
      if (props.document._sys?.filename === "home") {
        return "/";
      }
      return props.document?._sys?.filename;
    },
  },
  templates: [PageTemplate],
};

const Projects = {
  label: "Projects",
  name: "projects",
  path: "content/projects",
  format: "mdx",
  type: "object",
  list: true,
  ui: {
    router: (props: RouterProps) => {
      return `/projects/${props.document?._sys?.filename}`;
    },
  },
  templates: [ProjectTemplate],
};

const schema = defineSchema({
  //@ts-ignore tina error not generated type -->
  collections: [GlobalBloks, Pages, Projects],
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
