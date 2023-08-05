import { Stack, Heading, Text } from '@chakra-ui/react';
import { LinkTag } from '@/components/shared/link';

type HeroTextProps = {
  heading: string | undefined;
  text: string | undefined;
};

export function HeroText({ heading, text }: HeroTextProps) {
  return (
    <Stack color="white" textAlign={['center', 'center', 'left']} maxWidth="600px">
      <Heading as="h1" fontSize={[30, 50, 60]}>
        {`${heading} `}
        <LinkTag
          href="https://www.linkedin.com/in/joey-quandt/"
          textTransform={'capitalize'}
          textDecorationThickness={'4px'}
        >
          Joey Quandt
        </LinkTag>
      </Heading>
      <Text marginBlock="6">{text}</Text>
      <LinkTag href="https://chakra-ui.com/docs/styled-system/theme">Contact me</LinkTag>
    </Stack>
  );
}
