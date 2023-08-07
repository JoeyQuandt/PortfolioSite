import { Heading, Text, Grid, Flex, Box } from '@chakra-ui/react';
import loadingAnimation404 from '../../../public/animations/404.json';
import Lottie from 'lottie-react';

export function NotFoundPage() {
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
          <Lottie animationData={loadingAnimation404} loop={true} />
        </Box>
        <Heading>404</Heading>
        <Text>The page you&apos;re trying to visit doesn&apos;t exist (anymore).</Text>
      </Flex>
    </Grid>
  );
}
