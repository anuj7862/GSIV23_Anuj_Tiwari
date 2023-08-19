import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../../component/MovieCard/MovieCard';
import { clearResponse, getUpcomingMovie } from '../../state/actions';
import { GET_MOVIES } from '../../state/actionTypes';
import './MovieList.sass';

export default function MovieList() {
  const appState = useSelector((state) => state.movies_list);
  const dispatch = useDispatch();

  const [movies, setMovies] = useState([]);
  let isOnLoad = true;

  const onLoad = useCallback(() => {
    if (!isOnLoad)
      return;
    else {
      isOnLoad = false;
      dispatch(getUpcomingMovie(1, GET_MOVIES));
      console.log("on Load");
    }
  }, [dispatch, isOnLoad]);

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  useEffect(() => {
    if (appState?.respMessage !== null && appState?.respMessage !== undefined) {
      setMovies(appState.respMessage);
      console.log("Inside MovieList useEffect");
      dispatch(clearResponse(GET_MOVIES));
    }
  }, [appState, appState?.respMessage, dispatch]);

  return (
    <div className='movie-list'>
      {movies.map(movie => (
        <MovieCard
          preview={movie?.poster_path}
          title={movie?.title}
          rating={movie?.vote_average}
          description={movie?.overview}
        />
      ))}
    </div>
  )
};
