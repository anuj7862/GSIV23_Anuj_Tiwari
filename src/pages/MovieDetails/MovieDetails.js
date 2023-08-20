import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { serviceProps } from '../../config/appEnvConfig';
import { clearResponse, getMoiveCastDetails, getMoiveDetails } from '../../state/actions';
import { GET_MOVIE_CAST_DETAILS, GET_MOVIE_DETAILS } from '../../state/actionTypes';
import './MovieDetails.sass';
import movie_logo from '../../movie_logo.jpg';

export default function MovieDetails() {
  
    const { id } = useParams();
    const movieData = useSelector((state) => state.movie_details);
    const movieCastData = useSelector((state) => state.movie_cast_details)
    const dispatch = useDispatch();

    let isOnLoad = useRef(true);
    const [movieDetails, setMovieDetails] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [year, setYear] = useState('');
    const [hour, setHour] = useState('');
    const [min, setMin] = useState('');
    const [director, setDirector] = useState('');
    const [cast, setCast] = useState([]);
    const [ratingClass, setRatingClass] = useState('');
    const onLoad = useCallback(() =>{
    if(!isOnLoad.current){
        return;
    }
    else{
        console.log('onLoad function Details page');
        isOnLoad.current = false;
        dispatch(clearResponse(GET_MOVIE_DETAILS));
        dispatch(clearResponse(GET_MOVIE_CAST_DETAILS));
        dispatch(getMoiveDetails(id, GET_MOVIE_DETAILS));
        dispatch(getMoiveCastDetails(id, GET_MOVIE_CAST_DETAILS));
    }
  }, [dispatch, id, isOnLoad]);

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
    
    //if get Success response...
    if(movieData?.respMessage !== null && movieData?.respMessage !== undefined){ 
        setMovieDetails(movieData.respMessage);
        setYear(movieData.respMessage?.release_date.split('-')[0]);
        setHour(Math.floor(movieData.respMessage?.runtime/60).toString().padStart(2, '0'));
        setMin((movieData.respMessage?.runtime%60).toString().padStart(2, '0'));
        setRatingClass(ratingClassFunc(movieData.respMessage.vote_average));
        setDataLoaded(true);
    }
    //if got error show alter
    else if(movieData?.errorMessage !== null && movieData?.errorMessage !== undefined){
        alert("Error in getMovieDetails api" + movieData.errorMessage);
    }

    //-----------------------------------------------------------------------------------
    //if get Success response...
    if(movieCastData?.respMessage !== null && movieCastData?.respMessage !== undefined){
        let crew = movieCastData.respMessage?.crew;
        let cast = movieCastData.respMessage?.cast.map(obj => " " + obj?.name);
        let director = crew.filter( obj => obj?.job === "Director");
        setCast(cast);
        setDirector(director);
        
    }
    //if got error show alter
    else if(movieCastData?.errorMessage !== null && movieCastData?.errorMessage !== undefined){
        alert("Error in getMovieCastDetials api" + movieCastData.errorMessage);
    }
  },[movieData?.respMessage, movieCastData?.respMessage,movieData?.errorMessage, movieCastData?.errorMessage, dispatch]);


  return (
    <div className="movie-details">

        <div className="header">
            <p className="header-title">Movie Details</p>
            <Link to="/" >
                <i className="material-icons home-icon" >home</i>
            </Link>
        </div>
        {dataLoaded &&
            <div className='movie-info'>
            <img src={movieDetails?.poster_path ? `${serviceProps.getMoviePoster.uri}${movieDetails?.poster_path}` : movie_logo}  alt="" className="preview" />
            <div className="info-details">
                <div className="title">{`${movieDetails?.original_title} (`}<span className={ratingClass}>{Number(movieDetails?.vote_average.toFixed(1))}</span>{`)`} </div>
                <div className="year-len-director">{`${year} | ${hour}:${min} | ${director[0]?.name}`}</div>
                <div className="cast">{`Cast: ${cast}`}</div>
                <div className="description">{`Description: ${movieDetails?.overview}`}</div>
            </div>
            </div>
        }
    </div>
  )
}
