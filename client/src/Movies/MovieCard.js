import React from 'react';
import { NavLink } from 'react-router-dom';





const MovieCard = ({ id, title, director, metascore, stars, addToSavedList}) => {
 
  return(
       <div className="save-wrapper">
          <div className="movie-card">
            <h2>{title}</h2>
            <div className="movie-director">
              Director: <em>{director}</em>
            </div>
            <div className="movie-metascore">
              Metascore: <strong>{metascore}</strong>
            </div>
            <h3>Actors</h3>
            <div>{stars}</div>
          </div>
            {/* <div className="save-button">Save</div> */}
            <button className="save-button" onClick={() => addToSavedList({title: <NavLink to={`/movies/${id}`}>{title}</NavLink>})}>Save</button>

      </div>
       
  )
};

export default MovieCard;
