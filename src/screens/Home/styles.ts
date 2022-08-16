import styled from "styled-components/native";

export const Safe = styled.SafeAreaView`
  flex:1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.ScrollView``;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

// Header



// Section
export const Section = styled.View``;

export const TitleSection = styled.Text`
  color: ${({ theme }) => theme.colors.typography_light};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 18px;

  padding: 24px;
`;

// OptionSection
