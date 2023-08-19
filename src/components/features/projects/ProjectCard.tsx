import { Stack, Tag, Flex, Heading } from '@chakra-ui/react';
import { LinkTag } from '@/components/shared/link';
import { ProjectCardBackground } from './ProjectCardBackground';
import { Project } from '@/gql/graphql';

export function ProjectCard({
  projectImage,
  projectTitle,
  projectTag,
  github,
  website,
  projectShowButtons,
  showTwoImages,
}: Project) {
  return (
    <Stack gap={4} marginBottom={10}>
      <ProjectCardBackground
        src={projectImage?.url ? projectImage.url : './images/placeholder.svg'}
        twoImages={showTwoImages ? showTwoImages : false}
        projectTitle={projectTitle}
      />
      <Heading as="h3">{projectTitle}</Heading>
      <Flex flexDirection="row" gap="4">
        {projectTag.map((tag, index) => {
          return (
            <Tag color="gray" key={index} padding="0">
              {tag}
            </Tag>
          );
        })}
      </Flex>
      {projectShowButtons && (
        <Flex gap={4} marginTop={10}>
          <LinkTag href={website ? website : 'https://www.joeyquandt.nl'}>View Project</LinkTag>
          <LinkTag href={github ? github : 'https://github.com/JoeyQuandt'}>View code</LinkTag>
        </Flex>
      )}
    </Stack>
  );
}
