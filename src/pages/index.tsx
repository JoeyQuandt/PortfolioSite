import { Divider, Heading, Show, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Hero } from '@/components/features/hero';
import { Skills } from '@/components/features/skills';
import { Projects } from '@/components/features/projects';

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
        ... on PageProject {
          projects {
            ... on Project {
              projectShowButtons
              projectImage {
                url
              }
              projectTitle
              projectTag
              website
              github
            }
          }
        }
      }
    }
  }
`;

const Page: NextPage = () => {
  const { loading, error, data } = useQuery(GET_CONTENT);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

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
