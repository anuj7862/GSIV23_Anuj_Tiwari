import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store';

import './App.css';
import MovieDetails from './pages/MovieDetails/MovieDetails';
//import MovieCard from './component/MovieCard/MovieCard';
import MovieList from './pages/MovieList/MovieList';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MovieList />} />
            <Route path="/details/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
