import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./containers/App/index";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import Header from "../src//components/containerHome/header"
import { LocalizationProvider } from "./context/LocalizationContext";
import  {DrProvider } from "./context/CarContext";
import {CoronaProvider} from "./context/CoronaContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <IntlProvider>
        <LocalizationProvider>
          <CoronaProvider>
          <DrProvider>
           <Header/>
            <App />
         
          </DrProvider>
          </CoronaProvider>
        </LocalizationProvider>
      </IntlProvider>
    </BrowserRouter>
  </React.StrictMode>,


 
  document.getElementById("root")
);

reportWebVitals();
