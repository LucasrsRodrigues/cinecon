import React from 'react';

import { HomeHeader } from './components/HomeHeader';
import { Header } from '../../global/components/Header';

import * as S from './styles';
import { Features } from './components/Features';
import { Deals } from './components/Deals';

export function Home() {
  return (
    <S.Safe>
      <Header />
      <S.Container>
        <HomeHeader />
        <Features />
        <Deals />
      </S.Container>
    </S.Safe>
  );
}