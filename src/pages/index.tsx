import { Divider, Heading, Show, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Hero } from '@/components/features/hero';
import { Skills } from '@/components/features/skills';
import { Projects } from '@/components/features/projects';

import { findObjectInArray } from '@/utils/findObjectInArray';
import { useQuery, gql } from '@apollo/client';
import { GET_PAGE_CONTENT } from '@/gql';

const GET_CONTENT = gql`
  ${GET_PAGE_CONTENT}
`;

const Page: NextPage = () => {
  const { data } = useQuery(GET_CONTENT);
  return (
    <>
      <NextSeo title="Homepage" description="Joey Quandt Front end developer portfolio site" />
      <Stack spacing="4">
        <Hero content={findObjectInArray(data.pageContent.pageContentHome, 'PageHero')} />
        <Divider />
        <Skills content={findObjectInArray(data.pageContent.pageContentHome, 'PageSkill')} />
        <Show below="lg">
          <Divider />
        </Show>
        <Projects content={findObjectInArray(data.pageContent.pageContentHome, 'PageProject')} />
      </Stack>
    </>
  );
};

export default Page;
