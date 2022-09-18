import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 18px 25px;

  flex-direction: row;

  justify-content: space-between;

`;

export const WrapperBack = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;

  margin-right: ${RFValue(16)}px;

  align-items: center;
  justify-content: center;

`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.typography_light};
`;

export const WrapperOptionsMenu = styled.View`
  flex-direction: row;
`;

export const OptionMenu = styled.TouchableOpacity`
  margin-left: 17px;
`;
