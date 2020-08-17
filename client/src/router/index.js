// - Import npm packages
import React from "react";
import Loadable from "react-loadable";
import { Route, Switch, withRouter, BrowserRouter } from "react-router-dom";
// - Custom Components/Interfaces
import LoadingComponent from "../components/loading";

const AsyncIndex = Loadable({
  loader: () => import("../pages"),
  loading: LoadingComponent,
});

const AsyncAbout = Loadable({
  loader: () => import("../pages/about"),
  loading: LoadingComponent,
});

const AsyncCategory = Loadable({
  loader: () => import("../pages/category"),
  loading: LoadingComponent,
});

const AsyncProduct = Loadable({
  loader: () => import("../pages/category"),
  loading: LoadingComponent,
});

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={AsyncIndex} />
      <Route exact path="/about" component={AsyncAbout} />
      <Route exact path="/:categories" component={AsyncCategory} />
      <Route exact path="/:categories/:title" component={AsyncProduct} />
    </Switch>
  );
};

export default Router;
