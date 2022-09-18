import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  /* flex: 1; */
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  border-radius: 14px;
  padding: 15px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(15)}px;
  text-align: center;
`;