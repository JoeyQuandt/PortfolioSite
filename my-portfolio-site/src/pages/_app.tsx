import { type AppType } from "next/dist/shared/lib/utils";
import { BaseLayout } from "~/components/templates/Layout";
import { ChakraProvider } from '@chakra-ui/react';

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return(
    <ChakraProvider theme={theme} resetCSS>
      <BaseLayout>
        <Page {...pageProps} />
      </BaseLayout>
    </ChakraProvider>
  );
};

export default MyApp;
