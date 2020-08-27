// - Import npm packages
import React from "react";
// - Custom Components/Interfaces

// - Stylesheets

const BrowserFooter = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      {/*  Footer section */}
      <section className="browser-footer">
        <div className="footerSection1">
          <div className="">
            <h2>About FoodKa</h2>
            <p>
              Are you hungry? Did you have a long and stressful day? Interested
              in getting a cheesy pizza delivered to your home or office? Then
              FoodKa is the right destination for you!
            </p>
            <img src="/assets/images/cards.png" alt="" width="250px" />
          </div>
        </div>
        <div className="footerSection2">
          <div className="">
            <h2>Supports</h2>
            <ul>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/returns">Returns</a>
              </li>
              <li>
                <a href="/shopping">Shipping</a>
              </li>

              <li>
                <a href="/supports">Support</a>
              </li>
              <li>
                <a href="/terms-of-use">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerSection3">
          <div className="">
            <h2>Contacts</h2>
            <div className="com-info">FoodKa Ltd</div>
            <div className="com-info">
              8/A/1 Satmosjid Housing Limited, Muhammadpur, Dhaka - 1207
            </div>
            <div className="com-info">+880 1777 363007</div>
            <div className="com-info">foodka@gmail.com</div>
          </div>
        </div>
      </section>
      <div className="bottom-footer">
        &copy; Copyright FoodKa {year} - {year + 1} All rights reserved
        <img
          src="foodka50.png"
          style={{ margin: "0px 30px" }}
          width="25px"
          alt="logo"
        />
        Developed with Love by{" "}
        <a
          className="ourName"
          href="https://github.com/Joshimcse"
          target="_blank"
        >
          Joshim Uddin
        </a>{" "}
        &{" "}
        <a
          className="ourName"
          href="https://github.com/NAkibRUET"
          target="_blank"
        >
          Nakib Hossain
        </a>
      </div>
      {/*  Footer section end */}
    </>
  );
};

export default BrowserFooter;
