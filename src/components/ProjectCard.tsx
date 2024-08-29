import type { PagesPageTemplateSectionsCustom_SectionComponentProjectsProject } from "tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import CustomButton from "./TinaComponents/CustomButton";

type ProjectCardProps = {
  data: PagesPageTemplateSectionsCustom_SectionComponentProjectsProject;
};

export default function ProjectCard({ data, ...props }: ProjectCardProps) {
  return (
    <div {...props}>
      <div className="lg:max-h-[545px] relative">
        {data.thumbnail && (
          <img
            src={data.thumbnail}
            alt="Project thumbnail"
            className="mb-5 w-full object-cover"
            data-tina-field={tinaField(data, "thumbnail")}
          />
        )}
        {/*Hover Efffect*/}
        <div className="hidden absolute opacity-0 hover:opacity-75 ease-in duration-150 inset-0 bg-black text-white z-40 lg:flex flex-col justify-center items-center gap-48">
          {data?.buttons?.map((item, index) => {
            return (
              <CustomButton
                data={item?.Button}
                key={index}
                className="opacity-100"
              />
            );
          })}
        </div>
      </div>
      <h3 data-tina-field={tinaField(data, "title")} className="uppercase mb-2">
        {data.title}
      </h3>
      <ul
        data-tina-field={tinaField(data, "skills")}
        className="uppercase font-medium text-lg flex gap-3 max-lg:mb-5"
      >
        {data?.skills?.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <div className="max-lg:flex hidden gap-8">
        {data?.buttons?.map((item, index) => {
          return (
            <CustomButton
              data={item?.Button}
              key={index}
              className="opacity-100"
            />
          );
        })}
      </div>
    </div>
  );
}
