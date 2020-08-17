// - Import npm packages
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// - Custom Components/Interfaces
import App from "./App";
// - Stylesheets
import "./assets/css/bootstrap.min.css";
import "./assets/css/flaticon.css";
import "./assets/css/slicknav.min.css";
import "./assets/css/jquery-ui.min.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/animate.css";
import "./assets/css/style.css";
import "./assets/css/media.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
