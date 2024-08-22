import { Button } from "./Button";
import { Image } from "./Image";

export const RichText = {
  type: "object",
  label: "richtext",
  name: "richtext",
  fields: [
    {
      name: "text",
      label: "text",
      type: "rich-text",
      templates: [Button, Image],
    },
  ],
};
