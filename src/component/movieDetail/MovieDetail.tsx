import React from "react";
import "../card/card.css"
import {Movie,Cinema} from "../models";


interface MovieCardProps {
   movie:Movie
}

const MovieDetail:React.FC<MovieCardProps> = ({movie})=>{
    return (
        <div>
            <h3>Show time in the following cinemas</h3>
            <ul className="cinema-list">
                {movie.cinemas.map((cinema:Cinema)=>(
                    <li key={cinema.name} className="cinema-item">{cinema.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default MovieDetail