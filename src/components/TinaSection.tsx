import Hero from "./TinaComponents/Hero";
import Skills from "./TinaComponents/Skills";
import Projects from "./TinaComponents/Projects";
import type { PagesPageTemplateSections } from "tina/__generated__/types";
import RichText from "./ui/RichText";

type TinaCMSComponentTypes = {
  child: PagesPageTemplateSections;
};

const TinaCMSComponent = ({ child }: TinaCMSComponentTypes) => {
  console.log(child);
  /*Add here all the components from tina cms*/
  const componentMap = {
    sectionComponentHero: Hero,
    sectionComponentSkills: Skills,
    sectionComponentProjects: Projects,
    sectionComponentRichtext: RichText,
  };

  return (
    <section>
      {child.component &&
        child.component.map((blok, index) => {
          const typeName = blok?.__typename;
          if (!typeName) {
            return null;
          }

          const match = typeName.match(/([^_]+)$/);
          const componentType = match ? match[1] : null;

          if (!componentType) {
            return null;
          }

          const Component =
            componentMap[componentType as keyof typeof componentMap];
          if (Component) {
            const uniqueKey = `${typeName}-${index}`;
            return (
              <div key={uniqueKey}>
                <Component data={blok as any} />
              </div>
            );
          }

          return null;
        })}
    </section>
  );
};

export default TinaCMSComponent;
