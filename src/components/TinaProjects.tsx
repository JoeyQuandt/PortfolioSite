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
import type { ProjectsQuery } from "tina/__generated__/types";
type TinaProjectData = {
  query: string;
  variables: object;
  data: ProjectsQuery;
};

export const TinaProject = ({ tinaData }: { tinaData: TinaProjectData }) => {
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
          components={{
            h2: (props: { children: React.ReactNode } | undefined) => (
              <h1 className="mb-10">{props?.children}</h1>
            ),
            h3: (props: { children: React.ReactNode } | undefined) => (
              <h3 className="mb-8">{props?.children}</h3>
            ),
            h4: (props: { children: React.ReactNode } | undefined) => (
              <h4 className="mb-6">{props?.children}</h4>
            ),
            h5: (props: { children: React.ReactNode } | undefined) => (
              <h5 className="mb-4">{props?.children}</h5>
            ),
            p: (props: { children: React.ReactNode } | undefined) => (
              <p className="mb-5">{props?.children}</p>
            ),
            a: (
              props: { url: string; children: React.ReactNode } | undefined
            ) => (
              <a
                className="text-theme-green underline cursor-pointer"
                href={props?.url}
              >
                {props?.children}
              </a>
            ),
            ol: (props: { children: React.ReactNode } | undefined) => (
              <ol className="list-decimal pl-5 mb-5">{props?.children}</ol>
            ),
            ul: (props: { children: React.ReactNode } | undefined) => (
              <ul className="list-disc pl-5 mb-5">{props?.children}</ul>
            ),
            li: (props: { children: React.ReactNode } | undefined) => (
              <li className="mb-2">{props?.children}</li>
            ),
            img: (props: { url: string; alt?: string } | undefined) => (
              <img src={props?.url} alt={props?.alt} className="mb-8" />
            ),
          }}
        />
      </section>
    </section>
  );
};
