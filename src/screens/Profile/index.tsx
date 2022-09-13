import React from 'react';
import { Header } from '../../global/components/Header';

import * as S from './styles';

export function Profile() {
  return (
    <S.Safe>
      <Header />
      <S.Container>
        <S.Title>Profile</S.Title>
      </S.Container>
    </S.Safe>
  );
}