import React, { useEffect, useState } from 'react';
import { Header } from '../../global/components/Header';
import theme from '../../global/styles/theme';
import { Octicons, Entypo } from '@expo/vector-icons';
import SelectList from 'react-native-dropdown-select-list';

import * as S from './styles';
import tmdb from '../../global/services/tmdb';
import { TMDB_KEY } from '../../global/keys/env';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { CardMovie } from '../../global/components/CardMovie';
import { RFValue } from 'react-native-responsive-fontsize';

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
  const [searchMovie, setSearchMovie] = useState('Slime');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ratingSearch, setRatingSearch] = useState('');
  const [genres, setGenred] = useState([]);

  useEffect(() => {
    clearStates();

    const getMovies = async () => {
      const params = searchMovie.split(' ').join('+');
      const response = await tmdb.get(`/search/movie?api_key=${TMDB_KEY}&language=pt-BR&query=${params}&total_results=5&page=${page}`)
      setMovies(response.data.results);
    }

    getMovies();
  }, []);

  function clearStates() {
    setMovies([]);
    setPage(1);
    setLoading(false);
    setSearchMovie('');
    // getGenres();
  }


  const SearchMovieData = async () => {
    const params = searchMovie.split(' ').join('+');
    const response = await tmdb.get(`/search/movie?api_key=${TMDB_KEY}&language=pt-BR&query=${params}&total_results=5&page=${page}`)
    setPage(page + 1);
    setMovies(response.data.results);
  }

  async function InfiniteScroll() {
    if (loading) {
      return;
    }
    setLoading(true);
    setPage(page + 1);
    const params = searchMovie.split(' ').join('+');
    // console.log(`/search/movie?api_key=${TMDB_KEY}&language=pt-BR&query=${params}&total_results=5&page=${page}`);
    const response = await tmdb.get(`/search/movie?api_key=${TMDB_KEY}&language=pt-BR&query=${params}&total_results=5&page=${page}`);
    setLoading(false);

    // console.log(response.data.total_pages);
    setMovies([...movies, ...response.data.results]);
  }


  return (
    <S.Safe>
      <Header title='Search' />

      <S.Container>
        <S.Form>
          <S.WrapperSearchInput>
            <S.SearchInput
              placeholder="Search"
              placeholderTextColor={`${theme.colors.typography}60`}
              value={searchMovie}
              onChangeText={(event) => setSearchMovie(event)}
              onSubmitEditing={SearchMovieData}
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

              placeholder="G??nero"
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
        <S.Body>
          <FlatList
            data={movies}
            style={{ marginBottom: RFValue(250) }}
            keyExtractor={item => String(item.id)}
            numColumns={2}
            renderItem={({ item }) => <CardMovie loading={false} width={157} height={220} item={item} showFilter={false} />}
            columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 15 }}
            onEndReached={InfiniteScroll}
            onEndReachedThreshold={0.1}
            ListFooterComponent={<FooterList load={loading} />}
            showsVerticalScrollIndicator={false}
          />
        </S.Body>



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