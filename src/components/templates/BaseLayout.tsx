import { Box, Container, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Header } from '../features/layout/Header';
import { Footer } from '../features/layout/Footer';

import { OvalIcon } from '../shared/backgroundIcons';

import { createClient } from '@/prismicio';

interface BaseLayoutProps {
  children?: ReactNode;
}

const client = createClient();
const layout = await client.getSingle('layout');

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Flex flexDirection="column" position="relative">
      <Header data={layout.data} />
      <Box as="main" flex="1 0 auto" display="block" paddingInline={[4, 8, 8, 44]}>
        <Container>{children}</Container>
      </Box>
      <Footer data={layout.data} />
      <OvalIcon position="absolute" top="0" left="0" zIndex="6" />
      <OvalIcon position="absolute" bottom="2.5%" left="0" />
    </Flex>
  );
}
