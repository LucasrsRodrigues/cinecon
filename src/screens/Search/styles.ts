import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;


export const Safe = styled.SafeAreaView`
  flex:1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const Form = styled.View`
  width: 100%;
`;


// SeatchInput


export const WrapperSearchInput = styled.View`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.background_light};
  height: 48px;

  flex-direction: row;
  /* align-items: center; */
  padding: 0 14px;
  border-radius: 8px;
`;
export const SearchInput = styled.TextInput`
  /* background: red; */
  flex: 1;
  color: ${({ theme }) => theme.colors.typography_light};
`;

export const WrapperSelects = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;