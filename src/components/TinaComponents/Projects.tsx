import type { PagesPageTemplateSectionsCustom_SectionComponentProjects } from "tina/__generated__/types";
import ProjectCard from "../ProjectCard";
import { tinaField } from "tinacms/dist/react";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

type ProjectsProps = {
  data: PagesPageTemplateSectionsCustom_SectionComponentProjects;
};

export default function Projects({ data }: ProjectsProps) {
  const [animationParent] = useAutoAnimate();
  const [projectStatus, setProjectStatus] = useState("All");

  return (
    <section className="layout pb-48">
      <div className="flex justify-between items-center max-sm:flex-col gap-10 lg:mb-20 md:mb-14 mb-10">
        <h2 data-tina-field={tinaField(data, "sectionTitle")}>
          {data.sectionTitle}
        </h2>
        <Select onValueChange={setProjectStatus}>
          <SelectTrigger className="md:max-w-[250px] w-full font-SpaceGrotesk font-bold uppercase text-base text-theme-white bg-transparent border-r-0 border-l-0 border-t-0 border-b-2 border-b-theme-green rounded-none">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent className="bg-theme-darkGrey text-theme-white border-none text-sm font-semibold uppercase">
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Live">Live</SelectItem>
            <SelectItem value="In Progress">In Progress</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16"
        ref={animationParent}
      >
        {data?.project
          ?.filter((project) => project?.caterogy?.includes(projectStatus))
          .map((project, index) => {
            return project && <ProjectCard data={project} key={index} />;
          })}
      </div>
    </section>
  );
}
