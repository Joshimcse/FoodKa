// - Import npm packages
import React from "react";
import { isMobile } from "react-device-detect";
// - Custom Components/Interfaces
import {
  SidebarProvider,
  CartSidebarProvider,
} from "./StoreContextAPI/actions/";
import Layout from "./layout";
import Router from "./router";
// - Stylesheets
import "./App.css";

const App = () => {
  return (
    <div className={isMobile ? "mobile-layout" : "layout"}>
      <SidebarProvider>
        <CartSidebarProvider>
          <Layout>
            <Router />
          </Layout>
        </CartSidebarProvider>
      </SidebarProvider>
    </div>
  );
};

export default App;
