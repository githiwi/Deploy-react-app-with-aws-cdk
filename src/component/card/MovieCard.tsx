import React from "react";
import "./card.css"
import {Movie,Cinema} from "../models";

interface MovieCardProps {
    movie:Movie
}

const MovieCard:React.FC<MovieCardProps> = ({movie})=>{

    return (
        <div className="movie-card">
            <div>{movie.title}</div>
            <img src={movie.poster} alt={movie.title} className="movie-poster"/>
            <div>
                <h3>Show time in the following cinemas</h3>
                <ul className="cinema-list">
                {movie.cinemas.map((cinema:Cinema)=>(
                    <li key={cinema.name} className="cinema-item">{cinema.name}</li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default MovieCard;