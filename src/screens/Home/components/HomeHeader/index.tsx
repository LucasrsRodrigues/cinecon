import React, { useCallback, useState } from 'react';
import { Carrossel } from '../Carrossel';

import * as S from './styles';

export function HomeHeader() {
  const [option, setOption] = useState('commingsoon');

  const changeOption = useCallback((opt: string) => {
    setOption(opt)
  }, []);


  return (
    <S.Container>
      <S.OptionSection>
        <S.OptionButton onPress={() => changeOption('commingsoon')} selected={option === 'commingsoon'}>
          <S.OptionButtonText selected={option === 'commingsoon'}>Comming Soon</S.OptionButtonText>
        </S.OptionButton>

        <S.OptionButton onPress={() => changeOption('featured')} selected={option === 'featured'}>
          <S.OptionButtonText selected={option === 'featured'}>Featured</S.OptionButtonText>
        </S.OptionButton>
      </S.OptionSection>

      <Carrossel />
    </S.Container>
  );
}