import { Divider, Heading,Show, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Hero } from '@/components/features/hero';
import { Skills } from '@/components/features/skills';

type PageProps = {};


const Page: NextPage<PageProps> = () => (
  <>
    <NextSeo title="Homepage" description="This is the homepage" />
    <Stack spacing="4">
        <Hero/>
        <Divider/>
        <Skills/>
        <Show below="lg">
          <Divider/>
        </Show>
    </Stack>
  </>
);

export default Page;
