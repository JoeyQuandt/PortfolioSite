import { Box, Flex, Heading, Text, Stack, Divider, Container } from '@chakra-ui/react';
import { FormArea } from './FormArea';
import { SocialIcons, Logo } from '@/components/shared/socialIcons';
import { PageContact } from '@/gql/graphql';
import { FadeInWhenVisible } from '@/utils';

type FooterProps = {
  content: PageContact | undefined;
};

export function Footer({ content }: FooterProps) {
  return (
    <Box bgColor="tertiary" paddingInline={[4, 8, 8, 44]}>
      <Container
        textAlign={['center', 'center', 'center', 'left']}
        as="footer"
        color="white"
        marginTop={[16, 16, 16, 20]}
        position="relative"
        padding="0"
      >
        <FadeInWhenVisible>
          <Flex
            flexDirection={['column', 'column', 'column', 'row']}
            gap={{ lg: 52 }}
            alignItems="flex-start"
            paddingInline={{ md: 40, lg: 0 }}
          >
            <Stack spacing={4} maxWidth={{ lg: '445px' }} marginBottom={18}>
              <Heading as="h2" fontSize={[30, 50, 60]}>
                {content?.contactTitle}
              </Heading>
              <Text>{content?.contactText}</Text>
            </Stack>
            <FormArea marginBottom={20} />
          </Flex>
        </FadeInWhenVisible>
        <Divider />
        <Flex
          justifyContent="space-between"
          flexDirection={['column', 'column', 'row']}
          alignItems="center"
          marginBottom={14}
        >
          <Logo />
          <SocialIcons />
        </Flex>
      </Container>
    </Box>
  );
}
