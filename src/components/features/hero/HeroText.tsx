import { Stack, Heading, Text } from '@chakra-ui/react';
import { LinkTag } from '@/components/shared/link';

export function HeroText() {
  return (
    <Stack color="white" textAlign={['center', 'center', 'left']} maxWidth="600px">
      <Heading as="h1" fontSize={[30, 50, 60]}>
        Nice to meet you! I'm {''}
        <LinkTag
          href="https://www.linkedin.com/in/joey-quandt/"
          textTransform={'capitalize'}
          textDecorationThickness={'4px'}
        >
          Joey Quandt
        </LinkTag>
      </Heading>
      <Text marginBlock="6">
        Based in the Netherlands, I’m a front-end developer passionate about building accessible web
        apps that users love.
      </Text>
      <LinkTag href="https://chakra-ui.com/docs/styled-system/theme">Contact me</LinkTag>
    </Stack>
  );
}
