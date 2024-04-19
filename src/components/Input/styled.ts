import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: 'rgba(0, 0, 0, 0.1)';
  border-radius: 10px;
`;

export const StyledInput = styled.TextInput`
  flex: 0.6;
  color: white;
`;
