import { Box, BoxProps } from '@chakra-ui/react';
import Select, { StylesConfig } from 'react-select';
import { getUniqueListBy } from '@/utils';
import { Maybe } from '@/gql/graphql';

type CustomSelectProps = {
  caterogyData:
    | { value: Maybe<string> | undefined; label: Maybe<string> | undefined }[]
    | undefined;
  handleChange: (e: any) => void;
  defaultValue: string;
} & BoxProps;

export const CustomSelect = ({
  caterogyData,
  handleChange,
  defaultValue,
  ...props
}: CustomSelectProps) => {
  const selectOptions = getUniqueListBy(caterogyData ? caterogyData : [], 'value');

  const defaultValueOption = caterogyData?.find(option => option.value === defaultValue);

  const selectStyles: StylesConfig = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: '#fff',
      backgroundColor: state.isSelected ? '#4EE1A0' : '#151515',
    }),

    control: defaultStyles => ({
      ...defaultStyles,
      backgroundColor: '#151515',
      padding: '10px',
      minWidth: '200px',
      border: 'none',
      boxShadow: 'none',
    }),

    menu: defaultStyles => ({
      ...defaultStyles,
      backgroundColor: '#151515',
      zIndex: '5',
    }),
    singleValue: defaultStyles => ({ ...defaultStyles, color: '#fff' }),
  };

  return (
    <Box {...props}>
      <Select
        defaultValue={defaultValueOption}
        options={selectOptions}
        styles={selectStyles}
        onChange={handleChange}
      />
    </Box>
  );
};
