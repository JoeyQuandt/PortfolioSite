import { Box, Flex, Heading, Stack, Divider, Container } from '@chakra-ui/react';
import type { LayoutDocumentData } from '../../../../../prismicio-types';
import { PrismicRichText } from '@prismicio/react';

import { FormArea } from './FormArea';
import { SocialIcons, Logo } from '@/components/shared/socialIcons';
import { FadeInWhenVisible } from '@/utils';

type FooterProps = {
  data: LayoutDocumentData;
};

export function Footer({ data }: FooterProps) {
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
                {data.contact_title}
              </Heading>
              <Box marginBlock={4}>
                <PrismicRichText field={data.contact_text} />
              </Box>
            </Stack>
            <FormArea width="100%" marginBottom={20} />
          </Flex>
        </FadeInWhenVisible>
        <Divider />
        <Flex
          justifyContent="space-between"
          flexDirection={['column', 'column', 'row']}
          alignItems="center"
          marginBottom={14}
        >
          <Logo data={data} />
          <SocialIcons data={data} />
        </Flex>
      </Container>
    </Box>
  );
}
