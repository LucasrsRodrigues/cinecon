import React from 'react';

import LogoSvg from '../../../assets/Logo.svg';

import AccessibilitySVG from '../../../assets/icons/line/Accessibility.svg';
import BuySVG from '../../../assets/icons/line/Buy.svg';

import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <LogoSvg />

      <S.WrapperOptionsMenu>
        <S.OptionMenu>
          <AccessibilitySVG />
        </S.OptionMenu>

        <S.OptionMenu>
          <BuySVG />
        </S.OptionMenu>
      </S.WrapperOptionsMenu>
    </S.Container>
  );
}