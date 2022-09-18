import React, { useEffect, useState } from 'react';
import IMovieProps from '../../../../global/@types/IMovieProps';
import { CardMovie } from '../../../../global/components/CardMovie';
import { TMDB_KEY } from '../../../../global/keys/env';
import tmdb from '../../../../global/services/tmdb';

import * as S from './styles';

function Theather() {
  const [movies, setMovies] = useState<IMovieProps[]>([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    (async () => {
      setLoading(true);
      
      const listMovies = await tmdb.get(`movie/now_playing?api_key=${TMDB_KEY}&language=pt-BR&page=1`);

      setMovies(listMovies.data.results.slice(0, 6));
      setLoading(false);
    })();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.Title>In Theater</S.Title>
        <S.Button>
          <S.ButtonText>More</S.ButtonText>
        </S.Button>
      </S.Header>
      <S.Body>
        <S.Left>          
          {movies.filter((item, index) => index % 2 === 0).map(movie => (
            <S.WrapperMovie key={movie.id}>
              <CardMovie loading={loading} width={157} height={220} item={movie} showFilter={false} />
            </S.WrapperMovie>
          ))}
        </S.Left>
        <S.Right>
          {movies.filter((item, index) => index % 2 === 1).map(movie => (
            <S.WrapperMovie key={movie.id}>
              <CardMovie loading={loading} width={157} height={220} item={movie} showFilter={false} />
            </S.WrapperMovie>
          ))}
        </S.Right>
      </S.Body>
    </S.Container>
  );
}

export { Theather }