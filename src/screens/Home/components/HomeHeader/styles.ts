import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex:1;
`;

export const OptionSection = styled.View`
  flex-direction: row;

  padding: 0 24px 16px;
`;

interface OptionButtonProps {
  selected: boolean;
}

export const OptionButton = styled.TouchableOpacity<OptionButtonProps>`
  padding: 10px 12px;

  border-radius: 12px;
  margin-right: 16px;

  ${({ selected }) => selected && css`
    background: ${({ theme }) => theme.colors.background_light};
  `};

`;

export const OptionButtonText = styled.Text<OptionButtonProps>`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.typography};

  ${({ selected }) => selected && css`
    color: ${({ theme }) => theme.colors.primary};
  `};
`;