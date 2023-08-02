import { SocialIcons, Logo } from '@/components/shared/socialIcons';
import { Box,Container, Flex } from '@chakra-ui/react';

export function Header() {
  return (
    <Box as="header" color="white" paddingInline={[4, 8, 8, 44]}>
      <Container>
        <Flex
          flexShrink={0}
          alignItems="center"
          flexDirection={['column', 'row']}
          justifyContent={['center', 'space-between', 'space-between']}
        >
          <Logo />
          <SocialIcons />
        </Flex>
      </Container>
    </Box>
  );
}
