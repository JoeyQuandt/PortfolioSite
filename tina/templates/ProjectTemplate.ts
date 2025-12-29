import { Button } from "./components/Button";

export const ProjectTemplate = {
  label: "Project Template",
  name: "ProjectTemplate",
  format: "mdx",
  fields: [
    {
      label: "Title",
      name: "title",
      type: "string",
    },
    {
      label: "Hero",
      name: "hero",
      type: "image",
    },
    {
      name: "text",
      label: "Text",
      type: "rich-text",
    },
  ],
};
