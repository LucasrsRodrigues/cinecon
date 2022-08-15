import styled from "styled-components/native";
import Icon from '@expo/vector-icons/MaterialIcons';

export const Container = styled.View`
  flex:1;
`;


export const CarouselImg = styled.Image`
  height: 400px;
  width: 230px;
  align-self: center;
  border-radius: 12px;
`;

export const CarouselIcon = styled(Icon)`
  position: absolute;
  top: 15px;
  right: 15px;
`;