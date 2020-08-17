// - Import npm packages
import React from "react";
// - Custom Components/Interfaces

// - images
import bgBannner from "../../assets/images/banner-bg.jpg";

// - Stylesheets

const index = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <>
      {/* <!-- Banner section --> */}
      <section class="banner-section">
        <div class="container">
          <div class="banner set-bg" style={{backgroundImage: `url(${bgBannner})`}}>
            <div class="tag-new">Spicy</div>
            <span>Just Yummy</span>
            <h2>Capricciosa Pizza</h2>
            <a href="#" class="site-btn">
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
