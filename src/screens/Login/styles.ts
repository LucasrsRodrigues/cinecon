import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Safe = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.View`
  flex: 1;

  align-items: center;
  /* justify-content: center; */

  padding: 0 24px;
`;

export const MediaButtons = styled.View`
  flex-direction: row;
`;

export const MediaButton = styled.TouchableOpacity`
  border-radius: 14px;
  width: 100%;
  max-width: 50%;
  padding: 15px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.background_light};

  align-items: center;
  flex-direction: row;
  justify-content: center;

`;
export const MediaButtonText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  text-align: center;
  color: ${({ theme }) => theme.colors.typography};

  margin-left: 10px;
`;

export const Lorem = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
  color: ${({ theme }) => theme.colors.typography};

  margin: 24px 0 18px 0;

`;

export const Link = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.semibold};
`;

export const WrapperInputs = styled.View`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 32px;
`;

export const ProfilePicture = styled.View`
  width: ${RFValue(96)}px;
  height: ${RFValue(96)}px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${RFValue(50)}%;
`;