import { Button } from "./Button";
import { Image } from "./Image";

export const Hero = {
  label: "Hero",
  name: "Hero",
  type: "object",
  fields: [
    {
      label: "Image",
      name: "image",
      type: "image",
    },
    {
      label: "Title",
      name: "title",
      type: "rich-text",
    },
    {
      label: "Description",
      name: "description",
      type: "string",
      component: "textarea",
    },
    Button,
  ],
};
