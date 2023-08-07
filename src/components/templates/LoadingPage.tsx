import { Grid, Box, Heading, Flex } from '@chakra-ui/react';

import Lottie from 'lottie-react';
import loadingAnimation from '../../../public/animations/loading.json';

export function LoadingPage() {
  return (
    <Grid placeItems="center" height="100vh">
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        color="white"
        textAlign="center"
      >
        <Box width="20%">
          <Lottie animationData={loadingAnimation} loop={true} />
        </Box>
        <Heading as="h1">BRB, working on my side project</Heading>
      </Flex>
    </Grid>
  );
}
