import React from 'react';
import TimeCircle from '../../../../assets/icons/line/TimeCircle.svg';
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

          <S.DealInfo>
            <S.DealButton>
              <S.DealButtonText>Get</S.DealButtonText>
            </S.DealButton>

            <S.DealDate>
              {/* <TimeCircle /> */}
              <S.DealDateText>
                26, Nov 2021
              </S.DealDateText>
            </S.DealDate>
          </S.DealInfo>
        </S.WrapperData>
      </S.WrapperDeal>
    </S.Container>
  );
}