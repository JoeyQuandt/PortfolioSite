import { Flex, Grid, Heading, Stack } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';
import { PageProject } from '@/gql/graphql';
import { useState } from 'react';
import { CustomSelect } from '@/components/shared/selectComponent';
import { useAutoAnimate } from '@formkit/auto-animate/react';

type ProjectsProps = {
  content: PageProject | undefined;
};

export function Projects({ content }: ProjectsProps) {
  const [selectedOption, setSelectOption] = useState('All');
  const [animationParent] = useAutoAnimate<HTMLDivElement>();

  const projectsData = content?.projects;

  const filterdCaterogy =
    projectsData?.map(item => ({
      value: item.caterogy,
      label: item.caterogy,
    })) ?? [];

  const caterogyData = [
    {
      value: 'All',
      label: 'All',
    },
    ...filterdCaterogy,
  ];

  const filteredData = projectsData?.filter(item => item.caterogy === selectedOption);

  return (
    <Stack color="white" marginBlock={{ lg: 24 }}>
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
                  id={item.id}
                  stage={item.stage}
                  key={crypto.randomUUID()}
                  projectImage={item.projectImage}
                  projectTitle={item.projectTitle}
                  projectShowButtons={item.projectShowButtons}
                  projectTag={item.projectTag}
                  github={item.github}
                  website={item.website}
                  showTwoImages={item.showTwoImages}
                />
              );
            })
          : filteredData?.map(item => {
              return (
                <ProjectCard
                  id={item.id}
                  stage={item.stage}
                  key={crypto.randomUUID()}
                  projectImage={item.projectImage}
                  projectTitle={item.projectTitle}
                  projectShowButtons={item.projectShowButtons}
                  projectTag={item.projectTag}
                  github={item.github}
                  website={item.website}
                  showTwoImages={item.showTwoImages}
                />
              );
            })}
      </Grid>
    </Stack>
  );
}
