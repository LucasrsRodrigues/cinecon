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

  margin-bottom: 15px;
`;

export const Button = styled.TouchableWithoutFeedback``;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;


export const Body = styled.View`
  flex-direction: row;
  /* padding: 0 25px; */
`;

export const Left = styled.View`
  flex: 1;
`;
export const WrapperMovie = styled.View`
  /* background: blue; */
  margin-bottom: 15px;
`;

export const Right = styled.View`
  flex: 1;
  /* background: #cd94ff55; */
  /* margin-left: 2px; */
`;

