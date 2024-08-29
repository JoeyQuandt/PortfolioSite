import { tinaField } from "tinacms/dist/react";
import CustomButton from "../ui/CustomButton";
import Oval from "@/icons/oval";
import OvalTwo from "@/icons/Oval_two";
import RichText from "../ui/RichText";
import type { PagesPageTemplateSectionsCustom_SectionComponentHero } from "tina/__generated__/types";

type HeroProps = {
  data: PagesPageTemplateSectionsCustom_SectionComponentHero;
};

export default function Hero({ data }: HeroProps) {
  return (
    <section className="pt-40 pb-9 md:pb-44 relative">
      <Oval className="absolute left-[-200px] lg:left-0" />
      <OvalTwo className="absolute right-[-50px] top-64 lg:hidden" />
      <div className="flex-col md:flex-row-reverse items-center text-center md:text-left flex layout z-10 relative">
        <OvalTwo className="absolute bottom-0 right-96 max-lg:hidden z-20" />
        <img
          src={data?.image || ""}
          data-tina-field={tinaField(data, "image")}
          className="max-w-[225px] md:min-w-[322px] lg:min-w-[445px] md:min-h-full object-contain bg-custom-gradient mb-9 md:absolute z-10"
          alt="hero"
        />
        <div className="flex flex-col w-full max-md:text-center max-md:items-center">
          <RichText
            data={data.title}
            data-tina-field={tinaField(data, "title")}
            className="lg:max-w-[780px] md:max-w-[400px] max-w-[350px] w-full richtext z-10 relative"
          />
          <p
            data-tina-field={tinaField(data, "description")}
            className="mb-9 mt-6 md:max-w-[445px]"
          >
            {data.description}
          </p>
          <CustomButton data={data.Button} />
        </div>
      </div>
    </section>
  );
}
