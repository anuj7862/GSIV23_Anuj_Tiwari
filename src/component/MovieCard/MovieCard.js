import React from 'react';
import { Link } from 'react-router-dom';

import { serviceProps } from '../../config/appEnvConfig';
import movie_logo from '../../movie_logo.jpg';
import './MovieCard.sass';

export default function MovieCard(props) {
  
  let ratingClass = '';
  if(props.rating >= 7)
    ratingClass = 'high-rating';

  else if(props.rating >= 4)
    ratingClass = 'mid-rating';

  else
    ratingClass = 'low-rating';
  
    
  
  
  // console.log('id' , props.id);
  return (
    <div className='movie-card' key={props.id} >
    <Link to={`/details/${props.id}`} className="card-link" >
    
      <img src={props.preview ? `${serviceProps.getMoviePoster.uri}${props.preview}` : movie_logo} 
                 className="preview" />
      <div className='info'>
        <p className='title'>{props.title}</p>
        <p className={ratingClass}>{`(${props.rating})`}</p>
      </div>
      <p className='description'>{props.description}</p>
    </Link>
    </div>
  )
  
}
