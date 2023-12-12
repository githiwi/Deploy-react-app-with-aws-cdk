import React from "react";
import {Movie,Card} from "../models";
import movieSchedules from "../../movieSchedules";
import MovieCard from "../card/MovieCard";
const Movies:React.FC = ()=>{
    return (
        <div className="the_movies">
            {movieSchedules.movies.map((movie:Movie)=>(
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default Movies;