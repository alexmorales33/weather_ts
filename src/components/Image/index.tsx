import styled from 'styled-components/native';

interface ImageProps {
  width: number;
  height: number;
}

export const Image = styled.Image<ImageProps>`
  width: ${({width}) => `${width}px`};
  height: ${({height}) => `${height}px`};
`;
