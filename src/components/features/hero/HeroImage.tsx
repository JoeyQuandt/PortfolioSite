import { Box } from '@chakra-ui/react';
import { OptimizedImage } from '@/components/shared/image';

type HeroImageProps = {
  href: string | undefined;
  alt: string;
};

export function HeroImage({ href, alt }: HeroImageProps) {
  return (
    <Box position="relative">
      <OptimizedImage
        src={href ? href : './images/placeholder.svg'}
        alt={alt}
        objectFit="cover"
        marginBlock={12}
        bgColor="tertiary"
        priority={true}
        quality={70}
        width={383}
        height={383}
      />
    </Box>
  );
}
