import { tinaField } from "tinacms/dist/react";
import CustomButton from "./CustomButton";
import Oval from "@/icons/oval";
import OvalTwo from "@/icons/Oval_two";
import RichText from "./RichText";

export default function Hero({ data }) {
  return (
    <section className=" pt-40 pb-9 relative">
      <Oval className="absolute left-[-200px] lg:left-0" />
      <OvalTwo className="absolute right-[-50px] top-64 lg:hidden" />
      <div className="flex-col lg:flex-row-reverse items-center text-center lg:text-left flex layout z-10 relative">
        <OvalTwo className="absolute bottom-24 right-96 max-lg:hidden" />
        <img
          src={data.image}
          data-tina-field={tinaField(data, "image")}
          className=" max-w-[175px] lg:max-w-[445px] lg:h-full object-contain bg-custom-gradient mb-9"
          alt="hero image"
        />
        <div className="flex flex-col">
          <RichText
            data={data.title}
            data-tina-field={tinaField(data, "title")}
          />
          <p
            data-tina-field={tinaField(data, "description")}
            className="mb-9 mt-6 lg:max-w-[445px]"
          >
            {data.description}
          </p>
          <CustomButton data={data.Button} />
        </div>
      </div>
    </section>
  );
}
