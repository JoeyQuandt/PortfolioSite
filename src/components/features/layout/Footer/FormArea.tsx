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
        <Input placeholder="name" _placeholder={placeholderStyles} />
        <Input placeholder="email" _placeholder={placeholderStyles} />
        <Textarea placeholder="message" _placeholder={placeholderStyles} />
      </Stack>
      <Button
        position="absolute"
        right="0"
        textDecorationColor="secondary"
        textDecorationThickness={'2px'}
      >
        send message
      </Button>
    </FormControl>
  );
}
