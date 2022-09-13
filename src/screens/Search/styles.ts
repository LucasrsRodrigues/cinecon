import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Safe = styled.SafeAreaView`
  flex:1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;