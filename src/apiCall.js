import React from "react";
import {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ApiCall = () =>{

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        axios.get('')
        .then((response) => {
            console.log(response);
            setApiData(response.data)
            console.log("length", response.data.length);
            console.log("release date", response.data[0].date_utc);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return(
        <div className="App">
            <header className="App-header">
                <p>API PAGE</p>
                <Link to="/test">
                    <button>Test Page</button>
                </Link>
                <div>
                    <p>
                        We have {apiData.length} entries on this API
                    </p>
                </div>

            </header>
        </div>
    )
}

export default ApiCall