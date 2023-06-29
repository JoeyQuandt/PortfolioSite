import { Box, Container} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface BaseLayoutProps {
  children?: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100%"
      bgImage="url('images/background-image.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      position="relative"
      overflow="hidden"
    >
        <Container>{children}</Container>
    </Box>
  );
}