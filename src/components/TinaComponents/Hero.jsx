import { tinaField } from "tinacms/dist/react";
import CustomButton from "./CustomButton";

export default function Hero({ data }) {
  return (
    <section className="text-center items-center pt-24 pb-9">
      <div className="flex-col items-center flex gap-5 layout">
        <img
          src={data.image}
          data-tina-field={tinaField(data, "image")}
          className="max-h-[243px] max-w-[175px] object-contain bg-custom-gradient"
          alt="hero image"
        />
        <h1 data-tina-field={tinaField(data, "title")}>{data.title}</h1>
        <p data-tina-field={tinaField(data, "description")}>
          {data.description}
        </p>
        <CustomButton data={data.Button} />
      </div>
    </section>
  );
}
