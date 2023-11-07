import React, { useState } from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="movie-card">
      <h2>{movie.name}</h2>
      <p>Year: {movie.year}</p>
      <p>Rating: {movie.rating}</p>
      {isExpanded && <p className="plot">{movie.plot}</p>}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
    </div>
  );
};

export default MovieCard;