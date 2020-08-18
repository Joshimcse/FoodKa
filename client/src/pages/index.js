// - Import npm packages
import React from "react";
import { isMobile } from "react-device-detect";
// - Custom Components/Interfaces
import Hero from "../components/HeroSection";
import TopProduct from "../components/TopProduct";
import Banner from "../components/Banner";
import ProductSlider from "../components/ProductSlider";

// - Stylesheets

const IndexPage = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <>
      <ProductSlider />
      <TopProduct />
      {isMobile ? null : <Banner />}
    </>
  );
};

export default IndexPage;
