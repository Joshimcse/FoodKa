// - Import npm packages
import React from "react";
import OwlCarousel from "react-owl-carousel";
import { isMobile } from "react-device-detect";
// - Custom Components/Interfaces
import ProductSliderMobile from "./ProductSliderMobile";
import ProductSliderBrowser from "./ProductSliderBrowser";

// - dummy images

const ProductSlider = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return isMobile ? <ProductSliderMobile /> : <ProductSliderBrowser />;
};

export default ProductSlider;
