import { useState } from 'react';

import { Stack, Tag, Flex, Heading, Grid, Show, Box } from '@chakra-ui/react';

import { LinkTag } from '@/components/shared/link';
import { OptimizedImage } from '@/components/shared/image';

import { Project } from '@/gql/graphql';
import { FadeInWhenVisible } from '@/utils';

export function ProjectCard({
  projectImage,
  projectTitle,
  projectTag,
  github,
  website,
  projectShowButtons,
}: Project) {
  return (
    <Stack gap={4} marginBottom={10}>
      <OptimizedImage
        src={projectImage?.url ? projectImage.url : './images/placeholder.svg'}
        alt={projectTitle ? projectTitle : 'Project'}
        objectFit="cover"
        priority={true}
        width={1000}
        height={253}
        quality={70}
        minHeight={['253px', '253px', '253px', '400px']}
      />
      <FadeInWhenVisible>
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
          <Flex gap={4} marginTop={10}>
            <LinkTag href={website ? website : 'www.joeyquandt.nl'}>View Project</LinkTag>
            <LinkTag href={github ? github : 'https://github.com/JoeyQuandt'}>View code</LinkTag>
          </Flex>
        )}
      </FadeInWhenVisible>
    </Stack>
  );
}
