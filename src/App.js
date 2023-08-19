//import './App.css';
import { Provider} from 'react-redux';
import './App.sass';
import MovieCard from './component/MovieCard/MovieCard';
import MovieList from './pages/MovieList/MovieList';
import store from './state/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <MovieCard 
        id={2} title="movie1" preview="https://image.tmdb.org/t/p/w200/bHH5jiumG6QXpvKfUEN2QsaBVV.jpg"
         rating={2} description="Desc.c...c."
       /> */}
       <MovieList/>
    </div>
    </Provider>
  );
}

export default App;
