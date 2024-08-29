import type { PagesPageTemplateSectionsCustom_SectionComponentProjects } from "tina/__generated__/types";
import ProjectCard from "../ProjectCard";
import { tinaField } from "tinacms/dist/react";

type ProjectsProps = {
  data: PagesPageTemplateSectionsCustom_SectionComponentProjects;
};

export default function Projects({ data }: ProjectsProps) {
  return (
    <section className="layout pb-48">
      <h2
        data-tina-field={tinaField(data, "sectionTitle")}
        className="lg:mb-20 md:mb-14 mb-10"
      >
        {data.sectionTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16">
        {data?.project?.map((project, index) => {
          return project && <ProjectCard data={project} key={index} />;
        })}
      </div>
    </section>
  );
}
