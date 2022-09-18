import React, { useEffect, useState } from 'react';
import { Header } from '../../global/components/Header';
import { MyInput } from '../../global/components/MyInput';
import { Octicons } from '@expo/vector-icons';
import * as S from './styles';
import { useTheme } from 'styled-components';
import SelectList from 'react-native-dropdown-select-list';
import tmdb from '../../global/services/tmdb';
import { TMDB_KEY } from '../../global/keys/env';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export function Search() {
  const [selected, setSelected] = useState('');
  const [genres, setGenred] = useState([]);

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

  return (
    <S.Safe>
      <Header title='Search'  />

      <S.Container>
        <S.Form>
          <S.WrapperSearchInput>
            <S.SearchInput 
              placeholder="Search" 
              placeholderTextColor={`${theme.colors.typography}60`}
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
              setSelected={setSelected} 
              inputStyles={{
                width: 110,
                color: `${theme.colors.typography}60`
              }}              
              
            />

            <SelectList
              data={genres}
              setSelected={setSelected}
              inputStyles={{
                width: 110
              }}
            />
          </S.WrapperSelects>
        </S.Form>
      </S.Container>
    </S.Safe>
  );
}