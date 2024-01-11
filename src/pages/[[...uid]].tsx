import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { asLink } from '@prismicio/client';
import { SliceZone } from '@prismicio/react';
import { Heading, Skeleton, Box } from '@chakra-ui/react';

import { components } from '@/slices';
import { createClient } from '@/prismicio';

type Params = { uid: string };

export default function Page({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo
        title="Portfolio Joey Quandt"
        description="Based in the Netherlands, I'm a front-end developer passionate about building accessible web apps that users love."
        canonical="https://joeyquandt.nl/"
        openGraph={{
          url: 'https://joeyquandt.nl/',
          title: 'Portfolio Joey Quandt',
          description:
            "Based in the Netherlands, I'm a front-end developer passionate about building accessible web apps that users love.",
          images: [
            {
              url: 'https://images.prismic.io/joeyquandt/659edbcc7a5e8b1120d56ba1_Joey-Quandt-Front-end-Developer.png',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Portfolio Joey Quandt',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function getStaticProps({ params, previewData }: GetStaticPropsContext<Params>) {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = createClient({ previewData });

  const page = await client.getByUID('page', params!.uid ? params!.uid[0] : 'home');
  return {
    props: { page },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pagesPaths = await client.getAllByType('page');

  let pages = pagesPaths.map(page => {
    return asLink(page);
  });
  return {
    paths: [...pages, '/'],
    fallback: false,
  };
}
