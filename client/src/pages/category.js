// - Import npm packages
import React from "react";
import { useParams } from "react-router-dom";
// - Custom Components/Interfaces

// - Stylesheets

// - constant
import { categories } from "../utils/constant";

const category = (props) => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <>
      {console.log(props)}
      {categories[0].map((category) => (
        <p>{category}</p>
      ))}
    </>
  );
};

export default category;
