import React from 'react';
import MovieCard from "./component/card/MovieCard";
import Movies from "./component/movies/Movies";

function App() {
  return (
    <div className="App">
      Trending Movies
        <Movies/>
        {/*<MovieCard/>*/}
    </div>
  );
}

export default App;
