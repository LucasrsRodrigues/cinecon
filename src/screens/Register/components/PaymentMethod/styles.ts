import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const TitleSection = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.typography_light};
  font-size: ${RFValue(18)}px;

  margin-top: 16px;
  padding: 0 24px;
`;

export const WrapperMethods = styled.ScrollView`
  /* flex-direction: row; */
  /* justify-content: space-between;

  

  padding: 0 24px; */
  margin-top: 16px;
`;

export const Method = styled.TouchableOpacity`
  width: ${RFValue(101)}px;
  height: ${RFValue(118)}px;

  border: ${RFValue(2)}px solid ${({ theme }) => theme.colors.background_light};
  border-radius: 8px;


  border-color: ${({ theme }) => theme.colors.primary};

  margin-right: 16px;
`;

export const MethodTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.typography};

  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;
