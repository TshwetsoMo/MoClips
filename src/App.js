import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './Pages/landing';
import Timeline from './Pages/timeline';
import Compare from './Pages/compare';
import BasicNavbar from './Components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarChart from './Components/BarChart';
import RadarChart from './Components/RadarChart';
import LineChart from './Components/LineChart';
import MovieProfile from './Components/MovieProfile';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <BasicNavbar/>
      <Routes>
        <Route path='/' element= { <Landing /> } />
        <Route path='/time' element= { <Timeline/>} />
        <Route path='/compare' element= { <Compare/>} />
        <Route path="/movie/:id" element={<MovieProfile />} />
      </Routes><br/>
      <Footer/>
    </div>
    
  );
}

export default App;
