import { OvalIcon } from '@/components/shared/backgroundIcons';
import { Title } from '@/components/shared/title';

import { Grid } from '@chakra-ui/react';

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

export function Skills() {
  return (
    <Grid templateColumns={{ md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={14}>
      {skills.map(item => {
        return <Title title={item.title} text={item.text} key={crypto.randomUUID()} />;
      })}
    </Grid>
  );
}
