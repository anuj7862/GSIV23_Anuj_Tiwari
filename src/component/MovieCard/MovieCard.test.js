import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router} from 'react-router-dom';

import MovieCard from './MovieCard';

test('must render movie card correctly with all needed element', () => {
    const props = {
        id: 12,
        preview: 'logo.jpg',
        title: 'Movie 1',
        rating: 4,
        description: "good test case......."
    };

    const {getByText, getByAltText} = render(
        <Router>
            <MovieCard {...props}/>
        </Router>
        );


    const imageTag = getByAltText('');
    const titleDiv = getByText(props.title);
    const ratingDiv = getByText('(4)');
    const descriptionDiv = getByText(props.description);

    expect(imageTag).toBeInTheDocument();
    expect(titleDiv).toBeInTheDocument();
    expect(ratingDiv).toBeInTheDocument();
    expect(descriptionDiv).toBeInTheDocument();

});