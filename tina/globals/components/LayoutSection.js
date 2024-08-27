export const LayoutSection = {
  label: "layout section",
  name: "layout_section",
  path: "content/shared",
  format: "mdx",
  type: "object",
  ui: {
    global: true,
  },
  fields: [
    {
      name: "navigation_items",
      label: "Navigatie",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.navigation_link || "Navigation item"}` };
        },
      },
      fields: [
        {
          label: "Navigatie Link",
          name: "navigation_link",
          type: "string",
        },
      ],
    },
    {
      name: "Footer_text",
      label: "Footer text",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item.text || "Footer text"}` };
        },
      },
      fields: [
        {
          type: "string",
          label: "tekst",
          name: "text",
        },
        {
          type: "string",
          label: "href",
          name: "Link",
        },
      ],
    },
  ],
};
