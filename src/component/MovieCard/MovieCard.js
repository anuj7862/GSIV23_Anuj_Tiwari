import React from 'react';
import { serviceProps } from '../../config/appEnvConfig';
import './MovieCard.sass';

export default function MovieCard(props) {
    return (
        <div className='movie-card' key={props.id}>
            <img src={`${serviceProps.getMoviePoster.uri}${props?.preview}`} alt="" className="preview" />
            <div className='info'>
                <p className='title'>{props?.title}</p>
                <p className='rating'>{props?.rating}</p>
            </div>
            <p className='description'>{props?.description}</p>
        </div>
    )
};
