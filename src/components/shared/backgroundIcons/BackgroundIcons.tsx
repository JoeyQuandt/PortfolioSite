import { Image } from '@chakra-ui/react';

export function OvalIcon({ ...props }) {
  return (
    <Image
      src="./oval.svg"
      alt="background-icon"
      width={{ lg: '300px' }}
      zIndex={{ lg: 3 }}
      {...props}
    />
  );
}

export function CircleIcon({ ...props }) {
  return (
    <Image
      src="./circle.svg"
      alt="background-icon"
      width={{ lg: '100px' }}
      zIndex={{ lg: 3 }}
      {...props}
    />
  );
}
