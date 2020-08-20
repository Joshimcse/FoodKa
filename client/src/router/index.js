// - Import npm packages
import React from "react";
import Loadable from "react-loadable";
import { Route, Switch } from "react-router-dom";
// - Custom Components/Interfaces
import LoadingComponent from "../components/LoadingComponent";

const AsyncIndex = Loadable({
  loader: () => import("../pages/Index"),
  loading: LoadingComponent,
});

const AsyncAbout = Loadable({
  loader: () => import("../pages/About/about"),
  loading: LoadingComponent,
});

const AsyncCategory = Loadable({
  loader: () => import("../pages/Category/category"),
  loading: LoadingComponent,
});

const AsyncProduct = Loadable({
  loader: () => import("../pages/ProductView/product"),
  loading: LoadingComponent,
});

const AsyncLogin = Loadable({
  loader: () => import("../pages/Login"),
  loading: LoadingComponent,
});

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={AsyncIndex} />
      <Route exact path="/login" component={AsyncLogin} />
      <Route exact path="/about" component={AsyncAbout} />
      <Route exact path="/:categories" component={AsyncCategory} />
      <Route exact path="/:categories/:title" component={AsyncProduct} />
    </Switch>
  );
};

export default Router;
