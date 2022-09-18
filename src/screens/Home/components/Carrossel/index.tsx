import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-snap-carousel-v4';
import { CardMovie } from '../../../../global/components/CardMovie';
import { commingSoon } from '../../../../global/datas/filmes';
import { TMDB_KEY } from '../../../../global/keys/env';
import tmdb from '../../../../global/services/tmdb';


import * as S from './styles';

const { width: scrennWidth } = Dimensions.get('window');

export function Carrossel() {
  const carouselRef = useRef(null);
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const listMovies = await tmdb.get(`movie/upcoming?api_key=${TMDB_KEY}&language=pt-BR&page=1`);

      setFilms(listMovies.data.results);
      setLoading(false);
    })();
  }, []);

  return (
    <S.Container>
      <Carousel
        layout="default"
        ref={carouselRef}
        data={films}
        renderItem={({ item }) => <CardMovie loading={loading} width={230} height={400} item={item} />}
        sliderWidth={scrennWidth}
        itemWidth={230}
        inactiveSlideOpacity={0.6}
        firstItem={2}
      />
    </S.Container>
  );
}
