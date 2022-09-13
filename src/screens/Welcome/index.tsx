import React from 'react';
import { Header } from '../../global/components/Header';
import LoginImage from '../../assets/icons/solid/LoginImage.svg';

import GoogleSvg from '../../assets/social/Google.svg';
import FacebookSvg from '../../assets/social/Facebook.svg';

import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

export function Welcome() {

  const { navigate } = useNavigation();

  return (
    <S.Safe>
      <Header />

      <S.Container>
        <S.Title>Welcome</S.Title>

        <S.WrapperImage>
          <LoginImage />        
        </S.WrapperImage>

        <S.Button onPress={() => navigate('Register')}>
          <S.ButtonText>Register</S.ButtonText>
        </S.Button>

        <S.Button themeColor="dark">
          <S.ButtonText themeColor="dark">Log In</S.ButtonText>
        </S.Button>

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
      </S.Container>
    </S.Safe>
  );
}