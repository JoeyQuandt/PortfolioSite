import { Flex } from '@chakra-ui/react';
import { HeroImage } from './HeroImage';
import { HeroText } from './HeroText';
import { PageContentpageContentHomeUnion } from '@/gql/graphql';
import { PageHero } from '@/gql/graphql';

type HeroProps = {
  content: PageHero | undefined;
};

export function Hero({ content }: HeroProps) {
  return (
    <Flex
      justifyContent={['center', 'center', 'space-between']}
      alignItems="center"
      flexDirection={['column', 'column', 'row-reverse']}
    >
      <HeroImage href={content?.heroImage?.url} alt="me" />
      <HeroText heading={content?.heroHeading ?? undefined} text={content?.heroText ?? undefined} />
    </Flex>
  );
}
