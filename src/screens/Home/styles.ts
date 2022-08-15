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

export const Header = styled.View`
  width: 100%;
  padding: 18px 25px;

  flex-direction: row;

  justify-content: space-between;

`;

export const WrapperOptionsMenu = styled.View`
  flex-direction: row;
`;

export const OptionMenu = styled.TouchableOpacity`
  margin-left: 17px;
`;


// Section
export const Section = styled.View``;

export const TitleSection = styled.Text`
  color: ${({ theme }) => theme.colors.typography_light};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 18px;

  padding: 24px;
`;