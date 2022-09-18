import React from 'react';

import LogoSvg from '../../../assets/Logo.svg';

import AccessibilitySVG from '../../../assets/icons/line/Accessibility.svg';
import BuySVG from '../../../assets/icons/line/Buy.svg';

import * as S from './styles';

interface HeaderProps {
  title?: string;
}

import ArrowLeft from '../../../assets/icons/line/ArrowRight.svg';

export function Header({ title }:HeaderProps) {
  return (
    <S.Container>

      {title ? (
        <S.WrapperBack>
          <S.BackButton>
            <ArrowLeft color="#000" />
          </S.BackButton>
          <S.Title>{title}</S.Title>
        </S.WrapperBack>
      ): (
        <LogoSvg />
      )}
      

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