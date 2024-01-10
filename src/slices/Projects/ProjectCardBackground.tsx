import { Box } from '@chakra-ui/react';
import { OvalIcon, CircleIcon } from '@/components/shared/backgroundIcons';
import { OptimizedImage } from '@/components/shared/image';
import { ImageField } from '@prismicio/client';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Hide, Show } from '@chakra-ui/react';

type ProjectBackgroundProps = {
  src: string;
  projectTitle: Maybe<string> | undefined;
  twoImages: boolean;
};

export function ProjectCardBackground({ src, projectTitle, twoImages }: ProjectBackgroundProps) {
  return (
    <Box
      minH={['253px', '253px', '253px', '487px']}
      bgColor="tertiary"
      position="relative"
      overflow="hidden"
    >
      <CircleIcon position="absolute" top="0" right="0" width="50px" />
      <OvalIcon position="absolute" bottom="0" left="0" width="100px" />
      {twoImages ? (
        <>
          <Hide below="lg">
            <OptimizedImage
              src={src}
              alt={projectTitle ? projectTitle : 'Project'}
              objectFit="cover"
              objectPosition={'top'}
              position="absolute"
              boxShadow="sm"
              bottom="0"
              left="10"
              zIndex={4}
              margin="auto"
              width={308}
              height={300}
            />
            <OptimizedImage
              src={src}
              alt={projectTitle ? projectTitle : 'Project'}
              objectFit="cover"
              objectPosition={'bottom'}
              position="absolute"
              top="0"
              right="10"
              margin="auto"
              zIndex={3}
              width={308}
              height={400}
            />
          </Hide>
          <Hide above="lg">
            <OptimizedImage
              src={src}
              alt={projectTitle ? projectTitle : 'Project'}
              objectFit="cover"
              objectPosition={'top'}
              position="absolute"
              boxShadow="sm"
              bottom="0"
              left="10"
              zIndex={4}
              margin="auto"
              width={200}
              height={200}
            />
            <OptimizedImage
              src={src}
              alt={projectTitle ? projectTitle : 'Project'}
              objectFit="cover"
              objectPosition={'bottom'}
              position="absolute"
              top="0"
              right="10"
              margin="auto"
              zIndex={3}
              width={150}
              height={200}
            />
          </Hide>
        </>
      ) : (
        <>
          <Hide below="lg">
            <OptimizedImage
              src={src}
              alt={projectTitle ? projectTitle : 'Project'}
              objectFit="cover"
              objectPosition={'top'}
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              margin="auto"
              width={349}
              height={450}
            />
          </Hide>
          <Hide above="lg">
            <OptimizedImage
              src={src}
              alt={projectTitle ? projectTitle : 'Project'}
              objectFit="cover"
              objectPosition={'top'}
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              margin="auto"
              width={250}
              height={210}
            />
          </Hide>
        </>
      )}
    </Box>
  );
}
