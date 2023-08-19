import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieDetails from './MovieDetails';

test('must render movie details correctly with all needed element', () => {
    const props = {
        movieId: 12,
    };

    const {getByText, getByAltText} = render(<MovieDetails {...props}/>);

    const imageTag = getByAltText('');
    const ratingDiv = getByText('(');
    const castDiv = getByText('cast:');
    const descriptionDiv = getByText('Description:');

    expect(imageTag).toBeInTheDocument();
    expect(ratingDiv).toBeInTheDocument();
    expect(castDiv).toBeInTheDocument();
    expect(descriptionDiv).toBeInTheDocument();

});