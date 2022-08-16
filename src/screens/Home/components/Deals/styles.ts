import styled from "styled-components/native";

export const Container = styled.View`
  /* margin-top: 16px; */

  padding: 24px;

`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.typography_light};
  font-family: ${({ theme }) => theme.fonts.semibold};
  /* padding-left: 24px; */
`;

export const WrapperDeal = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.background_light};
  height: 128px;
  margin-top: 15px;

  border-radius: 8px;

  /* justify-content: center; */

  padding: 9px;

  flex-direction: row;

`;

export const WrapperIcon = styled.View`
  width: 103px;
  height: 103px;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.background};

  align-items: center;
  justify-content: center;

`;

export const WrapperData = styled.View`
  flex: 1;
  margin-left:13px;
`;

export const DealHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DealTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.typography_light};
  font-size: 16px;
`;

export const DealPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.typography_light};
  font-size: 16px;
`;

export const DealDescription = styled.Text`
  color: ${({ theme }) => theme.colors.typography};
  font-family: ${({ theme }) => theme.fonts.semibold};
`;

export const DealInfo = styled.View`
  flex-direction: row;
  align-items: center;

  background: ${({ theme }) => theme.colors.background_dark};

  border-radius: 12px;
  overflow: hidden;
`;

export const DealButton = styled.View`
  padding: 10px 18px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
`;

export const DealButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.semibold};
`;

export const DealDate = styled.View``;

export const DealDateText = styled.Text`
  color: ${({ theme }) => theme.colors.typography};
  font-family: ${({ theme }) => theme.fonts.semibold};
`;
