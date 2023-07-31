import { Box, Container, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Footer } from '../features/layout/Footer';
import { Header } from '../features/layout/Header';

import { OvalIcon,CircleIcon } from '../shared/backgroundIcons';




interface BaseLayoutProps {
  children?: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Flex flexDirection="column" height="100vh" paddingInline={[4,8,8,44]} position="relative">
      <Header />
      <Box as="main" flex="1 0 auto" display="block">
        <Container>{children}</Container>
      </Box>
      <Footer />
      <OvalIcon position="absolute" top="0" left="0"/>
      <CircleIcon position="absolute" bottom="0" right="0"/>
    </Flex>
  );
}
