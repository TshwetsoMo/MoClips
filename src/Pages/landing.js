import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container } from "react-bootstrap";
import LatestMovies from "../Components/LatestMovies";
import Movies from "../Components/Movies";
import MovieCard from "../Components/MovieCard";
import { Link } from 'react-router-dom';
//http://www.omdbapi.com/?i=tt3896198&apikey=4932ab16

function Landing(){

    const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchLatestMovies = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=4932ab16`);
        if (response.data.Search) {
          setMovies(response.data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error('Error fetching latest movies:', error);
        setMovies([]); // Set movies to an empty array in case of error
      }
    };

    fetchLatestMovies();
  }, [searchTerm]);

  return (
    <div className="latest-movies-page">
      <h1>Search or Movies</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /><br/><br/>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <Link to={`/movie/${movie.imdbID}`} key={index}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Landing;