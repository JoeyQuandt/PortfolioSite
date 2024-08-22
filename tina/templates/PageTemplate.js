import { RichText } from "./components/RichText";
import { Button } from "./components/Button";
import { Image } from "./components/Image";
import { Hero } from "./components/Hero";

export const PageTemplate = {
  label: "Page Template",
  name: "PageTemplate",
  format: "mdx",
  fields: [
    {
      name: "sections",
      label: "Page Layout",
      description: "Layout section of the site",
      type: "object",
      list: true,
      templates: [
        {
          label: "Page Section",
          name: "custom_section",
          type: "object",
          ui: {
            itemProps: (item) => {
              // Field values are accessed by item?.<Field name>
              return {
                label: `${item.SectionTitle ? `Section: ${item.SectionTitle}` : "Section"}`,
              };
            },
          },
          fields: [
            {
              label: "Section Title",
              name: "SectionTitle",
              type: "string",
            },
            {
              type: "string",
              name: "BackgroundColor",
              label: "Background Color",
              description: "Edit the page background color here",
              ui: {
                component: "color",
                colorFormat: "hex",
                colors: ["#EC4815", "#241748", "#B4F4E0", "#E6FAF8"],
                widget: "sketch",
              },
            },
            {
              name: "component",
              label: "Page Section",
              description: "All the custom components from tina cms",
              list: true,
              type: "object",
              templates: [RichText, Button, Image, Hero],
            },
          ],
        },
      ],
    },
  ],
};
