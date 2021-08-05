import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ClippedDrawerAppBar from "./components/clippedDrawerAppBar";
import CouponButton from "./components/couponButton";

//サーバー接続の切り替え
let api;
switch (window.location.host) {
    case process.env.REACT_APP_SERVER_DEV_HOST:
        api = process.env.REACT_APP_SERVER_DEV_URL;
        break;
    case process.env.REACT_APP_SERVER_HOST:
        api = process.env.REACT_APP_SERVER_URL;
        break;
    default:
        api = "";
}

const App = () => {
    const [state, setState] = useState();

    // useEffect(() => {
    //     fetch(`${api}/hello_world`)
    //         .then((response) => response.json())
    //         .then((response) => setState(response))
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // }, []);

    const couponButtonOnClick = () => {
        fetch(`${api}/line_send`)
            .then((response) => response.json())
            .then((response) => setState(response))
            .catch((e) => {
                console.log(e);
            });
    };
    console.log(state);

    return (
        <div className="App">
            <ClippedDrawerAppBar />
            <CouponButton couponButtonOnClick={couponButtonOnClick} />
        </div>
    );
};

export default App;
