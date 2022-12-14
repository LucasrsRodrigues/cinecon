import { TextInput } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const TitleSection = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.typography_light};
  font-size: ${RFValue(18)}px;

  margin-top: 16px;
  padding: 0 24px;
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

interface InputsProps {
  focus: boolean;
}

export const WrapperInput = styled.View`
  width: 100%;
  margin: 16px 0;
`;




export const NextButton = styled.TouchableOpacity`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  padding: 15px;
  border-radius: 14px;
`;

export const NextButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(14)}px;
  text-align: center;
`;


