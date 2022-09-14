import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Safe = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Steps = styled.View`
  flex-direction: row;
  padding: 0 24px;

  justify-content: space-between;
  align-items: center;
`;


interface StepsProps {
  active?: boolean;
}

export const Step = styled.View<StepsProps>`
  width: 139px;
  height: 6px;
  border-radius: 14px;

  /* background: ${({ theme }) => theme.colors.background_light}; */
  border: 4px solid #282730;

  ${({ active }) => active && css`
    /* background: ${({ theme }) => theme.colors.primary}; */
    border: 4px solid #F7BB0E;
  `}

`;


export const ActiveStep = styled.View`
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors.background_light};
  border-radius: 50%;
`;