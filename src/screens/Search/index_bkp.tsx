import React, { useCallback, useEffect, useState } from 'react';
import { Header } from '../../global/components/Header';
import { MyInput } from '../../global/components/MyInput';
import { Octicons, Entypo } from '@expo/vector-icons';
import * as S from './styles';
import { useTheme } from 'styled-components';
import SelectList from 'react-native-dropdown-select-list';
import tmdb from '../../global/services/tmdb';
import { TMDB_KEY } from '../../global/keys/env';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { CardMovie } from '../../global/components/CardMovie';
import { ActivityIndicator, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';


interface MovieProps {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: Array<number>;
  id: number,
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

const rating = [
  {
    key: 0,
    value: 0
  },
  {
    key: 1,
    value: 1
  },
  {
    key: 2,
    value: 2
  },
  {
    key: 3,
    value: 3
  },
  {
    key: 4,
    value: 4
  },
  {
    key: 5,
    value: 5
  },
  {
    key: 6,
    value: 6
  },
  {
    key: 7,
    value: 7
  },
  {
    key: 8,
    value: 8
  },
  {
    key: 9,
    value: 9
  },
  {
    key: 10,
    value: 10
  }
];

export function Search() {
  const [selected, setSelected] = useState('');
  const [searchMovie, setSearchMovie] = useState('');
  const [genres, setGenred] = useState([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [ratingSearch, setRatingSearch] = useState('');

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  function clearStates() {
    setMovies([]);
    setPage(1);
    setLoading(false);
    setSearchMovie('');
    getGenres();
  }

  async function getGenres() {
    const response = await tmdb.get(`/genre/movie/list?api_key=${TMDB_KEY}&language=pt-BR`);

    let newArray = response.data.genres.map((genre) => {
      return { key: genre.id, value: genre.name }
    });

    setGenred(newArray);
  }

  async function findMovie() {
    if (loading) {
      return;
    }

    setLoading(true);

    const params = searchMovie.split(' ').join('+');
    const response = await tmdb.get(`/search/movie?api_key=${TMDB_KEY}&language=pt-BR&query=${params}&total_results=5&page=${page}`);
    setLoading(false);
    setPage(page + 1);

    setMovies([...movies, ...response.data.results]);
  }

  const FilterCategories = useCallback((value: number) => {
    const filtered = movies.filter(movie => movie.genre_ids.includes(value));

    setMovies(filtered);
  }, [movies]);

  useFocusEffect(useCallback(() => {
    clearStates();
  }, []));

  return (
    <S.Safe>
      <Header title='Search' />

      <S.Container>
        <S.Form>
          <S.WrapperSearchInput>
            <S.SearchInput
              placeholder="Search"
              placeholderTextColor={`${theme.colors.typography}60`}
              onSubmitEditing={() => { clearStates(); findMovie(); }}
              value={searchMovie}
              onChangeText={(event) => setSearchMovie(event)}
            />
            <Octicons
              style={{ alignSelf: 'center' }}
              name="search"
              size={24}
              color={theme.colors.icons}
            />
          </S.WrapperSearchInput>
          <S.WrapperSelects>
            <SelectList
              data={genres}
              setSelected={(value) => FilterCategories(value)}
              inputStyles={{
                width: 110,
                color: `${theme.colors.typography}60`,
              }}
              arrowicon={
                <Entypo
                  name="chevron-down"
                  color={`${theme.colors.typography}60`}
                  size={17}
                />
              }

              placeholder="Gênero"
              searchicon={
                <Octicons
                  name="search"
                  color={`${theme.colors.typography}60`}
                  style={{ marginRight: 10 }}
                  size={17}
                />
              }
              boxStyles={{
                borderColor: theme.colors.background_light,
                borderWidth: 2,
                borderRadius: 8
              }}

              dropdownTextStyles={{
                color: `${theme.colors.typography}60`,
                fontSize: RFValue(16)
              }}


            />

            <SelectList
              data={rating}
              setSelected={setRatingSearch}
              inputStyles={{
                width: 110,
                color: `${theme.colors.typography}60`,
              }}
              placeholder="Nota"
              arrowicon={
                <Entypo
                  name="chevron-down"
                  color={`${theme.colors.typography}60`}
                  size={17}
                />
              }

              searchicon={
                <Octicons
                  name="search"
                  color={`${theme.colors.typography}60`}
                  style={{ marginRight: 10 }}
                  size={17}
                />
              }
              boxStyles={{
                borderColor: theme.colors.background_light,
                borderWidth: 2,
                borderRadius: 8
              }}

              dropdownTextStyles={{
                color: `${theme.colors.typography}60`,
                fontSize: RFValue(16)
              }}
            />
          </S.WrapperSelects>
        </S.Form>

        {/* Inifnite Scroll */}

        <S.Body>

          <FlatList
            data={movies}
            style={{ marginBottom: RFValue(250) }}
            keyExtractor={item => String(item.id)}
            numColumns={2}
            renderItem={({ item }) => <CardMovie loading={false} width={157} height={220} item={item} showFilter={false} />}
            columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 15 }}
            onEndReached={findMovie}
            onEndReachedThreshold={0.1}
            ListFooterComponent={<FooterList load={loading} />}
            showsVerticalScrollIndicator={false}
          />

        </S.Body>

        {/* Inifnite Scroll */}
      </S.Container>
    </S.Safe>
  );
}



function FooterList({ load }) {
  if (!load) {
    return null;
  }

  return (
    <View style={{ padding: 10 }}>
      <ActivityIndicator size={25} color="#8819" />
    </View>
  )
}