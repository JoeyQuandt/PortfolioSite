import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

type FadeInWhenVisbileProps = {
  children: React.ReactNode;
};

export const FadeInWhenVisible = ({ children }: FadeInWhenVisbileProps) => {
  return (
    <Box
      as={motion.div}
      initial="hidden"
      whileInView="visible"
      transition={{ ease: '[0.1, 0.25, 0.3, 1]' }}
      transitionDuration={'0.6'}
      viewport={{ once: true }}
      variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 5 } }}
    >
      {children}
    </Box>
  );
};
