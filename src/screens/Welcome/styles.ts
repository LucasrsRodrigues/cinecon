import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Safe = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.typography_light};
`;

export const WrapperImage = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 14px 0 35px 0;
  
`;

interface ButtonProps {
  themeColor?: 'light' | 'dark';
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  border-radius: 14px;
  padding: 15px;
  
  background: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};


  ${({ themeColor }) => themeColor === 'dark' && css`
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.background_light};
  `};

  margin-bottom: 16px;
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.background_light};
  text-align: center;

  ${({ themeColor }) => themeColor === 'dark' && css`
    color: ${({ theme }) => theme.colors.typography};
  `};
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

export const Lorem = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
  color: ${({ theme }) => theme.colors.typography};

  margin: 2px 0 18px 0;
`;

export const MediaButtonText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  text-align: center;
  color: ${({ theme }) => theme.colors.typography};

  margin-left: 10px;
`;