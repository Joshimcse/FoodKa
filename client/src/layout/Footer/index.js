// - Import npm packages
import React from "react";
// - Custom Components/Interfaces

// - images
import cards from "../../assets/images/cards.png";

// - Stylesheets

const Footer = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <>
      {/*  Footer section */}
      <section class="footer-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="footer-widget about-widget text-center">
                <h2>About FoodKa</h2>
                <p>
                  Are you hungry? Did you have a long and stressful day?
                  Interested in getting a cheesy pizza delivered to your home or
                  office? Then FoodKa is the right destination for you!
                </p>
                <img src={cards} alt="" />
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="footer-widget about-widget">
                <h2>Supports</h2>
                <ul>
                  <li>
                    <a href="/about-us">About Us</a>
                  </li>
                  <li>
                    <a href="/track-orders">Track Orders</a>
                  </li>
                  <li>
                    <a href="/returns">Returns</a>
                  </li>
                  <li>
                    <a href="/jobs">Jobs</a>
                  </li>
                  <li>
                    <a href="/shopping">Shipping</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/partners">Partners</a>
                  </li>
                  <li>
                    <a href="/bloggers">Bloggers</a>
                  </li>
                  <li>
                    <a href="/supports">Support</a>
                  </li>
                  <li>
                    <a href="/terms-of-use">Terms of Use</a>
                  </li>
                  <li>
                    <a href="/press">Press</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="footer-widget contact-widget">
                <h2>Contacts</h2>
                <div class="con-info">
                  <span>C.</span>
                  <p>FoodKa Ltd</p>
                </div>
                <div class="con-info">
                  <span>A.</span>
                  <p>
                    8/A/1 Satmosjid Housing Limited, Muhammadpur, Dhaka - 1207
                  </p>
                </div>
                <div class="con-info">
                  <span>T.</span>
                  <p>+880 1777 363007</p>
                </div>
                <div class="con-info">
                  <span>E.</span>
                  <p>foodka@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Footer section end */}
    </>
  );
};

export default Footer;
