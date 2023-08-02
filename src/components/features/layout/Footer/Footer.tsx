import { Box, Flex, Heading, Text, Stack, Divider, Container } from '@chakra-ui/react';
import { FormArea } from './FormArea';
import { SocialIcons, Logo } from '@/components/shared/socialIcons';
import { OvalIcon } from '@/components/shared/backgroundIcons';

export function Footer() {
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
        <Flex
          flexDirection={['column', 'column', 'column', 'row']}
          gap={{ lg: 52 }}
          alignItems="flex-start"
          paddingInline={{ md: 40, lg: 0 }}
        >
          <Stack spacing={4} maxWidth={{ lg: '445px' }} marginBottom={18}>
            <Heading as="h2" fontSize={[30, 50, 60]}>
              Contact
            </Heading>
            <Text>
              I would love to hear about your project and how I could help. Please fill in the form,
              and I’ll get back to you as soon as possible.
            </Text>
          </Stack>
          <FormArea marginBottom={20} />
        </Flex>
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
