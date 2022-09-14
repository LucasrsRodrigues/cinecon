import React, { useState } from 'react';
import { Header } from '../../global/components/Header';
import { PaymentMethod } from './components/PaymentMethod';
import { PersonalInfo } from './components/PersonalInfo';

import * as S from './styles';

export default function Register() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <S.Safe>
      <Header />
      <S.Container>

        <S.Steps>
          <S.Step active />
          <S.Step active={activeStep === 2} />
          <S.ActiveStep>

          </S.ActiveStep>
        </S.Steps>

        {activeStep === 1 ? (
          <PersonalInfo change={setActiveStep} />
        ) : (
          <PaymentMethod />
        )}
      </S.Container>
    </S.Safe>
  );
}

export { Register }