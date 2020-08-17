// - Import npm packages
import React from "react";
// - Custom Components/Interfaces

// - Stylesheets

const HeroSection = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    // <!-- Hero section -->
    <section className="hero-section">
      <div className="hero-slider owl-carousel">
        <div className="hs-item set-bg" data-setbg="https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png">
          <div style={{background: "rgba(0, 0, 0, .25)", height: "100%"}}>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-7 text-white">
                  <span>Spicy</span>
                  <h2>BBQ Burger</h2>
                  <p>
                    Tempura is a Japanese fried snack made mostly from seafood
                    and vegetables but you can also find tempura made from fowl
                    and fish, seasoned with a sauce made with soy sauce, ginger
                    and sugar.
                  </p>
                  <a href="/" className="site-btn sb-line">
                    DISCOVER
                  </a>
                  <a href="/" className="site-btn sb-white">
                    ADD TO CART
                  </a>
                </div>
              </div>
              <div className="offer-card text-white">
                <span>from</span>
                <h2>৳330</h2>
                <p>SHOP NOW</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hs-item set-bg" data-setbg="https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png">
          <div style={{background: "rgba(0, 0, 0, .25)", height: "100%"}}>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-7 text-white">
                  <span>Top Seller</span>
                  <h2>4" Pizza</h2>
                  <p>
                    Pizza is a savory dish of Italian origin, consisting of a
                    usually round, flattened base of leavened wheat-based dough
                    topped with tomatoes, cheese, and various other ingredients
                    baked at a high temperature, traditionally in a wood-fired
                    oven.
                  </p>
                  <a href="/" className="site-btn sb-line">
                    DISCOVER
                  </a>
                  <a href="/" className="site-btn sb-white">
                    ADD TO CART
                  </a>
                </div>
              </div>
              <div className="offer-card text-white">
                <span>from</span>
                <h2>৳420</h2>
                <p>SHOP NOW</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hs-item set-bg" data-setbg="https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png">
          <div style={{background: "rgba(0, 0, 0, .25)", height: "100%"}}>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-7 text-white">
                  <span>Hot</span>
                  <h2>Orginal Hajir Biriyani</h2>
                  <p>
                    Hajir Biriyani is one of the restaurants founded in 1939 in
                    the British Raj, in the heart of Old Dhaka, selling chevon
                    biryani (dish made with highly seasoned rice and goat's
                    meat). The restaurant also sells borhani (a salted mint
                    drink made of yogurt) and soft drinks. In 1939 the
                    restaurant was started as a roadside food corner by a person
                    named Haji Mohammad Hossain. Later on the business took
                    dramatic change and became part of the culture of Dhaka
                    city.
                  </p>
                  <a href="/" className="site-btn sb-line">
                    DISCOVER
                  </a>
                  <a href="/" className="site-btn sb-white">
                    ADD TO CART
                  </a>
                </div>
              </div>
              <div className="offer-card text-white">
                <span>from</span>
                <h2>৳160</h2>
                <p>SHOP NOW</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="slide-num-holder" id="snh-1"></div>
      </div>
    </section>
    // <!-- Hero section end -->
  );
};

export default HeroSection;
