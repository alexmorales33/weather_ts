// TypographyStyles.ts
import styled from 'styled-components/native';
import {TextProps} from 'react-native';

interface TypographyProps extends TextProps {
  fontSize: number;
  fontWeight: number;
  color: string;
}

export const StyledTypography = styled.Text<TypographyProps>`
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
`;
