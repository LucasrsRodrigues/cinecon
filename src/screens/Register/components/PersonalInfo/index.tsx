import React from 'react';
import { useTheme } from 'styled-components';

import * as S from './styles';

function PersonalInfo() {
  const theme = useTheme();

  return(
    <S.Container>
      <S.TitleSection>Personal Info</S.TitleSection>

      <S.FormPersonal>
        <S.UploadPhoto></S.UploadPhoto>

        <S.Input placeholder="First Name" placeholderTextColor={theme.colors.typography} />
        <S.Input placeholder="Last Name" placeholderTextColor={theme.colors.typography} />
        <S.Input placeholder="Email" placeholderTextColor={theme.colors.typography} />
        <S.Input placeholder="Phone" placeholderTextColor={theme.colors.typography} />
        <S.Input placeholder="Password" placeholderTextColor={theme.colors.typography} />
        </S.FormPersonal>
    </S.Container>
  );
}

export { PersonalInfo }