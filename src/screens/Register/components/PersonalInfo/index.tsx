import React from 'react';
import { useTheme } from 'styled-components';

import * as S from './styles';

interface PersonalInfoProps {
  change: (id: number) => void;
}

function PersonalInfo({ change }: PersonalInfoProps) {
  const theme = useTheme();

  return(
    <S.Container>
      <S.TitleSection>Personal Info</S.TitleSection>

      <S.FormPersonal>
        <S.UploadPhoto></S.UploadPhoto>

        <S.WrapperInput>
          <S.Input placeholder="First Name" placeholderTextColor={theme.colors.typography} />
          <S.Input placeholder="Last Name" placeholderTextColor={theme.colors.typography} />
          <S.Input placeholder="Email" placeholderTextColor={theme.colors.typography} />
          <S.Input placeholder="Phone" placeholderTextColor={theme.colors.typography} />
          <S.Input placeholder="Password" placeholderTextColor={theme.colors.typography} />
        </S.WrapperInput>

        
        <S.NextButton onPress={() => change(2)}>
          <S.NextButtonText>Next</S.NextButtonText>
        </S.NextButton>
      </S.FormPersonal>
    </S.Container>
  );
}

export { PersonalInfo }