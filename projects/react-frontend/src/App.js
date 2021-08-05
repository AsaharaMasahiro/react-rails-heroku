import "./App.css";
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
    const couponButtonOnClick = () => {
        fetch(`${api}/send_gifts`).catch((e) => {
            console.log(e);
        });
    };

    return (
        <div className="App">
            <ClippedDrawerAppBar />
            <CouponButton couponButtonOnClick={couponButtonOnClick} />
        </div>
    );
};

export default App;
