import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';

interface ContainerProps {
  width: string;
  height: string;
}

export const Container = styled.View`
  border-radius: 12px;
  overflow: hidden;
`;

export const ContainerShadow = styled.View`
  background: red;
  
`;

export const CarouselImg = styled.ImageBackground<ContainerProps>`
  /* height: 400px;
  width: 230px; */

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  align-self: center;
`;

export const CarouselIcon = styled(Icon)``;

export const Nota = styled.View`
  position: absolute;
  top: 5px;
  right: 10px;

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