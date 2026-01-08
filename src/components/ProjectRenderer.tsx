import React from "react";
import { useTina, tinaField } from "tinacms/dist/react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

import { Undo2 } from "lucide-react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { richTextComponents } from "./RichTextComponents";
import type { ProjectsQuery } from "tina/__generated__/types";
type TinaProjectData = {
  query: string;
  variables: object;
  data: ProjectsQuery;
};

const ProjectRenderer = ({ tinaData }: { tinaData: TinaProjectData }) => {
  const { data } = useTina(tinaData);
  return (
    <section className="layout pt-40 pb-32">
      <div className="flex justify-between items-center mb-8">
        <Breadcrumb>
          <BreadcrumbList className="text-base">
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-theme-white hover:text-theme-green"
                href="/"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-theme-white hover:text-theme-green"
                href="/"
              >
                Projects
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-theme-green">
                {data.projects.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <a href="/">
          <Button
            size="icon"
            aria-label="Return"
            className="bg-theme-green rounded-lg hover:bg-theme-white"
          >
            <Undo2 />
          </Button>
        </a>
      </div>
      <section>
        <img
          src={data.projects.hero ?? undefined}
          data-tina-field={tinaField(data.projects, "hero")}
          className="w-full max-h-[500px] object-cover bg-custom-gradient pr-6 pl-6 mb-20"
          alt="hero"
        />
        <TinaMarkdown
          content={data.projects.text}
          components={richTextComponents}
        />
      </section>
    </section>
  );
};

export default ProjectRenderer;
