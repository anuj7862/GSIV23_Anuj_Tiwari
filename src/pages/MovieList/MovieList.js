import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import MovieCard from '../../component/MovieCard/MovieCard';
import { clearResponse, getSearchedMovie, getUpcomingMovie } from '../../state/actions';
import { GET_MOVIES, GET_MOVIE_CAST_DETAILS, GET_MOVIE_DETAILS } from '../../state/actionTypes';
import './MovieList.sass';

export default function MovieList() {

  const appState = useSelector((state) => state.movies_list);
  const dispatch = useDispatch();

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  let isOnLoad = useRef(true);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [errorFlag, setErrorFlag] = useState(false);
  const onLoad = useCallback(() => {
    if (!isOnLoad.current)
      return;
    else {
      isOnLoad.current = false;
      dispatch(clearResponse(GET_MOVIES));
      dispatch(clearResponse(GET_MOVIE_CAST_DETAILS));
      dispatch(clearResponse(GET_MOVIE_DETAILS));
      dispatch(getUpcomingMovie(1, GET_MOVIES));
      console.log("on Load List Screen", isOnLoad);
    }
  }, [dispatch, isOnLoad]);

  useEffect(() => {
    onLoad();
  }, [onLoad, isOnLoad]);

  useEffect(() => {
    //if get Success response...
    if (appState?.respMessage !== null && appState?.respMessage !== undefined) {
      if (appState.respMessage?.length === 0)
        setHasMore(false);
      setMovies(movies => [...movies, ...appState.respMessage]);
      setPage(page => page + 1);
      //console.log("In side useEffect MoiveList", appState.respMessage);
      dispatch(clearResponse(GET_MOVIES));
      setErrorFlag(true);
    }
    //if got error show altert...
    else if(appState?.errorMessage !== null && appState?.errorMessage !== undefined){
        alert("Error in getUpcomingMovie or getSearchedMovie api" + appState.errorMessage);
        setErrorFlag(true);
    }

  }, [appState, appState?.respMessage, appState?.errorMessage, dispatch]);

  const loadData = () => {
    if (searchQuery === '') {
      dispatch(getUpcomingMovie(page, GET_MOVIES));
      setErrorFlag(false);
      setHasMore(true);
    }
    else {
      dispatch(getSearchedMovie(searchQuery, page, GET_MOVIES));
      setErrorFlag(false);
      setHasMore(true);
    }
  };

  const changeHandler = (event) => {
    setSearchQuery(event.target.value);
    setMovies([]);
    setPage(1);
    if (event.target.value === '') {
      dispatch(getUpcomingMovie(1, GET_MOVIES));
      setErrorFlag(false);
      setHasMore(true);
    }
    else {
      dispatch(getSearchedMovie(event.target.value, 1, GET_MOVIES));
      setErrorFlag(false);
      setHasMore(true);
    }
  };

  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const Loading = () => {
    return (
      <h3 className='loading-list'>Loading...</h3>
    );
  }

  return (
    <div>
      <div className='header'>
        <input type="text" placeholder='Search' onChange={changeHandler} />
        <i className='material-icons home-icon' onClick={handleHomeClick}>home</i>
      </div>
      <div className='movie-list'>
        { (movies.length > 0  || !errorFlag) ?
            <InfiniteScroll
              dataLength={movies.length}
              next={loadData}
              hasMore={hasMore}
              loader={<Loading />}
            >
              <div className='movie-list'>
                {movies.map(movie => (
                  <MovieCard
                    key={movie?.id}
                    id={movie?.id}
                    preview={movie?.poster_path}
                    title={movie?.title}
                    rating={Number(movie?.vote_average.toFixed(1))}
                    description={movie?.overview}
                  />
                ))}
              </div>
            </InfiniteScroll>
            : <h2 className='error-message'> {`:( No Data Found...`} </h2>
        }
      </div>
    </div>
  )
}
