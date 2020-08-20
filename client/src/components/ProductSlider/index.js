// - Import npm packages
import React from "react";
import { isMobileOnly } from "react-device-detect";
// - Custom Components/Interfaces
import ProductSliderMobile from "./ProductSliderMobile";
import ProductSliderBrowser from "./ProductSliderBrowser";

// - dummy images

const ProductSlider = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return isMobileOnly ? <ProductSliderMobile /> : <ProductSliderBrowser />;
};

export default ProductSlider;
