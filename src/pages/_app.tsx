import '../../public/fonts/fonts.css';

import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import React from 'react';

import { BaseLayout } from '@/components/templates';
import { theme } from '@/theme/theme';

const MyApp = ({ Component: Page, pageProps }: AppProps) => {
  if (pageProps.renderWithoutLayout) {
    return <Page {...pageProps} />;
  }
  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | Front-end Developer`}
        themeColor="gray"
        canonical="https://www.joeyquandt.nl/"
        additionalLinkTags={[
          {
            rel: 'shortcut icon',
            href: '/favicon.ico',
          },
          {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon/favicon-16x16.png',
            sizes: '16x16',
          },
          {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon/favicon-32x32.png',
            sizes: '32x32',
          },
          {
            rel: 'apple-touch-icon',
            href: '/favicon/apple-touch-icon.png',
            sizes: '76x76',
          },
        ]}
      />
      <ChakraProvider theme={theme} resetCSS>
        <BaseLayout>
          <Page {...pageProps} />
          <PrismicPreview repositoryName={repositoryName} />
        </BaseLayout>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
