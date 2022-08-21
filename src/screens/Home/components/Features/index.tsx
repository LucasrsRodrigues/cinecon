import React from 'react';

import * as S from './styles';

import VolumeDown from '../../../../assets/icons/solid/VolumeDown.svg';
import UserThree from '../../../../assets/icons/solid/UserThree.svg';
import SnackClick from '../../../../assets/icons/solid/SnackClick.svg';

export function Features() {
  return (
    <S.Container>
      <S.Title>Features</S.Title>

      <S.ScrollFeatures horizontal showsHorizontalScrollIndicator={false} >
        <S.FeaturesCard>
          <VolumeDown />
          <S.CardDetail>
            Moderate sound effects
          </S.CardDetail>
        </S.FeaturesCard>

        <S.FeaturesCard>
          <UserThree />
          <S.CardDetail>
            Limited number of people
          </S.CardDetail>
        </S.FeaturesCard>

        <S.FeaturesCard>
          <SnackClick />
          <S.CardDetail>
            Snacks and drinks on click
          </S.CardDetail>
        </S.FeaturesCard>

        <S.FeaturesCard>
          <SnackClick />
          <S.CardDetail>
            Snacks and drinks on click
          </S.CardDetail>
        </S.FeaturesCard>

        <S.FeaturesCard>
          <SnackClick />
          <S.CardDetail>
            Snacks and drinks on click
          </S.CardDetail>
        </S.FeaturesCard>
      </S.ScrollFeatures>
    </S.Container>
  );
}