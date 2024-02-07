import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { Flex, Grid, Heading, Stack } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';
import { useState } from 'react';
import { CustomSelect } from '@/components/shared/selectComponent';
import { useAutoAnimate } from '@formkit/auto-animate/react';

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  // console.log(slice);
  // return (
  //   <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
  //     Placeholder component for projects (variation: {slice.variation}) Slices
  //   </section>

  // );
  const [selectedOption, setSelectOption] = useState('All');
  const [animationParent] = useAutoAnimate<HTMLDivElement>();

  const projectsData = slice?.items;

  const filterdCaterogy =
    projectsData?.map(item => ({
      value: item.project_tag,
      label: item.project_tag,
    })) ?? [];

  const caterogyData = [
    {
      value: 'All',
      label: 'All',
    },
    ...filterdCaterogy,
  ];

  const filteredData = projectsData?.filter(item => item.project_tag === selectedOption);

  return (
    <Stack color="white" bgColor="primary" marginBlock={{ lg: 24 }}>
      <Flex
        flexDirection={['column', 'column', 'row']}
        justifyContent="space-between"
        marginBottom={10}
        alignItems="center"
      >
        <Heading as="h2" fontSize={[40, 50, 60]}>
          Projects
        </Heading>
        <CustomSelect
          defaultValue="All"
          caterogyData={caterogyData}
          handleChange={e => setSelectOption(e.value)}
          maxWidth="400px"
        />
      </Flex>
      <Grid
        templateColumns={{ md: 'repeat(2,1fr)' }}
        gap={5}
        ref={animationParent}
        minHeight="800px"
      >
        {selectedOption === 'All'
          ? projectsData?.map(item => {
              return (
                <ProjectCard
                  key={crypto.randomUUID()}
                  project_image={item.project_image}
                  project_title={item.project_title}
                  project_show_buttons={item.project_show_buttons}
                  project_description={item.project_description}
                  project_tag={item.project_tag}
                  project_github={item.project_github}
                  project_website={item.project_website}
                  project_show_two_images={item.project_show_two_images}
                />
              );
            })
          : filteredData?.map(item => {
              return (
                <ProjectCard
                  key={crypto.randomUUID()}
                  project_image={item.project_image}
                  project_title={item.project_title}
                  project_show_buttons={item.project_show_buttons}
                  project_description={item.project_description}
                  project_tag={item.project_tag}
                  project_github={item.project_github}
                  project_website={item.project_website}
                  project_show_two_images={item.project_show_two_images}
                />
              );
            })}
      </Grid>
    </Stack>
  );
};

export default Projects;
