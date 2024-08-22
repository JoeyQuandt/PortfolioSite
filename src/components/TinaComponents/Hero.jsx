import { tinaField } from "tinacms/dist/react";

export default function Hero({ data }) {
  return (
    <div className="py-32 text-center items-center bg-slate-400">
      <div className="flex-col flex gap-5">
        <h1 data-tina-field={tinaField(data, "title")}>{data.title}</h1>
      </div>
    </div>
  );
}
