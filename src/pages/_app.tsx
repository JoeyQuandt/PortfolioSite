import '../../public/fonts/fonts.css';

import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/dist/shared/lib/router/router';
import React from 'react';

import { BaseLayout } from '@/components/templates';
import { theme } from '@/theme/theme';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clkwbft0i01os01t41l5yep4y/master',
  cache: new InMemoryCache(),
});

const MyApp = ({ Component: Page, pageProps }: AppProps) => {
  if (pageProps.renderWithoutLayout) {
    return <Page {...pageProps} />;
  }
  return (
    <>
      <ApolloProvider client={client}>
        <DefaultSeo titleTemplate={`%s | Portfolio Site`} />
        <ChakraProvider theme={theme} resetCSS>
          <BaseLayout>
            <Page {...pageProps} />
          </BaseLayout>
        </ChakraProvider>
      </ApolloProvider>
    </>
  );
};

export default MyApp;
