import {
  FormControl,
  Input,
  Textarea,
  Button,
  Stack,
  Box,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useState } from 'react';

const placeholderStyles = {
  paddingLeft: '24px',
  textTransform: 'uppercase',
  color: 'gray',
};

export function FormArea({ ...props }) {
  const [loading, setIsLoading] = useState(false);
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: async values => {
      if (values.name && values.email && values.message) {
        setIsLoading(true);
        try {
          const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: values.name,
              email: values.email,
              message: values.message,
            }),
          });

          if (response.ok) {
            toast({
              position: 'bottom',
              title: 'Mail successfully sent',
              status: 'success',
              duration: 9000,
              isClosable: true,
            });
            formik.resetForm();
          }
        } catch (error) {
          toast({
            position: 'bottom',
            title: 'An error occurred',
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
        } finally {
          setIsLoading(false);
        }
      } else {
        toast({
          position: 'bottom',
          title: 'Error: missing input',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    },
  });

  return (
    <Box position="relative" display="grid" {...props}>
      {loading ? (
        <Spinner size="xl" placeSelf="center" color="secondary" />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <Stack spacing={8}>
              <Input
                placeholder="name"
                id="name"
                _placeholder={placeholderStyles}
                autoComplete="given-name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <Input
                placeholder="email"
                id="email"
                _placeholder={placeholderStyles}
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <Textarea
                placeholder="message"
                id="message"
                _placeholder={placeholderStyles}
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
            </Stack>
            <Button
              type="submit"
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
        </form>
      )}
    </Box>
  );
}
