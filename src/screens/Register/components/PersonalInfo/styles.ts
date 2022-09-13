import { TextInput } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const TitleSection = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.typography_light};
  font-size: ${RFValue(18)}px;
`;

export const FormPersonal = styled.View`
  align-items: center;
  padding: 24px;
`;

export const UploadPhoto = styled.View`
  width: ${RFValue(96)}px;
  height: ${RFValue(96)}px;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${RFPercentage(50)}px;
`;

export const Input = styled(TextInput)`
  width: 100%;
  height: ${RFValue(48)}px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.background_light};
  padding: 0 14px;

  margin-bottom: ${RFValue(8)}px;
`;