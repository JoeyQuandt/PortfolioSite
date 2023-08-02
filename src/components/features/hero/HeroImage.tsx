import { Box, Image } from "@chakra-ui/react";

type HeroImageProps = {
  href: string;
  alt: string;
};

export function HeroImage({ href, alt }: HeroImageProps) {
  return (
    <Box position="relative" zIndex={2}>
      <Image
        src={href}
        alt={alt}
        objectFit="cover"
        width="100%"
        height="100%"
        marginBlock={12}
        bgColor="tertiary"
      />
    </Box>
  );
}
