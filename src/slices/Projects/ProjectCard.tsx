import { Stack, Tag, Flex, Heading } from '@chakra-ui/react';
import { LinkTag } from '@/components/shared/link';
import { ProjectCardBackground } from './ProjectCardBackground';
import { PrismicRichText } from '@prismicio/react';
import { Content, isFilled } from '@prismicio/client';

export type ProjectProps = Content.ProjectsSliceDefaultItem;

export function ProjectCard({
  project_image,
  project_title,
  project_show_buttons,
  project_github,
  project_description,
  project_website,
  project_show_two_images,
}: ProjectProps) {
  return (
    <Stack gap={4} marginBottom={10}>
      <ProjectCardBackground
        src={project_image.url ? project_image.url : './images/placeholder.svg'}
        twoImages={project_show_two_images ? project_show_two_images : false}
        projectTitle={project_title}
      />
      <Heading as="h3">{project_title}</Heading>
      <Flex flexDirection="row" gap="4">
        {isFilled.richText(project_description) && (
          <PrismicRichText
            field={project_description}
            components={{
              list: ({ children }) => <Flex gap="5">{children}</Flex>,
              listItem: ({ children }) => (
                <Tag color="gray" padding="0">
                  {children}
                </Tag>
              ),
            }}
          />
        )}
      </Flex>
      {project_show_buttons && (
        <Flex gap={4} marginTop={10}>
          {isFilled.link(project_website) && <LinkTag href={project_website.url}>Website</LinkTag>}
          {isFilled.link(project_github) && <LinkTag href={project_github.url}>Github</LinkTag>}
        </Flex>
      )}
    </Stack>
  );
}
