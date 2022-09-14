import React from 'react';

import * as S from './styles';

function PaymentMethod() {
  return(
    <S.Container>
      <S.TitleSection>Payment Method</S.TitleSection>

      <S.WrapperMethods horizontal paddingHorizontal={20}>
        <S.Method>
          <S.MethodTitle>
            Credit Card
          </S.MethodTitle>
        </S.Method>

        <S.Method>
          <S.MethodTitle>
            Bank Card
          </S.MethodTitle>
        </S.Method>

        <S.Method>
          <S.MethodTitle>
            Money
          </S.MethodTitle>
        </S.Method>
      </S.WrapperMethods>

    </S.Container>
  );
}

export { PaymentMethod }