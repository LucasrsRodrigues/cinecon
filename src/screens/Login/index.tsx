import React from 'react';
import { Header } from '../../global/components/Header';
import { MyButton } from '../../global/components/MyButton';
import { MyInput } from '../../global/components/MyInput';

import GoogleSvg from '../../assets/social/Google.svg';
import FacebookSvg from '../../assets/social/Facebook.svg';

import * as S from './styles';

function Login() {
  return(
    <S.Safe>
      <Header title="Log In" />

      <S.Container>
        <S.ProfilePicture></S.ProfilePicture>

        <S.WrapperInputs>
          <MyInput label='Email' />
          <MyInput label='Senha' />
        </S.WrapperInputs>

        <MyButton text="Log In" />

        <S.Lorem>
          or login with
        </S.Lorem>

        <S.MediaButtons>
          <S.MediaButton>
            <GoogleSvg />
            <S.MediaButtonText>Gmail</S.MediaButtonText>
          </S.MediaButton>

          <S.MediaButton>
            <FacebookSvg />
            <S.MediaButtonText>Facebook</S.MediaButtonText>
          </S.MediaButton>
        </S.MediaButtons>

        <S.Lorem>
          Don't have an account?
          {' '}
          <S.Link>
            Register
          </S.Link>
        </S.Lorem>
      </S.Container>
    </S.Safe>
  );
}

export { Login }