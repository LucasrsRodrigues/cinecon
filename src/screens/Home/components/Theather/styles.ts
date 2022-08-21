import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.typography_light};
`;

export const Header = styled.View`
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableWithoutFeedback``;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;
