import React from 'react';
import MapSvg from '../../../assets/svgs/MapSvg';
import {TouchableOpacity} from 'react-native';
import SearchSvg from '../../../assets/svgs/SearchSvg';
import {Container, StyledInput} from './styled';

interface VInputProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
}

export const Input: React.FC<VInputProps> = ({
  placeholder,
  value,
  onChangeText,
  onSubmit,
  ...rest
}) => {
  return (
    <Container>
      <MapSvg />
      <StyledInput
        placeholder={placeholder}
        placeholderTextColor="white"
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
      <TouchableOpacity onPress={onSubmit}>
        <SearchSvg />
      </TouchableOpacity>
    </Container>
  );
};
