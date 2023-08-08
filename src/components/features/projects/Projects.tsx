import { Flex, Grid, Heading, Input, Stack, Textarea } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';
import { LinkTag } from '@/components/shared/link';
import { PageProject, Project } from '@/gql/graphql';

type ProjectsProps = {
  content: PageProject | undefined;
};

export function Projects({ content }: ProjectsProps) {
  const projectsData = content?.projects;
  return (
    <Stack color="white" marginBlock={{ lg: 24 }}>
      <Flex justifyContent="space-between" marginBottom={10} alignItems="center">
        <Heading as="h2" fontSize={[40, 50, 60]}>
          Projects
        </Heading>
        <LinkTag href="mailto: joeyquandt@outlook.com">Contact Me</LinkTag>
      </Flex>
      <Grid templateColumns={{ md: 'repeat(2,1fr)' }} gap={5}>
        {projectsData?.map(item => {
          return (
            <ProjectCard
              key={crypto.randomUUID()}
              projectImage={item.projectImage}
              projectTitle={item.projectTitle}
              projectShowButtons={item.projectShowButtons}
              projectTag={item.projectTag}
              github={item.github}
              website={item.website}
            />
          );
        })}
      </Grid>
    </Stack>
  );
}
