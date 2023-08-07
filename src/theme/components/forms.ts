import { ComponentStyleConfig } from '@chakra-ui/react';

export const input: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 'none',
    fontWeight: 'regular',
    marginBottom: 8,
  },
  defaultProps: {
    variant: 'flushed',
    size: 'md',
    color: 'white',
    focusBorderColor: 'succes',
    errorBorderColor: 'warning',
    variants: {
      primary: {
        backgroundColor: 'primary',
        color: 'white',
      },
      secondary: {
        backgroundColor: 'secondary',
        color: 'white',
      },
    },
  },
};
export const textarea: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 'none',
    fontWeight: 'regular',
    marginBottom: 8,
  },
  defaultProps: {
    variant: 'flushed',
    size: 'md',
    color: 'white',
    focusBorderColor: 'succes',
    errorBorderColor: 'warning',
  },
};
