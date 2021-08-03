import logo from "./logo.svg";
import "./App.css";
import { FC, useEffect, useState } from "react";

const App = () => {
    const [state, setState] = useState();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/hello_world`)
            .then((response) => response.json())
            .then((response) => setState(response))
            .catch((e) => {
                console.log(e);
            });
    }, []);
    console.log(state);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {state && <p>FetchData:{state.text}</p>}
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
