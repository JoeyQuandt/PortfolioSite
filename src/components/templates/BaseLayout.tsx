import { Box, Container, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Header } from '../features/layout/Header';
import { Footer } from '../features/layout/Footer';

import { CircleIcon, OvalIcon } from '../shared/backgroundIcons';

interface BaseLayoutProps {
  children?: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Flex flexDirection="column" position="relative">
      <Header />
      <Box as="main" flex="1 0 auto" display="block" paddingInline={[4, 8, 8, 44]}>
        <Container>{children}</Container>
      </Box>
      <Footer />
      <OvalIcon position="absolute" top="0" left="0" />
      <CircleIcon position="absolute" top="50%" right="0" />
      <OvalIcon position="absolute" bottom="2.5%" left="0" />
    </Flex>
  );
}
