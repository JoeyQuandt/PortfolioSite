import { filterSectionsBySuffix } from "@/lib/utils";
import TinaCMSComponent from "./TinaSection";
import { useTina } from "tinacms/dist/react";

export default function TinaCMS({ tinaData }) {
  const { data } = useTina(tinaData);

  //Helper to filter out "section"
  const sectionsEndingWithUnderscoreSection = filterSectionsBySuffix(
    data.pages,
    ["section"]
  );
  return (
    <div className="flex flex-col relative top-0 h-fit">
      {sectionsEndingWithUnderscoreSection.map((section, i) => {
        return (
          <TinaCMSComponent key={`SECTION-${i}`} child={section} index={i} />
        );
      })}
    </div>
  );
}
