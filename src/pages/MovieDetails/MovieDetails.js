import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { serviceProps } from '../../config/appEnvConfig';
import { clearResponse, getMoiveCastDetails, getMoiveDetails } from '../../state/actions';
import { GET_MOVIE_CAST_DETAILS, GET_MOVIE_DETAILS } from '../../state/actionTypes';
import './MovieDetails.sass';

export default function MovieDetails(props) {

  const movieData = useSelector((state) => state.movie_details);
  const movieCastData = useSelector((state) => state.movie_cast_details)
  const dispatch = useDispatch();

  let isOnLoad = true;
  const [movieDetails, setMovieDetails] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [year, setYear] = useState('');
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');
  const [director, setDirector] = useState('');
  const [cast, setCast] = useState([]);
  const [ratingClass, setRatingClass] = useState('');

  const onLoad = useCallback(() =>{
    if(!isOnLoad){
        return;
    }
    else{
        console.log('onLoad function Details page');
        isOnLoad = false;
        dispatch(clearResponse(GET_MOVIE_DETAILS));
        dispatch(clearResponse(GET_MOVIE_CAST_DETAILS));
        dispatch(getMoiveDetails(props.movieId, GET_MOVIE_DETAILS));
        dispatch(getMoiveCastDetails(props.movieId, GET_MOVIE_CAST_DETAILS));
    }
  }, [dispatch, isOnLoad]);

  useEffect(() => {
    onLoad();
  },[onLoad, isOnLoad]);

  const ratingClassFunc = (rating) => {
        if(rating >= 7)
            return 'high-rating';
        else if(rating >=4)
            return 'mid-rating';
        return 'low-rating';
  };
  
  useEffect(() => {
    if(movieData?.respMessage !== null && movieData?.respMessage !== undefined){ 
        setMovieDetails(movieData.respMessage);
        //dispatch(clearResponse(GET_MOVIES));
        setYear(movieData.respMessage?.release_date.split('-')[0]);
        setHour(Math.floor(movieData.respMessage?.runtime/60).toString().padStart(2, '0'));
        setMin((movieData.respMessage?.runtime%60).toString().padStart(2, '0'));
        setRatingClass(ratingClassFunc(movieData.respMessage?.vote_average));
        setDataLoaded(true);
    }

    if(movieCastData?.respMessage !== null && movieCastData?.respMessage !== undefined){
        let crew = movieCastData.respMessage?.crew;
        let cast = movieCastData.respMessage?.cast.map(obj => obj.name);
        let director = crew.filter( obj => obj.job === "Director");
        // console.log(cast);
        // console.log("DD", director);
        setCast(cast);
        setDirector(director);
        
    }
  },[movieData?.response, movieCastData?.respMessage, dispatch]);

  return (
    <div className="movie-details">

        <div className="header">
            <p className="header-title">Movie Details</p>
            <i className="material-icons home-icon">home</i>
        </div>
        {dataLoaded &&
            <div className='movie-info'>
            <img src={`${serviceProps.getMoviePoster.uri}${movieDetails?.poster_path}`} alt="" className="preview" />
            <div className="info">
                <div className="title">{`${movieDetails?.original_title} (`}<span className={ratingClass}>{movieDetails?.vote_average}</span>{`)`} </div>
                <div className="year-len-director">{`${year} | ${hour}:${min} | ${director[0]?.name}`}</div>
                <div className="cast">{`Cast: ${cast}`}</div>
                <div className="description">{`Description: ${movieDetails?.overview}`}</div>
            </div>
            </div>
        }
    </div>
  )
}