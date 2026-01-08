import { filterSectionsBySuffix } from "@/lib/utils";
import { CMS_SUFFIXES } from "@/lib/constants";
import SectionRenderer from "./SectionRenderer";
import type {
  PagesQuery,
  ProjectsQuery,
  PagesPageTemplateSections,
} from "tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import ProjectRenderer from "./ProjectRenderer";

type TinaPageData = {
  query: string;
  variables: object;
  data: PagesQuery;
};

type TinaProjectData = {
  query: string;
  variables: object;
  data: ProjectsQuery;
};

type PageRendererProps =
  | { type: "pages"; tinaData: TinaPageData }
  | { type: "projects"; tinaData: TinaProjectData };

const TinaPage = ({ tinaData }: { tinaData: TinaPageData }) => {
  const { data } = useTina(tinaData);
  const sectionsEndingWithUnderscoreSection =
    filterSectionsBySuffix<PagesPageTemplateSections>(
      // generic types mismatch between generated fragments and query results
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data.pages as any,
      [CMS_SUFFIXES.SECTION]
    );
  return (
    <>
      {sectionsEndingWithUnderscoreSection.map((section, index) => {
        return <SectionRenderer key={`SECTION-${index}`} child={section} />;
      })}
    </>
  );
};

export default function PageRenderer(props: PageRendererProps) {
  return (
    <div className="flex flex-col relative top-0 h-fit">
      {props.type === "pages" ? (
        <TinaPage tinaData={props.tinaData} />
      ) : (
        <ProjectRenderer tinaData={props.tinaData} />
      )}
    </div>
  );
}
