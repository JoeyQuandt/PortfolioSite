import Hero from "./TinaComponents/Hero";
import type { PagesPageTemplateSections } from "tina/__generated__/types";

type TinaCMSComponentTypes = {
  child: PagesPageTemplateSections;
};

const TinaCMSComponent = ({ child }: TinaCMSComponentTypes) => {
  /*Add here all the components from tina cms*/
  const componentMap = {
    sectionComponentHero: Hero,
  };

  return (
    <section>
      {child.component &&
        child.component.map((blok, index) => {
          const typeName = blok?.__typename;
          if (!typeName) {
            return null; // Safeguard in case __typename is undefined
          }

          const match = typeName.match(/([^_]+)$/);
          const componentType = match ? match[1] : null;

          if (!componentType) {
            return null; // Safeguard in case componentType is null
          }

          const Component =
            componentMap[componentType as keyof typeof componentMap];
          if (Component) {
            // Generate a unique key using __typename and index for better stability
            const uniqueKey = `${typeName}-${index}`;
            return (
              <div key={uniqueKey}>
                <Component data={blok} />
              </div>
            );
          }

          return null; // Return null if no matching component is found
        })}
    </section>
  );
};

export default TinaCMSComponent;
