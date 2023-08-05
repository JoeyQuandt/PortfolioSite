import { Heading, Text, Flex } from '@chakra-ui/react';

type TitleProps = {
  title: string | undefined;
  text: string | undefined;
};

export function Title({ title, text }: TitleProps) {
  return (
    <Flex color="white" flexDirection="column" textAlign={['center', 'center', 'left']} gap={3.5}>
      <Heading
        as="h2"
        textTransform={title === 'html' || title === 'css' ? 'uppercase' : 'capitalize'}
      >
        {title}
      </Heading>
      <Text color="gray">{text}</Text>
    </Flex>
  );
}
