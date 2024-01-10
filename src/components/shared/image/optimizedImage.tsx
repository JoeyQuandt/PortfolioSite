import { chakra, ChakraProps } from '@chakra-ui/react';
import { ImageField } from '@prismicio/client';
import Image from 'next/image';

interface OptimizedImageProps extends ChakraProps {
  src: any;
  alt: string | ImageField<never>;
}

export const OptimizedImage = chakra(Image, {
  shouldForwardProp: prop => ['fill', 'height', 'width', 'quality', 'src', 'alt'].includes(prop),
}) as React.FC<OptimizedImageProps>;
