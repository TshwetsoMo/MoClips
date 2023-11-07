import React from 'react';
import MovieCard from './MovieCard';

const movies = [
  {
    name: 'Movie 1',
    year: 2000,
    rating: 8.5,
    plot: 'Plot of Movie 1...',
  },
  // Add more movie objects here
];

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;