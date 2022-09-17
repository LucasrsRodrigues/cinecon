import { TextStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Animated, { AnimatedStyleProp } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';


interface MyInputProps extends TextStyle  {
  focus: boolean;
  type: 'empty' | 'filled' | 'error' | 'disabled';
}


// Input
export const InputSingle = styled.View<MyInputProps>`
  width: 100%;
  height: ${RFValue(48)}px;
  margin: 8px 0;
  position: relative;

  border: ${RFValue(2)}px solid ${({ theme }) => theme.colors.background_light};
  border-radius:8px;

  ${({ focus }) => focus && css`
    border-color: ${({ theme }) => theme.colors.primary};
  `};
`;

export const Input = styled(TextInput)`
  width: 100%;
  height: ${RFValue(48)}px;
  border-radius: 8px;
  padding: 0 14px;

  margin-bottom: ${RFValue(8)}px;
  color: #fff;

  font-family: ${({ theme }) => theme.fonts.regular};

  /* background: red; */

`;

export const InputLabel = styled(Animated.Text)<MyInputProps>`
  position: absolute;
  left: ${RFValue(16)}px;
  top: ${RFValue(12.8)}px;
  padding: 0 14px;
  color: ${({ theme }) => theme.colors.typography}60;
  font-size: ${RFValue(16)}px;
  transition: all ease-in 200ms;
  font-family: ${({ theme }) => theme.fonts.regular};

  ${({ focus }) => focus && css`
    color: ${({ theme }) => theme.colors.primary}; 
  `};

  background: ${({ theme }) => theme.colors.background};

  animation: all ease .5s;
  
  
`;