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
      name: "logo",
      label: "Logo",
      type: "string",
    },
    {
      name: "navigation_items",
      label: "Navigatie",
      type: "object",
      list: true,
      ui: {
        itemProps: (item: { navigation_link: string }) => {
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
          label: "Icon Type",
          name: "iconType",
          type: "string",
          options: ["Github", "Linkedin", "Mail"],
        },
      ],
    },
    {
      label: "Footer Title",
      name: "footerTitle",
      type: "string",
    },
    {
      label: "Footer Text",
      name: "footerText",
      type: "rich-text",
    },
  ],
};
