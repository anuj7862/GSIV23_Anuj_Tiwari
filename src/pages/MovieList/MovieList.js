import axios from 'axios';
import React, {useEffect, useState} from 'react';
import MovieCard from '../../component/MovieCard/MovieCard';
import './MovieList.sass';

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch upcoming movies from TMDb API
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=e802e8b26c32be47087d56feb73d4049`)
      .then(response => {
        //console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching upcoming movies:', error);
    });
    
  }, []);
  return (
    <div className='movie-list'>
        {movies.map(movie =>(
            <MovieCard 
                preview = {`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                title = {movie.title}
                rating = {movie.vote_average}
                description = {movie.overview}
            />
        ))}
    </div>
  )
};
