import { Stack, Heading, Text, Box } from '@chakra-ui/react';
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
          Im Joey Quandt
        </LinkTag>
      </Heading>
      <Text marginBlock="6">{text}</Text>
      <Box alignItems={['center', 'left', 'left']}>
        <LinkTag maxWidth="95px" href="mailto: joeyquandt@outlook.com">
          Contact me
        </LinkTag>
      </Box>
    </Stack>
  );
}
