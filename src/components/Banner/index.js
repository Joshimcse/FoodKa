// - Import npm packages
import React from "react";
// - Custom Components/Interfaces

// - Stylesheets

const index = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <>
      {/* <!-- Banner section --> */}
      <section className="banner-section">
        <div className="container">
          <div className="banner set-bg" style={{backgroundImage: `url("/assets/images/banner-bg.jpg")`}}>
            <div className="tag-new">Spicy</div>
            <span>Just Yummy</span>
            <h2>Capricciosa Pizza</h2>
            <a href="#" className="site-btn">
              ADD TO CART
            </a>
          </div>
        </div>
      </section>
      {/* <!-- Banner section end  --> */}
    </>
  );
};

export default index;
