import { Box } from '@chakra-ui/react';
import { OvalIcon, CircleIcon } from '@/components/shared/backgroundIcons';
import { OptimizedImage } from '@/components/shared/image';
import { Image } from '@chakra-ui/react';
import { Maybe } from 'graphql/jsutils/Maybe';

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
          <Image
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
            width={[200, 200, 200, 308]}
            height={[200, 200, 200, 350]}
          />
          <Image
            src={src}
            alt={projectTitle ? projectTitle : 'Project'}
            objectFit="cover"
            objectPosition={'bottom'}
            position="absolute"
            top="0"
            right="10"
            margin="auto"
            zIndex={3}
            width={[200, 150, 150, 308]}
            height={[200, 150, 150, 400]}
          />
        </>
      ) : (
        <Image
          src={src}
          alt={projectTitle ? projectTitle : 'Project'}
          objectFit="cover"
          objectPosition={'top'}
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          margin="auto"
          width={[275, 275, 349]}
          height={[225, 225, 450]}
        />
      )}
    </Box>
  );
}
