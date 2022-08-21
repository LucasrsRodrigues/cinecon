import React, { useRef } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-snap-carousel-v4';
import { CardFilm } from '../../../../global/components/CardFilm';
import { commingSoon } from '../../../../global/datas/filmes';

import * as S from './styles';

const { width: scrennWidth } = Dimensions.get('window');

export function Carrossel() {
  const carouselRef = useRef(null);

  return (
    <S.Container>
      <Carousel
        layout="default"
        ref={carouselRef}
        data={commingSoon}
        renderItem={({ item }) => <CardFilm item={item} />}
        sliderWidth={scrennWidth}
        itemWidth={230}
        inactiveSlideOpacity={0.6}
        firstItem={2}
      />
    </S.Container>
  );
}
