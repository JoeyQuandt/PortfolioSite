import { filterSectionsBySuffix } from "@/lib/utils";
import TinaCMSComponent from "./TinaSection";
import type {
  PagesQuery,
  PagesPageTemplateSections,
} from "tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

type TinaDataType = {
  query: string;
  variables: { [key: string]: any };
  data: PagesQuery;
};

type TinaCMSProps = {
  tinaData: TinaDataType;
};

export default function TinaCMS({ tinaData }: TinaCMSProps) {
  const { data } = useTina(tinaData);

  //Helper to filter out "section"
  const sectionsEndingWithUnderscoreSection = filterSectionsBySuffix(
    data.pages,
    ["section"]
  );
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
