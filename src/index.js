import React from "react";
import ReactDOM from "react-dom";
import "./custom.scss";
import "./index.scss";
import 'bootswatch/dist/darkly/bootstrap.min.css';
import App from "./App";
import {  HashRouter } from "react-router-dom";
import UserContextProvider from "./Store/UserContext";

ReactDOM.render(
  <UserContextProvider>
    <HashRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HashRouter>
  </UserContextProvider>,
  document.getElementById("root")
);

