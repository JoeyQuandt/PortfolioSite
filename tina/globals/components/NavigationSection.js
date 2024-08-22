import { Button } from "../../constants";

export const NavigationSection = {
  label: "navbar",
  name: "nav_bar",
  path: "content/shared",
  format: "mdx",
  type: "object",
  ui: {
    global: true,
  },
  fields: [
    {
      label: "Logo",
      name: "Logo",
      type: "image",
    },
    {
      name: "navigation_items",
      label: "Navigatie",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.navigation_link}` };
        },
      },
      fields: [
        {
          label: "Navigatie Link",
          name: "navigation_link",
          type: "string",
        },
        {
          label: "Pagina url",
          name: "page_url",
          type: "reference",
          collections: ["pages"],
        },
      ],
    },
    Button,
  ],
};
