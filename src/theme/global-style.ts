import { SystemStyleObject } from '@chakra-ui/react';

export const globalStyle: SystemStyleObject = {
  'html, body': {
    backgroundColor: 'primary',
  },
  body: {
    minWidth: '320px',
  },
  '*': {
    boxSizing: 'border-box',
    margin: '0',
    padding: '0',
  },
};
