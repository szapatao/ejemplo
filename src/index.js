import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(<BrowserRouter>
<App />
</BrowserRouter>,
document.getElementById("root")
);
// If you want your app to work offline and load faster, you can c
hange
// unregister() to register() below. Note this comes with some pit
falls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();