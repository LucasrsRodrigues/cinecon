import React from 'react';
import TimeCircle from '../../../../assets/icons/line/TimeCircle.svg';
import CouponsSvg from '../../../../assets/icons/solid/Coupons.svg';
import * as S from './styles';

export function Coupons() {
  return (
    <S.Container>
      <S.Title>Coupons</S.Title>

      <S.WrapperDeal>
        <S.WrapperIcon>
          <CouponsSvg />
        </S.WrapperIcon>

        <S.WrapperData>
          <S.DealHeader>
            <S.DealTitle>Free Popcorn</S.DealTitle>
            <S.DealPrice>Free</S.DealPrice>
          </S.DealHeader>

          <S.DealDescription>Get your coupon.</S.DealDescription>

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