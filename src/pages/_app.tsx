import '../../public/fonts/fonts.css';


import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/dist/shared/lib/router/router';
import React from 'react';

import { BaseLayout } from '@/components/templates';
import { theme } from '@/theme/theme';


const MyApp = ({ Component: Page, pageProps }: AppProps) => {
  if (pageProps.renderWithoutLayout) {
    return <Page {...pageProps} />;
  }

  return (
    <>
      <DefaultSeo titleTemplate={`%s | Portfolio Site`} />
      <ChakraProvider theme={theme} resetCSS>
        <BaseLayout>
          <Page {...pageProps} />
        </BaseLayout>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
