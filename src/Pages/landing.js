import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container } from "react-bootstrap";
import LatestMovies from "../Components/LatestMovies";
import Movies from "../Components/Movies";

function Landing(){

    const [apiData, setApiData] = useState([]);
    const [title, setTitle] = useState('')
    const [poster, setPoster] = useState('')
    const [plot, setPlot] = useState("")

    useEffect(() => {
        //http://www.omdbapi.com/?i=tt3896198&apikey=4932ab16
        //http://www.omdbapi.com/?i=tt3896198&apikey=642a9f1a
        //https://api.themoviedb.org/3/movie/550?api_key={62ba1a4ef927d1596c9797d21fae9310}&callback=test
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=62ba1a4ef927d1596c9797d21fae9310')
        .then((response) => {
            console.log(response.data);
            const index = 0;

        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return(
        <Container className="Layout">
            
            
            <div>
                <LatestMovies/>
            </div>
            <h1>MOVIES</h1>
            <div>
                <Movies/>
            </div>
            
            
        </Container>

    )
}

export default Landing;