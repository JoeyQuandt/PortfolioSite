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
          return { label: `${item?.navigation_link || "Navigation item"}` };
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
