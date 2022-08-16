import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;

  margin-top: 16px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.typography_light};
  font-family: ${({ theme }) => theme.fonts.semibold};
  padding-left: 24px;
`;

export const ScrollFeatures = styled.ScrollView`
  padding: 0 9px;

  margin-top: 16px;
`;

// Features

export const FeaturesCard = styled.View`
  width: 101px;
  height: 118px;
  background: ${({ theme }) => theme.colors.background_light};
  border-radius: 8px;
  
  align-items: center;
  justify-content: center;

  padding: 19px 5px;

  margin-left: 15px;
`;

export const CardDetail = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.typography};
  text-align: center;
  font-size: 12px;
  margin-top: 12px;
`;