import React from 'react';
import { TouchableOpacity } from 'react-native';
import IMovieProps from '../../@types/IMovieProps';

import * as S from './styles';

interface CardMovieProps {
  item: IMovieProps;
  showFilter?: boolean;
  width: number;
  height: number;
  loading: boolean;
}

function CardMovie({ item, showFilter = true, width, height, loading }: CardMovieProps) {
  const image_path = 'https://image.tmdb.org/t/p/w500';

  if (loading) {
    return(
      <S.ContainerShadow>

      </S.ContainerShadow>
    )
  }

  return(
    <S.Container>
      <TouchableOpacity onPress={() => { }}>
        <S.CarouselImg width={width} height={height} source={{ uri: `${image_path}${item.poster_path}` }}>
          <S.Nota>
            <S.NotaText>{item.vote_average}</S.NotaText>
            <S.NotaTextLittle>/10</S.NotaTextLittle>
          </S.Nota>

          {showFilter && (
            <S.WrapperTitle
              colors={['transparent', 'rgba(0, 0, 0, 0.24)', 'rgba(0, 0, 0, 0.50)', 'rgba(0, 0, 0, 1)']}
            >
              <S.Title>
                {item.title}
              </S.Title>
            </S.WrapperTitle>
          )}        
        </S.CarouselImg>
      </TouchableOpacity>
    </S.Container>
  );
}

export { CardMovie }