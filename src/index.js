// - Import npm packages
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";

// - Custom Components/Interfaces
import * as Types from "./store/actions/actionTypes";
import configureStore from "./store/index";
import App from "./App";

// - Stylesheets

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App history={history} />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
