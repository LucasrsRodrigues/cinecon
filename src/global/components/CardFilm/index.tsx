import React from 'react';
import { TouchableOpacity } from 'react-native';

import * as S from './styles';

interface CardFilm {
  item: {
    image: string;
    nota: string;
    title?: string;
  }
}

function CardFilm({ item }: CardFilm) {
  return(
    <S.Container>
      <TouchableOpacity onPress={() => { }}>
        <S.CarouselImg source={{ uri: item.image }} />
        {/* <S.CarouselIcon name="play-circle-outline" size={30} color="#fff" /> */}
        <S.Nota>
          <S.NotaText>{item.nota}</S.NotaText>
          <S.NotaTextLittle>/10</S.NotaTextLittle>
        </S.Nota>

        {item.title && (
          <S.WrapperTitle
            colors={['rgba(0, 0, 0, 0.24)', 'rgba(0, 0, 0, 1)']}
          >
            <S.Title>
              {item.title}
            </S.Title>
          </S.WrapperTitle>
        )}        
      </TouchableOpacity>
    </S.Container>
  );
}

export { CardFilm }