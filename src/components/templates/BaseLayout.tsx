import { Box, Container, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Header } from '../features/layout/Header';
import { Footer } from '../features/layout/Footer';

import { OvalIcon,CircleIcon } from '../shared/backgroundIcons';





interface BaseLayoutProps {
  children?: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Flex flexDirection="column" height="100vh" paddingInline={[4,8,8,44]} position="relative">
      <Header />
      <Box as="main" flex="1 0 auto" display="block">
        <Container >{children}</Container>
      </Box>
      <Footer />
    </Flex>
  );
}
