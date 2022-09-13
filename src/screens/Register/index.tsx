import React from 'react';
import { Header } from '../../global/components/Header';
import { PersonalInfo } from './components/PersonalInfo';

import * as S from './styles';

export default function Register() {
  return(
    <S.Safe>
      <Header />
      <S.Container>

      <S.Steps>
        <S.Step active/>
        <S.Step />
        <S.ActiveStep>

        </S.ActiveStep>
      </S.Steps>

      <PersonalInfo />

      </S.Container>
    </S.Safe>
  );
}

export { Register }