import { RichText } from "./components/RichText";
import { Button } from "./components/Button";
import { Image } from "./components/Image";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

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
            itemProps: (item: { SectionTitle?: string }) => {
              // Field values are accessed by item?.<Field name>
              return {
                label: `${
                  item.SectionTitle
                    ? `Section: ${item.SectionTitle}`
                    : "Section"
                }`,
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
              name: "component",
              label: "Page Section",
              description: "All the custom components from tina cms",
              list: true,
              type: "object",
              templates: [Hero, Skills, Projects, RichText],
            },
          ],
        },
      ],
    },
  ],
};
