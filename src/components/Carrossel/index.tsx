import React, { useRef } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-snap-carousel-v4';

import * as S from './styles';

const { width: scrennWidth } = Dimensions.get('window');


export const data = [
  {
    title: 'Anjos da Noite',
    text: 'Na calada da noite, vampiros se envolvem em uma batalha antiga com seus inimigos, os Lycans, um grupo de lobisomens violentos. Selene, uma vampira que é órfã por conta de um ataque dos Lycan, trabalha para o clã dos vampiros como uma matadora treinada. Quando os Lycan se interessam misteriosamente por Michael Corvin, um doutor mortal excepcional, Selene luta para livrá-lo de Lucian, um cruel Lycan.',
    release: '16 de abril de 2004',
    direction: 'Len Wiseman',
    img: 'https://pbs.twimg.com/media/EuhZHMKWQAE84f7?format=jpg&name=large',
  },
  {
    title: 'Anjos da Noite - A Evolução',
    text: 'A antiga luta entre predadores ganha novas dimensões de violência. Traída pelo seu próprio clã, a guerreira vampira Selene busca vingança e decide descobrir a verdade sobre a identidade do primeiro Imortal verdadeiro.',
    release: '12 de janeiro de 2006',
    direction: 'Len Wiseman',
    img: 'https://img.elo7.com.br/product/original/259A7AA/big-poster-filme-vingadores-ultimato-lo001-tamanho-90x60-cm-poster-marvel.jpg',
  },
  {
    title: 'Anjos da Noite - A Rebelião',
    text: 'Viktor, o cruel rei dos vampiros, tem perseguido e escravizado os lycans, uma linhagem de lobisomens nascidos humanos, por séculos. Este tirano ancião exige prata dos nobres, com o propósito de manter o controle dos seus escravos bestiais. Enquanto cresce, o jovem Lucian se apaixona pela filha de Viktor, Sonja, uma vampira insubordinada e imprudente. Juntos, Sonja e Lucian orquestram uma batalha épica, que marca o início de uma longa guerra entre vampiros e lobisomens.',
    release: '23 de janeiro de 2009',
    direction: 'Len Wiseman',
    img: 'https://img.elo7.com.br/product/original/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg',
  },

  {
    title: 'Anjos da Noite - O Despertar',
    text: 'Após passar anos em estado de coma induzido, a vampira Selene desperta e descobre que tem uma poderosa filha metade lobisomem, metade vampira. Agora Selene precisa defender a menina de um grupo de assassinos de lobisomens.',
    release: '2 de março de 2012',
    direction: 'Len Wiseman',
    img: 'https://img.elo7.com.br/product/zoom/2677A3D/big-poster-filme-homem-aranha-de-volta-ao-lar-lo06-90x60-cm-homem-aranha-de-volta-ao-lar.jpg',
  },
];

const filmes = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => { }}>
      <S.CarouselImg source={{ uri: item.img }} />
      <S.CarouselIcon name="play-circle-outline" size={30} color="#fff" />
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
        data={data}
        renderItem={filmes}
        sliderWidth={scrennWidth}
        itemWidth={230}
        inactiveSlideOpacity={0.6}
      />
    </S.Container>
  );
}
