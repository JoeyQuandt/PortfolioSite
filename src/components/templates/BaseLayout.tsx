import { Box, Container, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Header } from '../features/layout/Header';
import { Footer } from '../features/layout/Footer';

import { CircleIcon, OvalIcon } from '../shared/backgroundIcons';

import { useQuery, gql } from '@apollo/client';
import { findObjectInArray } from '@/utils/findObjectInArray';

const GET_CONTENT = gql`
  query MyQuery {
    pageContent(where: { id: "clkwsyp6d93ip0auv8sc9obo8" }) {
      pageContentHome {
        ... on PageHero {
          heroHeading
          heroText
          heroImage {
            fileName
            url
          }
        }
        ... on PageSkill {
          skills {
            ... on Skill {
              pageSkillSubTitle
              skillTitle
            }
          }
        }
        ... on PageContact {
          contactText
          contactTitle
        }
      }
    }
  }
`;

interface BaseLayoutProps {
  children?: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  const { loading, error, data } = useQuery(GET_CONTENT);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

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
