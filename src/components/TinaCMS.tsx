import { filterSectionsBySuffix } from "@/lib/utils";
import TinaCMSComponent from "./TinaSection";
import type {
  PagesQuery,
  ProjectsQuery,
  PagesPageTemplateSections,
} from "tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TinaProject } from "./TinaProjects";

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

type TinaCMSProps =
  | { type: "pages"; tinaData: TinaPageData }
  | { type: "projects"; tinaData: TinaProjectData };

const TinaPage = ({ tinaData }: { tinaData: TinaPageData }) => {
  const { data } = useTina(tinaData);
  const sectionsEndingWithUnderscoreSection = filterSectionsBySuffix(
    data.pages,
    ["section"]
  );
  return (
    <>
      {sectionsEndingWithUnderscoreSection.map(
        (section: PagesPageTemplateSections, index: number) => {
          return <TinaCMSComponent key={`SECTION-${index}`} child={section} />;
        }
      )}
    </>
  );
};

export default function TinaCMS(props: TinaCMSProps) {
  return (
    <div className="flex flex-col relative top-0 h-fit">
      {props.type === "pages" ? (
        <TinaPage tinaData={props.tinaData} />
      ) : (
        <TinaProject tinaData={props.tinaData} />
      )}
    </div>
  );
}
