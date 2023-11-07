import React, { useState } from 'react';
import './compare.css';
import axios from 'axios';
import BarChart from '../Components/BarChart';
import PieChart from '../Components/PieChart';
import RadarChart from '../Components/RadarChart';

const Compare = () => {
  const [movie1, setMovie1] = useState('');
  const [movie2, setMovie2] = useState('');
  const [movieData, setMovieData] = useState(null);

  const handleSearch = async () => {
    try {
      const response1 = await axios.get(`http://www.omdbapi.com/?t=${movie1}&apikey=4932ab16`);
      const response2 = await axios.get(`http://www.omdbapi.com/?t=${movie2}&apikey=4932ab16`);

      setMovieData({
        movie1: response1.data,
        movie2: response2.data,
      });
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  return (
    <div className="movie-comparison-page">
      <div className="chart-container">
        <h2>Bar Chart</h2>
        <BarChart movieData={movieData} />
      </div>
      <div className="chart-container">
        <h2>Pie Chart</h2>
        <PieChart movieData={movieData} /><br></br><br></br>
        <div className="search-fields">
          <input type="text" placeholder="Enter movie 1" value={movie1} onChange={(e) => setMovie1(e.target.value)} />
          <input type="text" placeholder="Enter movie 2" value={movie2} onChange={(e) => setMovie2(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="chart-container">
        <h2>Radar Chart</h2>
        <RadarChart movieData={movieData} />
      </div>
    </div>
  );
};

export default Compare;