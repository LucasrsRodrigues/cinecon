import React from 'react';

import * as S from './styles';


import { Carrossel } from './components/Carrossel';
import { HomeHeader } from './components/HomeHeader';
import { Header } from '../../global/components/Header';

export function Home() {
  return (
    <S.Safe>
      <Header />
      <S.Container>
        <HomeHeader />

      </S.Container>
    </S.Safe>
  );
}