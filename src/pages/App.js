import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Team from "./Team"

function App() {

    const [getMessage, setGetMessage] = useState({})

    useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
        console.log("SUCCESS", response)
        setGetMessage(response)
    }).catch(error => {
        console.log(error)
    })

    }, [])
    return (
        <div className="App">
            <header className="App-header">
                <p>React + Flask Tutorial</p>
                <div>{getMessage.status === 200 ? 
                <h3>{getMessage.data.message}</h3>
                :
                <h3>LOADING</h3>}</div>
            </header>

        </div>
    );
}

export default App;