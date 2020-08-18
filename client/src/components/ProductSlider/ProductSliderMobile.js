// - Import npm packages
import React from "react";
import OwlCarousel from "react-owl-carousel";
import {isMobile} from 'react-device-detect'
// - Custom Components/Interfaces

// - dummy images
import productImage1 from "../../assets/images/product/5.jpg";
import productImage2 from "../../assets/images/product/6.jpg";
import productImage3 from "../../assets/images/product/7.jpg";
import productImage4 from "../../assets/images/product/8.jpg";
import productImage5 from "../../assets/images/product/9.jpg";
import productImage6 from "../../assets/images/product/10.jpg";
import productImage7 from "../../assets/images/product/11.jpg";

// - Stylesheets
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ProductSliderMobile = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <section className="top-letest-product-section">
      <div className="container">
        <div className="section-title">
          <h2>FoodKa Specials</h2>
        </div>
        <OwlCarousel className="product-slider" loop margin={20} items={(isMobile) ? 2 : 4}>
          <div className="product-item">
            <div className="pi-pic">
              <img src={productImage1} alt="" />
              <div className="pi-links">
                <a href="#" className="add-card-mobile">
                  <i className="flaticon-bag"></i>
                  <span>ADD TO CART</span>
                </a>
                <a href="#" className="wishlist-btn">
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
              <img src={productImage2} alt="" />
              <div className="pi-links">
                <a href="#" className="add-card-mobile">
                  <i className="flaticon-bag"></i>
                  <span>ADD TO CART</span>
                </a>
                <a href="#" className="wishlist-btn">
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
              <img src={productImage3} alt="" />
              <div className="pi-links">
                <a href="#" className="add-card-mobile">
                  <i className="flaticon-bag"></i>
                  <span>ADD TO CART</span>
                </a>
                <a href="#" className="wishlist-btn">
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
              <img src={productImage4} alt="" />
              <div className="pi-links">
                <a href="#" className="add-card-mobile">
                  <i className="flaticon-bag"></i>
                  <span>ADD TO CART</span>
                </a>
                <a href="#" className="wishlist-btn">
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
              <img src={productImage5} alt="" />
              <div className="pi-links">
                <a href="#" className="add-card-mobile">
                  <i className="flaticon-bag"></i>
                  <span>ADD TO CART</span>
                </a>
                <a href="#" className="wishlist-btn">
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
              <img src={productImage6} alt="" />
              <div className="pi-links">
                <a href="#" className="add-card-mobile">
                  <i className="flaticon-bag"></i>
                  <span>ADD TO CART</span>
                </a>
                <a href="#" className="wishlist-btn">
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
              <img src={productImage7} alt="" />
              <div className="pi-links">
                <a href="#" className="add-card-mobile">
                  <i className="flaticon-bag"></i>
                  <span>ADD TO CART</span>
                </a>
                <a href="#" className="wishlist-btn">
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

export default ProductSliderMobile;