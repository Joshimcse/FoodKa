// - Import npm packages
import React from "react";
import OwlCarousel from "react-owl-carousel";
import { isMobile } from "react-device-detect";
// - Custom Components/Interfaces

// - Stylesheets
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ProductSliderBrowser = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <section className="top-letest-product-section">
      <div className="container">
        <div className="section-title">
          <h2>FoodKa Specials</h2>
        </div>
        <OwlCarousel
          className="product-slider"
          loop
          margin={20}
          nav
          items={isMobile ? 2 : 4}
        >
          <div className="product-item">
            <div className="pi-pic">
              <img src="/assets/images/product/5.jpg" alt="" />
              <div className="pi-links">
                <a href="/" className="add-card">
                  <i className="flaticon-bag"></i>
                  <span>ADD TO CART</span>
                </a>
                <a href="/" className="wishlist-btn">
                  <i className="flaticon-heart"></i>
                </a>
              </div>
            </div>
            <div className="pi-text">
              <h6>৳222.00</h6>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="product-item">
            <div className="pi-pic">
              <img src="/assets/images/product/6.jpg" alt="" />
              <div className="pi-links">
                <a href="/" className="add-card">
                  <i className="flaticon-bag"></i>
                  <span>ADD TO CART</span>
                </a>
                <a href="/" className="wishlist-btn">
                  <i className="flaticon-heart"></i>
                </a>
              </div>
            </div>
            <div className="pi-text">
              <h6>৳222.00</h6>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className="product-item">
            <div className="pi-pic">
              <img src="/assets/images/product/7.jpg" alt="" />
              <div className="pi-links">
                <a href="/" className="add-card">
                  <i className="flaticon-bag"></i>
                  <span>ADD TO CART</span>
                </a>
                <a href="/" className="wishlist-btn">
                  <i className="flaticon-heart"></i>
                </a>
              </div>
            </div>
            <div className="pi-text">
              <h6>৳222.00</h6>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="product-item">
            <div className="pi-pic">
              <img src="/assets/images/product/8.jpg" alt="" />
              <div className="pi-links">
                <a href="/" className="add-card">
                  <i className="flaticon-bag"></i>
                  <span>ADD TO CART</span>
                </a>
                <a href="/" className="wishlist-btn">
                  <i className="flaticon-heart"></i>
                </a>
              </div>
            </div>
            <div className="pi-text">
              <h6>৳222.00</h6>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className="product-item">
            <div className="pi-pic">
              <img src="/assets/images/product/9.jpg" alt="" />
              <div className="pi-links">
                <a href="/" className="add-card">
                  <i className="flaticon-bag"></i>
                  <span>ADD TO CART</span>
                </a>
                <a href="/" className="wishlist-btn">
                  <i className="flaticon-heart"></i>
                </a>
              </div>
            </div>
            <div className="pi-text">
              <h6>৳222.00</h6>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="product-item">
            <div className="pi-pic">
              <img src="/assets/images/product/10.jpg" alt="" />
              <div className="pi-links">
                <a href="/" className="add-card">
                  <i className="flaticon-bag"></i>
                  <span>ADD TO CART</span>
                </a>
                <a href="/" className="wishlist-btn">
                  <i className="flaticon-heart"></i>
                </a>
              </div>
            </div>
            <div className="pi-text">
              <h6>৳222.00</h6>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="product-item">
            <div className="pi-pic">
              <img src="/assets/images/product/11.jpg" alt="" />
              <div className="pi-links">
                <a href="/" className="add-card">
                  <i className="flaticon-bag"></i>
                  <span>ADD TO CART</span>
                </a>
                <a href="/" className="wishlist-btn">
                  <i className="flaticon-heart"></i>
                </a>
              </div>
            </div>
            <div className="pi-text">
              <h6>৳222.00</h6>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default ProductSliderBrowser;
