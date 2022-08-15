import React from 'react';

import * as S from './styles';

import LogoSvg from '../../assets/Logo.svg';

import AccessibilitySVG from '../../assets/icons/line/Accessibility.svg';
import BuySVG from '../../assets/icons/line/Buy.svg';
import { Carrossel } from '../../components/Carrossel';

export function Home() {
  return (
    <S.Safe>
      <S.Header>
        <LogoSvg />

        <S.WrapperOptionsMenu>
          <S.OptionMenu>
            <AccessibilitySVG />
          </S.OptionMenu>

          <S.OptionMenu>
            <BuySVG />
          </S.OptionMenu>
        </S.WrapperOptionsMenu>
      </S.Header>

      <S.Container>
        <Carrossel />

        {/* <S.Section>
          <S.TitleSection>Features</S.TitleSection>

        </S.Section> */}
      </S.Container>
    </S.Safe>
  );
}