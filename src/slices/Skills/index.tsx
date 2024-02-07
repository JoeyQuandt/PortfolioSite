import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { OvalIcon } from '@/components/shared/backgroundIcons';
import { Title } from '@/components/shared/title';

import { Grid, Flex, Heading } from '@chakra-ui/react';
import { PrismicRichText } from '@prismicio/react';

import { PageSkill } from '@/gql/graphql';
import { FadeInWhenVisible } from '@/utils';

export type SkillsProps = SliceComponentProps<Content.SkillsSlice>;

const Skills = ({ slice }: SkillsProps): JSX.Element => {
  return (
    <FadeInWhenVisible>
      <Grid
        bgColor="primary"
        templateColumns={{ md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={14}
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        {slice.items.map(item => {
          return (
            <Flex
              color="white"
              flexDirection="column"
              textAlign={['center', 'center', 'left']}
              gap={3.5}
              key={crypto.randomUUID()}
            >
              <Heading as="h2">
                <PrismicRichText field={item.skill} />
              </Heading>
            </Flex>
          );
        })}
      </Grid>
    </FadeInWhenVisible>
  );
};

export default Skills;
