import { InternalLink } from "@/lib/utils";
import { Button } from "../ui/button";
import { tinaField } from "tinacms/dist/react";

export default function CustomButton({ data }) {
  return (
    <Button
      data-tina-field={tinaField(data, "ButtonLabel")}
      buttonLink={
        data?.ButtonLinkExternal ||
        (data?.page_url && InternalLink(data?.page_url?.id))
      }
      buttonLinkType={data?.link}
    >
      {data?.ButtonLabel}
    </Button>
  );
}
