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
import { Text, View } from 'react-native';


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
  popularity:number;
  vote_count:number;
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
  const [genreSearch, setGenreSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState('');

  const theme = useTheme();

  async function getGenres() {
    const response = await tmdb.get(`/genre/movie/list?api_key=${TMDB_KEY}&language=pt-BR`);
    let newArray = response.data.genres.map((genre) => {
      return { key: genre.id, value: genre.name}
    });
    
    setGenred(newArray);
  }

  useEffect(() => {
    getGenres();
  }, []);

  const findMovie = useCallback(async () => {
    const params = searchMovie.split(' ').join('+');
    const response = await tmdb.get(`/search/movie?api_key=${TMDB_KEY}&language=pt-BR&query=${params}&genre=99`);
    
    setMovies(response.data.results);
  }, [searchMovie]);


  const FilterCategories = useCallback((value: number) => {
    const filtered = movies.filter(movie => movie.genre_ids.includes(value));

    setMovies(filtered);
  }, []);

  return (
    <S.Safe>
      <Header title='Search'  />

      <S.Container>
        <S.Form>
          <S.WrapperSearchInput>
            <S.SearchInput 
              placeholder="Search" 
              placeholderTextColor={`${theme.colors.typography}60`}
              onSubmitEditing={findMovie}
              onChangeText={(event) => setSearchMovie(event)}
            />
            <Octicons 
              style={{alignSelf: 'center'}} 
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

        <S.Body>
          <S.Left>
            {movies.filter((item, index) => index % 2 === 0).map(movie => (
              <S.WrapperMovie key={movie.id}>
                <CardMovie loading={false} width={157} height={220} item={movie} showFilter={false} />
              </S.WrapperMovie>
            ))}
          </S.Left>
          <S.Right>
            {movies.filter((item, index) => index % 2 === 1).map(movie => (
              <S.WrapperMovie key={movie.id}>
                <CardMovie loading={false} width={157} height={220} item={movie} showFilter={false} />
              </S.WrapperMovie>
            ))}
          </S.Right>
        </S.Body>
      </S.Container>
    </S.Safe>
  );
}