import React from 'react';
import { useTheme } from 'styled-components';
import { Input } from '../../../../global/components/Input';
import { MyInput } from '../../../../global/components/MyInput';

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
          <MyInput label="Primeiro nome" />
          <MyInput label="Sobrenome" />
          <MyInput label="E-mail" />
          <MyInput label="Telefone" />
          <MyInput label="Senha" />
        </S.WrapperInput>

        
        <S.NextButton onPress={() => change(2)}>
          <S.NextButtonText>Next</S.NextButtonText>
        </S.NextButton>
      </S.FormPersonal>
    </S.Container>
  );
}

export { PersonalInfo }