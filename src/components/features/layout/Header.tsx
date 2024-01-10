import { useState, useEffect } from 'react';
import type { LayoutDocumentData } from '../../../../prismicio-types';

import { SocialIcons, Logo } from '@/components/shared/socialIcons';
import { Box, Container, Flex } from '@chakra-ui/react';
import { useScroll, motion, useMotionValueEvent } from 'framer-motion';

interface HeaderProps {
  data: LayoutDocumentData;
}

export function Header({ data }: HeaderProps) {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  function update() {
    if (scrollY?.get() < scrollY?.getPrevious()) {
      setHidden(false);
    } else if (scrollY.get() > 100 && scrollY?.get() > scrollY?.getPrevious()) {
      setHidden(true);
    }
  }
  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  useMotionValueEvent(scrollY, 'change', () => {
    update();
  });

  return (
    <Box
      as={motion.nav}
      color="white"
      bgColor="primary"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={5}
      paddingBottom={[4, 0]}
      paddingInline={[4, 8, 8, 44]}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ ease: '[0.1, 0.25, 0.3, 1]' }}
      transitionDuration={'0.6'}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -25 },
      }}
    >
      <Container bgColor="primary">
        <Flex
          flexShrink={0}
          alignItems="center"
          flexDirection={['column', 'row']}
          justifyContent={['center', 'space-between', 'space-between']}
        >
          <Logo data={data} />
          <SocialIcons data={data} />
        </Flex>
      </Container>
    </Box>
  );
}
