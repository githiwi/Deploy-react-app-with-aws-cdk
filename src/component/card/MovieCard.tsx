import React, {useState} from "react";
import "./card.css"
import {Movie} from "../models";
import MovieDetail from "../movieDetail/MovieDetail";

interface MovieCardProps {
    movie:Movie
}

const MovieCard:React.FC<MovieCardProps> = ({movie})=>{
    const [visibleDetails, setVisibleDetails] = useState(false)
    const handleClick = (event: React.MouseEvent<HTMLElement>) =>{
        setVisibleDetails(!visibleDetails)
    }
    return (
        <div className="movie-card">
            <div className= "title">{movie.title}</div>
            <img onClick={handleClick} src={movie.poster} alt={movie.title} className="movie-poster"/>
            <div>
                {visibleDetails? <MovieDetail movie={movie}/>: ""}
            </div>
        </div>
    )
}

export default MovieCard;