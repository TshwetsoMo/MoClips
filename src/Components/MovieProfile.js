import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MovieProfile = ({ movie }) => {
  const { Poster, Title, Year, Genre, Actors, Director, Plot } = movie;

  return (
    <div className="movie-profile">
      <img src={movie.Poster} alt={`${Title} Poster`} className="movie-poster" />
      <div className="movie-details">
        <h1 className="movie-title">{Title}</h1>
        <p><strong>Year:</strong> {Year}</p>
        <p><strong>Genre:</strong> {Genre}</p>
        <p><strong>Actors:</strong> {Actors}</p>
        <p><strong>Director:</strong> {Director}</p>
        <p><strong>Plot:</strong> {Plot}</p>
        <Link to="/" className="minimize-button">Minimize</Link>
      </div>
    </div>
  );
};

export default MovieProfile;