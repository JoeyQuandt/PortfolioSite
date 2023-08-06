import { useState } from 'react';

import { Stack, Tag, Flex, Heading, Grid, Show, Box } from '@chakra-ui/react';

import { LinkTag } from '@/components/shared/link';

import { Project } from '@/gql/graphql';

export function ProjectCard({
  projectImage,
  projectTitle,
  projectTag,
  github,
  website,
  projectShowButtons,
}: Project) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Stack gap={4} marginBottom={10}>
      <Box
        backgroundImage={projectImage?.url}
        width="100%"
        backgroundSize="cover"
        minHeight={['253px', '253px', '253px', '400px']}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovering && projectShowButtons && (
          <Grid
            placeItems="center"
            height="100%"
            width="100%"
            background="black"
            opacity="0.75"
            filter="auto"
          >
            <Flex flexDirection="column" gap={10} textAlign="center">
              <LinkTag href={website ? website : 'www.joeyquandt.nl'}>View Project</LinkTag>
              <LinkTag href={github ? github : 'https://github.com/JoeyQuandt'}>View code</LinkTag>
            </Flex>
          </Grid>
        )}
      </Box>
      <Heading as="h3">{projectTitle}</Heading>
      <Flex flexDirection="row" gap="4">
        {projectTag.map(tag => {
          return (
            <Tag color="gray" key={crypto.randomUUID()} padding="0">
              {tag}
            </Tag>
          );
        })}
      </Flex>
      {projectShowButtons && (
        <Show below="lg">
          <Flex gap={4}>
            <LinkTag href={website ? website : 'www.joeyquandt.nl'}>View Project</LinkTag>
            <LinkTag href={github ? github : 'https://github.com/JoeyQuandt'}>View code</LinkTag>
          </Flex>
        </Show>
      )}
    </Stack>
  );
}
