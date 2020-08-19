// - Import npm packages
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// - Custom Components/Interfaces
import App from "./App";
// - Stylesheets

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
