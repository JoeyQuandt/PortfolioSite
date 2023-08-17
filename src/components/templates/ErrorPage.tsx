import { Heading, Text, Grid, Flex, Box } from '@chakra-ui/react';

import { ErrorProps } from '@/pages/_error';
import Lottie from 'lottie-react';
import loadingAnimation404 from '../../../public/animations/404.json';

export function ErrorPage({ statusCode }: ErrorProps) {
  console.log(process.env.NEXT_PUBLIC_PAGE_URL);
  return (
    <Grid placeItems="center" height="100vh">
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        color="white"
        textAlign="center"
      >
        <Box>
          <Lottie animationData={loadingAnimation404} loop={true} />
        </Box>
        <Heading>Oops... {statusCode ? `| ${statusCode} error` : ''} </Heading>
        <Text>Something went wrong</Text>
      </Flex>
    </Grid>
  );
}
