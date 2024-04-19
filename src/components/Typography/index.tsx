// Typography.tsx
import React from 'react';
import {StyledTypography} from './styled';

interface TypographyProps {
  fontSize: number;
  fontWeight: number;
  color: string;
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  fontSize,
  fontWeight,
  color,
  children,
}) => {
  return (
    <StyledTypography fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {children}
    </StyledTypography>
  );
};
