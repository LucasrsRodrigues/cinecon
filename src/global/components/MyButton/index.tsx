import React from 'react';

import * as S from './styles';

interface MyButtonProps {
  text: string;
}


function MyButton({ text }: MyButtonProps) {
  return(
    <S.Container>
      <S.ButtonText>{text}</S.ButtonText>
    </S.Container>
  );
}

export { MyButton }