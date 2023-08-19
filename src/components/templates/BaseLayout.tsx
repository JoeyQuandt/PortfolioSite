import { Box, Container, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Header } from '../features/layout/Header';
import { Footer } from '../features/layout/Footer';

import { CircleIcon, OvalIcon } from '../shared/backgroundIcons';

import { useQuery, gql } from '@apollo/client';
import { findObjectInArray } from '@/utils/findObjectInArray';
import { LoadingPage, ErrorPage } from '.';
import { GET_PAGE_CONTENT } from '@/gql/queries';

const GET_CONTENT = gql`
  ${GET_PAGE_CONTENT}
`;

interface BaseLayoutProps {
  children?: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  const { loading, error, data } = useQuery(GET_CONTENT);
  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <Flex flexDirection="column" position="relative">
      <Header />
      <Box as="main" flex="1 0 auto" display="block" paddingInline={[4, 8, 8, 44]}>
        <Container>{children}</Container>
      </Box>
      <Footer content={findObjectInArray(data.pageContent.pageContentHome, 'PageContact')} />
      <OvalIcon position="absolute" top="0" left="0" />
      <CircleIcon position="absolute" top="50%" right="0" />
      <OvalIcon position="absolute" bottom="2.5%" left="0" />
    </Flex>
  );
}
