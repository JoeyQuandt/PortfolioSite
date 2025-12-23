import { filterSectionsBySuffix } from "@/lib/utils";
import TinaCMSComponent from "./TinaSection";
import type {
  PagesQuery,
  ProjectsQuery,
  PagesPageTemplateSections,
} from "tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

type TinaDataType = {
  query: string;
  variables: object;
  data: ProjectsQuery | PagesQuery;
};

type TinaCMSProps = {
  tinaData: TinaDataType;
  type: "projects" | "pages";
};

export default function TinaCMS({ tinaData, type }: TinaCMSProps) {
  const { data } = useTina(tinaData);
  let dataType =
    type === "pages"
      ? (data as PagesQuery).pages
      : (data as ProjectsQuery).projects;

  //Helper to filter out "section"
  const sectionsEndingWithUnderscoreSection = filterSectionsBySuffix(dataType, [
    "section",
  ]);
  return (
    <div className="flex flex-col relative top-0 h-fit">
      {sectionsEndingWithUnderscoreSection.map(
        (section: PagesPageTemplateSections, index: number) => {
          return <TinaCMSComponent key={`SECTION-${index}`} child={section} />;
        }
      )}
    </div>
  );
}
