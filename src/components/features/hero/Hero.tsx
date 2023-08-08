import { Flex } from '@chakra-ui/react';
import { HeroImage } from './HeroImage';
import { HeroText } from './HeroText';
import { PageContentpageContentHomeUnion } from '@/gql/graphql';
import { PageHero } from '@/gql/graphql';
import { FadeInWhenVisible } from '@/utils';

type HeroProps = {
  content: PageHero | undefined;
};

export function Hero({ content }: HeroProps) {
  return (
    <Flex
      marginTop={40}
      justifyContent={['center', 'center', 'space-between']}
      alignItems="center"
      flexDirection={['column', 'column', 'row-reverse']}
    >
      <HeroImage href={content?.heroImage?.url} alt="me" />
      <FadeInWhenVisible>
        <HeroText
          heading={content?.heroHeading ?? undefined}
          text={content?.heroText ?? undefined}
        />
      </FadeInWhenVisible>
    </Flex>
  );
}
