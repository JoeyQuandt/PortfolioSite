import { OvalIcon } from '@/components/shared/backgroundIcons';
import { Title } from '@/components/shared/title';

import { Grid } from '@chakra-ui/react';

import { PageSkill } from '@/gql/graphql';
import { FadeInWhenVisible } from '@/utils';

type SkillsProps = {
  content: PageSkill | undefined;
};

export function Skills({ content }: SkillsProps) {
  return (
    <>
      <FadeInWhenVisible>
        <Grid templateColumns={{ md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={14}>
          {content?.skills.map(item => {
            return (
              <Title
                title={item.skillTitle ?? undefined}
                text={item.pageSkillSubTitle ?? undefined}
                key={crypto.randomUUID()}
              />
            );
          })}
        </Grid>
      </FadeInWhenVisible>
    </>
  );
}
