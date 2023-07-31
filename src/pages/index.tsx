import { Divider, Heading, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Hero } from '@/components/features/hero';

type PageProps = {};


const Page: NextPage<PageProps> = () => (
  <>
    <NextSeo title="Homepage" description="This is the homepage" />
    <Stack spacing="4">
        <Hero/>
        <Divider/>
    </Stack>
  </>
);

export default Page;
