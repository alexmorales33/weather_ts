import styled from 'styled-components/native';

interface ContainerProps {
  width?: string;
  height?: string;
  flex?: number;
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  marginBottom?: number;
}

export const Container = styled.View<ContainerProps>`
  width: ${({width}) => width || '100%'};
  height: ${({height}) => height || '100%'};
  flex: ${({flex}) => flex || 1};
  flex-direction: ${({flexDirection}) => flexDirection || 'column'};
  justify-content: ${({justifyContent}) => justifyContent || 'center'};
  align-items: ${({alignItems}) => alignItems || 'center'};
  margin-bottom: ${({marginBottom}) => marginBottom || '0'};
`;
