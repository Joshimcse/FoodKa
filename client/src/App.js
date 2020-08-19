// - Import npm packages
import React from "react";
import { isMobile } from "react-device-detect";
// - Custom Components/Interfaces
import Layout from "./layout";
import Router from "./router";
// - Stylesheets
import "./App.css";

const App = () => {
  return (
    <div className={isMobile ? "mobile-layout" : "layout"}>
      <Layout>
        <Router />
      </Layout>
    </div>
  );
};

export default App;
