import { Flex, Grid, Heading, Stack } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';
import { PageProject } from '@/gql/graphql';
import { useState } from 'react';
import { CustomSelect } from '@/components/shared/selectComponent';

type ProjectsProps = {
  content: PageProject | undefined;
};

export function Projects({ content }: ProjectsProps) {
  const [selectedOption, setSelectOption] = useState('All');

  const projectsData = content?.projects;

  const filterdCaterogy =
    projectsData?.map(item => ({
      value: item.caterogy,
      label: item.caterogy,
    })) ?? [];

  const caterogyData = [
    ...filterdCaterogy,
    {
      value: 'All',
      label: 'All',
    },
  ];

  const filteredData = projectsData?.filter(item => item.caterogy === selectedOption);

  return (
    <Stack color="white" marginBlock={{ lg: 24 }}>
      <Flex justifyContent="space-between" marginBottom={10} alignItems="center">
        <Heading as="h2" fontSize={[40, 50, 60]}>
          Projects
        </Heading>
      </Flex>
      <CustomSelect
        defaultValue="All"
        caterogyData={caterogyData}
        handleChange={e => setSelectOption(e.value)}
      />
      <Grid templateColumns={{ md: 'repeat(2,1fr)' }} gap={5}>
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
