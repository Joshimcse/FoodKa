import React from "react";
import Layout from "./layout";
import Router from "./router";
import "./assets/css/styles.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Router />
      </Layout>
    </div>
  );
};

export default App;
