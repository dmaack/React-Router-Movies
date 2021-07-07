import React from 'react';
import { Link } from 'react-router-dom';


const MovieCard = props => {
  const { id, title, director, metascore, stars } = props;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <Link to={`/movies/${id}`}>
        <h2>{props.movie.title}</h2>
        </Link>
        <div className="movie-director">
          Director: <em>{props.movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{props.movie.metascore}</strong>
        </div>
        <h3>Actors</h3>
        {stars && stars.map(star => (
          <div key={star} className="movie-star">
            {props.movie.star}
          </div>
        ))}
      </div>
      {/* <div className="save-button">Save</div> */}
      {/* <button className="save-button" onClick={() => addToSavedList({title: <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>})}>Save</button> */}

    </div>
  );
};

export default MovieCard;
