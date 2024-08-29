import { Button } from "./Button";

export const Projects = {
  label: "Projects",
  name: "Projects",
  type: "object",
  fields: [
    {
      type: "string",
      label: "Section Title",
      name: "sectionTitle",
    },
    {
      type: "object",
      list: true,
      label: "Project",
      name: "project",
      ui: {
        itemProps: (item) => {
          return {
            label: `${item.title ? `Project: ${item.title}` : "Project Item"}`,
          };
        },
      },
      fields: [
        {
          type: "image",
          label: "Thumbnail",
          name: "thumbnail",
        },
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Skills",
          list: true,
          name: "skills",
        },
        {
          type: "object",
          label: "Buttons",
          name: "buttons",
          list: true,
          fields: [Button],
        },
        {
          label: "Project Status",
          name: "caterogy",
          type: "string",
          list: true,
          component: "checkbox-group",
          options: [
            { label: "All", value: "All" },
            { label: "Live", value: "Live" },
            { label: "In Progress", value: "In Progress" },
          ],
        },
      ],
    },
  ],
};
