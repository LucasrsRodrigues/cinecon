import React, { useRef } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-snap-carousel-v4';
import { commingSoon } from '../../../../global/datas/filmes';

import * as S from './styles';

const { width: scrennWidth } = Dimensions.get('window');

const filmes = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => { }}>
      <S.CarouselImg source={{ uri: item.image }} />
      {/* <S.CarouselIcon name="play-circle-outline" size={30} color="#fff" /> */}
      <S.Nota>
        <S.NotaText>{item.nota}</S.NotaText>
        <S.NotaTextLittle>/10</S.NotaTextLittle>
      </S.Nota>

      <S.WrapperTitle
        colors={['rgba(0, 0, 0, 0.24)', 'rgba(0, 0, 0, 1)']}
      >
        <S.Title>
          {item.title}
        </S.Title>
      </S.WrapperTitle>
    </TouchableOpacity>
  );
};


export function Carrossel() {
  const carouselRef = useRef(null);

  return (
    <S.Container>
      <Carousel
        layout="default"
        ref={carouselRef}
        data={commingSoon}
        renderItem={filmes}
        sliderWidth={scrennWidth}
        itemWidth={230}
        inactiveSlideOpacity={0.6}
        firstItem={2}
      />
    </S.Container>
  );
}
