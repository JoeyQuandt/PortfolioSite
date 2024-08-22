import Hero from "./TinaComponents/Hero";

const TinaCMSComponent = ({ child }) => {
  /*Add here all the components from tina cms*/
  const componentMap = {
    sectionComponentHero: Hero,
  };

  return (
    <section style={{ backgroundColor: child.BackgroundColor }}>
      {child.component &&
        child.component.map((blok) => {
          const typeName = blok.__typename;
          const match = typeName.match(/([^_]+)$/);
          const componentType = match ? match[1] : null;
          const Component = componentMap[componentType];
          if (Component) {
            const uniqueKey = `${blok.__typename + Math.random()}`;
            return (
              <div key={uniqueKey}>
                <Component data={blok} />
              </div>
            );
          }
          return null;
        })}
    </section>
  );
};

export default TinaCMSComponent;
