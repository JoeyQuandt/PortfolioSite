import { TextField, ReferenceField } from "tinacms";
import React from "react";

export const Button = {
  type: "object",
  label: "Button",
  name: "Button",
  ui: {
    defaultItem: {
      ButtonLabel: "Button",
    },
  },
  fields: [
    {
      name: "ButtonLabel",
      label: "Button Label",
      type: "string",
    },
    {
      name: "link",
      label: "Link",
      type: "string",
      options: [
        {
          label: "External",
          value: "external",
        },
        {
          label: "Page",
          value: "page",
        },
      ],
    },
    {
      name: "ButtonLinkExternal",
      label: "Button Link External",
      type: "string",
      ui: {
        /*conditional check*/
        component: (props) => {
          const link = React.useMemo(() => {
            let fieldName = props.field.name;
            fieldName =
              fieldName.substring(0, fieldName.lastIndexOf(".")) || fieldName;

            const fieldValue = fieldName
              .split(".")
              .reduce((o, i) => o[i], props.tinaForm.values);
            if (fieldValue && fieldValue.link) {
              return fieldValue.link;
            } else {
              return undefined;
            }
          }, [props.tinaForm.values]);

          if (link === undefined || link !== "external") {
            return null;
          }
          return TextField(props);
        },
      },
    },
    {
      name: "page_url",
      label: "ButtonLink",
      type: "reference",
      collections: ["pages"],
      ui: {
        /*conditional check*/
        component: (props) => {
          if (props.tinaForm.values === undefined) {
            undefined;
          } else {
            const link = React.useMemo(() => {
              let fieldName = props.field.name;
              fieldName =
                fieldName.substring(0, fieldName.lastIndexOf(".")) || fieldName;

              const fieldValue = fieldName
                .split(".")
                .reduce((o, i) => o[i], props.tinaForm.values);

              if (fieldValue && fieldValue.link) {
                return fieldValue.link;
              } else {
                return undefined;
              }
            }, [props.tinaForm.values]);

            if (link === undefined || link !== "page") {
              return null;
            }

            return ReferenceField(props);
          }
        },
      },
    },
  ],
};
