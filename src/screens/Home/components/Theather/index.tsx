import React from 'react';

import * as S from './styles';

function Theather() {
  return(
    <S.Container>
      <S.Header>
        <S.Title>In Theater</S.Title>
        <S.Button>
          <S.ButtonText>More</S.ButtonText>
        </S.Button>
      </S.Header>
    </S.Container>
  );
}

export { Theather }