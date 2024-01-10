import { Content } from '@prismicio/client';
import { Divider } from '@chakra-ui/react';
import { SliceComponentProps } from '@prismicio/react';

export type DividerProps = SliceComponentProps<Content.DividerSlice>;

const Bar = ({ slice }: DividerProps): JSX.Element => {
  return <>{slice.primary.show_divider && <Divider />}</>;
};

export default Bar;
