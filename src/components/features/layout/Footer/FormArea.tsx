import { FormControl, Input, Textarea, Button, Stack } from '@chakra-ui/react';

const placeholderStyles = {
  paddingLeft: '24px',
  textTransform: 'uppercase',
  color: 'gray',
};

export function FormArea({ ...props }) {
  return (
    <FormControl position="relative" {...props}>
      <Stack spacing={8}>
        <Input
          placeholder="name"
          id="name"
          _placeholder={placeholderStyles}
          autoComplete="given-name"
        />
        <Input placeholder="email" id="email" _placeholder={placeholderStyles} autoComplete="off" />
        <Textarea
          placeholder="message"
          id="message"
          _placeholder={placeholderStyles}
          autoComplete="off"
        />
      </Stack>
      <Button
        position="absolute"
        right="0"
        textDecoration="none"
        whiteSpace="nowrap"
        _hover={{
          '::before': {
            transformOrigin: '0% 50%',
            transform: 'scale3d(1, 1, 1)',
          },
        }}
        _before={{
          content: '""',
          position: 'absolute',
          width: '100%',
          background: 'secondary',
          height: '2px',
          top: '100%',
          left: 0,
          pointerEvents: 'none',
          transformOrigin: '100% 50%',
          transform: 'scale3d(0, 1, 1)',
          transition: 'transform 0.3s',
        }}
      >
        send message
      </Button>
    </FormControl>
  );
}
