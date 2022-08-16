import React from 'react';

import Deal from '../../../../assets/icons/solid/Deal.svg';
import * as S from './styles';

export function Deals() {
  return (
    <S.Container>
      <S.Title>Deals</S.Title>

      <S.WrapperDeal>
        <S.WrapperIcon>
          <Deal />
        </S.WrapperIcon>

        <S.WrapperData>
          <S.DealHeader>
            <S.DealTitle>Single</S.DealTitle>
            <S.DealPrice>6.3 $</S.DealPrice>
          </S.DealHeader>
          <S.DealDescription>Choose movie and drink.</S.DealDescription>
        </S.WrapperData>
      </S.WrapperDeal>
    </S.Container>
  );
}