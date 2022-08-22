import React, { useEffect, useState } from 'react';
import IMovieProps from '../../../../global/@types/IMovieProps';
import { CardMovie } from '../../../../global/components/CardMovie';
import { TMDB_KEY } from '../../../../global/keys/env';
import tmdb from '../../../../global/services/tmdb';

import * as S from './styles';

function Theather() {
  const [movies, setMovies] = useState<IMovieProps[]>([]);

  useEffect(() => {
    (async () => {
      const listMovies = await tmdb.get(`/now_playing?api_key=${TMDB_KEY}&language=en-US&page=1`);

      setMovies(listMovies.data.results);
    })();
  }, []);

  return(
    <S.Container>
      <S.Header>
        <S.Title>In Theater</S.Title>
        <S.Button>
          <S.ButtonText>More</S.ButtonText>
        </S.Button>
      </S.Header>
      <S.Body>
        {/* {movies.map(movie => <CardMovie item={movie} showFilter={false} />)} */}
        <S.Left>
          <CardMovie width={157} height={220} item={movies[0]} showFilter={false} />

        </S.Left>
        <S.Right>

        </S.Right>
      </S.Body>
    </S.Container>
  );
}

export { Theather }