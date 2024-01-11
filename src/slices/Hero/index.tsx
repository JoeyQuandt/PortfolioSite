import { type Content, isFilled } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';
import { Stack, Heading, Text, Box, Flex } from '@chakra-ui/react';
import { LinkTag } from '@/components/shared/link';
import { FadeInWhenVisible } from '@/utils';

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Flex
      marginTop={40}
      justifyContent={['center', 'center', 'space-between']}
      alignItems="center"
      flexDirection={['column', 'column', 'row-reverse']}
    >
      <Box position="relative" objectFit="cover" marginBlock={12} bgColor="tertiary" width={383}>
        {isFilled.image(slice.primary.image) && (
          <PrismicNextImage field={slice.primary.image} className="es-fullpage-hero__image" />
        )}
      </Box>
      <FadeInWhenVisible>
        <Stack color="white" textAlign={['center', 'center', 'left']} maxWidth="600px">
          {isFilled.richText(slice.primary.title) && (
            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading1: ({ children }) => (
                  <Heading as="h1" fontSize={[30, 50, 60]}>
                    {children}
                  </Heading>
                ),
              }}
            />
          )}
          {isFilled.richText(slice.primary.description) && (
            <PrismicRichText
              field={slice.primary.description}
              components={{
                paragraph: ({ children }) => <Text marginBlock="6">{children}</Text>,
              }}
            />
          )}
          <Box alignItems={['center', 'left', 'left']}>
            <LinkTag maxWidth="95px">
              {isFilled.link(slice.primary.callToActionLink) && (
                <PrismicNextLink
                  className="es-call-to-action__link"
                  field={slice.primary.callToActionLink}
                >
                  {slice.primary.callToActionLabel || 'Learn more…'}
                </PrismicNextLink>
              )}
            </LinkTag>
          </Box>
        </Stack>
      </FadeInWhenVisible>
    </Flex>
  );
};

export default Hero;
