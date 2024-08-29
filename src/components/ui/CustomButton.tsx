import { InternalLink } from "@/lib/utils";
import { Button } from "./button";
import { tinaField } from "tinacms/dist/react";
import type {
  PagesPageTemplateSectionsCustom_SectionComponentProjectsProjectButtonsButton,
  PagesPageTemplateSectionsCustom_SectionComponentHeroButton,
  Maybe,
} from "tina/__generated__/types";

type CustomButtonProps = {
  data:
    | Maybe<PagesPageTemplateSectionsCustom_SectionComponentProjectsProjectButtonsButton>
    | Maybe<PagesPageTemplateSectionsCustom_SectionComponentHeroButton>
    | undefined;
  className?: string;
};

export default function CustomButton({
  data,
  className,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      data-tina-field={tinaField(data, "ButtonLabel")}
      buttonLink={
        data?.ButtonLinkExternal ||
        (data?.page_url && InternalLink(data?.page_url?.id)) ||
        undefined
      }
      buttonLinkType={data?.link || undefined}
      className={className}
      {...props}
    >
      {data?.ButtonLabel}
    </Button>
  );
}
