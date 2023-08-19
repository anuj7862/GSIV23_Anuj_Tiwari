import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../../component/MovieCard/MovieCard';
import { clearResponse, getSearchedMovie, getUpcomingMovie } from '../../state/actions';
import { GET_MOVIES } from '../../state/actionTypes';
import './MovieList.sass';

export default function MovieList() {
  const appState = useSelector((state) => state.movies_list);
  const dispatch = useDispatch();

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  let isOnLoad = true;
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const onLoad = useCallback(() => {
    if (!isOnLoad)
      return;
    else {
      isOnLoad = false;
      dispatch(clearResponse(GET_MOVIES));
      dispatch(getUpcomingMovie(1, GET_MOVIES));
      //setPage(page => page+1);
      console.log("inside onLoad of MovieList", isOnLoad);
    }
  }, [dispatch, isOnLoad]);

  useEffect(() => {
    onLoad();
  }, [onLoad, isOnLoad]);


  useEffect(() => {
    if (appState?.respMessage !== null && appState?.respMessage !== undefined) {
      if (appState.respMessage.length === 0)
        setHasMore(false);
      setMovies(movies => [...movies, ...appState.respMessage]);
      //setMovies(appState.respMessage);
      setPage(page => page + 1);
      dispatch(clearResponse(GET_MOVIES));
    }
  }, [appState, appState?.respMessage, dispatch]);

  const loadData = () => {
    //console.log("in side loadData infi");
    if (searchQuery === '') {
      dispatch(getUpcomingMovie(page, GET_MOVIES));
    }
    else {
      dispatch(getSearchedMovie(searchQuery, page, GET_MOVIES));
    }
  };

  const changeHandler = (event) => {
    setSearchQuery(event.target.value);
    setMovies([]);
    setPage(1);
    if (event.target.value === '') {
      dispatch(getUpcomingMovie(1, GET_MOVIES));
    }
    else {
      dispatch(getSearchedMovie(event.target.value, 1, GET_MOVIES));
    }
  };

  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <div className='header'>
        <input type="text" placeholder='Search' onChange={changeHandler} />
        {/* <button className='home-icon'> */}
        <i className='material-icons home-icon' onClick={handleHomeClick}>home</i>
        {/* </button> */}
      </div>
      <div className='movie-list'>
        <InfiniteScroll
          dataLength={movies.length}
          next={loadData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div className='movie-list'>
            {movies.map(movie => (
              <MovieCard
                preview={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                description={movie.overview}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  )
};