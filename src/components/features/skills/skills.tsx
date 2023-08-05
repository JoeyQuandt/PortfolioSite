import { OvalIcon } from '@/components/shared/backgroundIcons';
import { Title } from '@/components/shared/title';

import { Grid } from '@chakra-ui/react';

import { PageSkill } from '@/gql/graphql';

const skills = [
  {
    title: 'html',
    text: '4 years experience',
  },
  {
    title: 'css',
    text: '4 years experience',
  },
  {
    title: 'javascript',
    text: '4 years experience',
  },
  {
    title: 'accesiblity',
    text: '4 years experience',
  },
  {
    title: 'react',
    text: '4 years experience',
  },
  {
    title: 'react native',
    text: '4 years experience',
  },
];

type SkillsProps = {
  content: PageSkill | undefined;
};

export function Skills({ content }: SkillsProps) {
  console.log(content);
  return (
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
  );
}
