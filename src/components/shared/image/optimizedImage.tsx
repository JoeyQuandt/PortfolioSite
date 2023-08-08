import { chakra } from '@chakra-ui/react';
import Image from 'next/image';

export const OptimizedImage = chakra(Image, {
  shouldForwardProp: prop => ['height', 'width', 'quality', 'src', 'alt'].includes(prop),
});
