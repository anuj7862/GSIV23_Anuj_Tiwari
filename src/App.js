//import './App.css';
import './App.sass';
import MovieCard from './component/MovieCard/MovieCard';
function App() {
  return (
    <div className="App">
      <MovieCard 
        id={2} title="movie1" preview="https://image.tmdb.org/t/p/w200/bHH5jiumG6QXpvKfUEN2QsaBVV.jpg"
         rating={2} description="Desc.c...c."
       />
    </div>
  );
}

export default App;
