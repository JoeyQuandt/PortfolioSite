import { Separator } from "../ui/separator";
import { tinaField } from "tinacms/dist/react";
import Oval from "@/icons/oval";

export default function Skills({ data }) {
  return (
    <section className="layout pb-44 relative">
      <Oval className="rotate-180 right-[-250px] bottom-28 lg:bottom-20 absolute" />
      <Separator className="mb-16" />
      <ul
        data-tina-field={tinaField(data, "skill")}
        className="grid max-md:place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[100px] max-md:mb-16"
      >
        {data.skill.map((item, index) => {
          return (
            <li
              className="text-5xl leading-[56px] text-white font-bold"
              key={index}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <Separator className="max-md:block hidden" />
    </section>
  );
}