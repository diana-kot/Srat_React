import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { REPO_NAME } from "@constants/repo";



import store from "@store/store";

import App from "@containers/App";


import "@styles/index.css";

import ThemeProvider from "../src/context/ThemeProvider";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={`/${REPO_NAME}/`}>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

