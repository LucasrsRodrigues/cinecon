import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
`;

export const CarouselImg = styled.Image`
  height: 400px;
  width: 230px;
  align-self: center;
  border-radius: 12px;
`;
export const CarouselIcon = styled(Icon)``;

export const Nota = styled.View`
  position: absolute;
  top: 15px;
  right: 15px;

  background: ${({ theme }) => theme.colors.primary};
  padding: 16px 12px;
  border-radius: 14px;

  flex-direction: row;
  align-items: flex-end;
`;

export const NotaText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const NotaTextLittle = styled.Text`
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const WrapperTitle = styled(LinearGradient)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  bottom: 0px;

  width: 100%;
  padding: 10px 0;

`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  color: ${({ theme }) => theme.colors.typography_light};
  
  /* left: 15px; */

`;