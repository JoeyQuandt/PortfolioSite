import { Divider, Heading, Show, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Hero } from '@/components/features/hero';
import { Skills } from '@/components/features/skills';
import { Projects } from '@/components/features/projects';

type PageProps = {};

const Page: NextPage<PageProps> = () => (
  <>
    <NextSeo title="Homepage" description="Joey Quandt Front end developer portfolio site" />
    <Stack spacing="4">
      <Hero />
      <Divider />
      <Skills />
      <Show below="lg">
        <Divider />
      </Show>
      <Projects />
    </Stack>
  </>
);

export default Page;
