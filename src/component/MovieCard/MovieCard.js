import React from 'react';
import { serviceProps } from '../../config/appEnvConfig';
import './MovieCard.sass';

export default function MovieCard(props) {
    let ratingClass = '';
    if(props.rating >= 7)
        ratingClass = 'high-rating';

    else if(props.rating >= 4)
        ratingClass = 'mid-rating';

    else
        ratingClass = 'low-rating';
    
    return (
        <div className='movie-card' key={props.id}>
            <img src={`${serviceProps.getMoviePoster.uri}${props?.preview}`} alt="" className="preview" />
            <div className='info'>
                <p className='title'>{props?.title}</p>
                <p className={ratingClass}>{`(${props?.rating})`}</p>
            </div>
            <p className='description'>{props?.description}</p>
        </div>
    )
};
