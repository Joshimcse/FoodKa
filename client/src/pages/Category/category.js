// - Import npm packages
import React from "react";
// - Custom Components/Interfaces

// - stylesheets

// - constant
// import { categories } from "../../utils/constant";

const category = (props) => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <>
      {/* {console.log(props)}
      {categories[0].map((category) => (
        <p>{category}</p>
      ))} */}

      {/* <!-- Page info --> */}
      <div className="page-top-info">
        <div className="container">
          <h4>Category PAge</h4>
          <div className="site-pagination">
            <a href="/">Home</a> /<a href="/">Shop</a> /
          </div>
        </div>
      </div>
      {/* <!-- Page info end --> */}

      {/* <!-- Category section --> */}
      <section className="category-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              <div className="filter-widget">
                <h2 className="fw-title">Categories</h2>
                <ul className="category-menu">
                  <li>
                    <a href="/">Pizza</a>
                  </li>
                  <li>
                    <a href="/">Burger</a>
                  </li>
                  <li>
                    <a href="/">Bakery & Cake</a>
                  </li>
                  <li>
                    <a href="/">Globar</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/">
                          Chinese<span>(2)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Korean<span>(56)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Thai<span>(36)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Western<span>(27)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Japanese<span>(19)</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">More</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/">
                          Fast food <span>(2)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Dessert<span>(56)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Seafood<span>(36)</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="filter-widget mb-0">
                <h2 className="fw-title">refine by</h2>
                <div className="price-range-wrap">
                  <h4>Price</h4>
                  <div
                    className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                    data-min="10"
                    data-max="270"
                  >
                    <div
                      className="ui-slider-range ui-corner-all ui-widget-header"
                      style={{left: "0%", width: "100%"}}
                    ></div>
                    <span
                      tabIndex="0"
                      className="ui-slider-handle ui-corner-all ui-state-default"
                      style={{left: "0%"}}
                    ></span>
                    <span
                      tabIndex="0"
                      className="ui-slider-handle ui-corner-all ui-state-default"
                      style={{left: "100%"}}
                    ></span>
                  </div>
                  <div className="range-slider">
                    <div className="price-input">
                      <input type="text" id="minamount" />
                      <input type="text" id="maxamount" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0">
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <div className="tag-sale">ON SALE</div>
                      <img src="/assets/images/product/12.jpg" alt="" />
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
                      <h6>$35,00</h6>
                      <p>Black and White Stripes Dress</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="/assets/images/product/12.jpg" alt="" />
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
                      <h6>$35,00</h6>
                      <p>Flamboyant Pink Top</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="/assets/images/product/12.jpg" alt="" />
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
                      <h6>$35,00</h6>
                      <p>Flamboyant Pink Top </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="/assets/images/product/12.jpg" alt="" />
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
                      <h6>$35,00</h6>
                      <p>Black and White Stripes Dress</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="/assets/images/product/12.jpg" alt="" />
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
                      <h6>$35,00</h6>
                      <p>Flamboyant Pink Top</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="/assets/images/product/12.jpg" alt="" />
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
                      <h6>$35,00</h6>
                      <p>Flamboyant Pink Top </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="/assets/images/product/12.jpg" alt="" />
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
                      <h6>$35,00</h6>
                      <p>Flamboyant Pink Top</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="/assets/images/product/12.jpg" alt="" />
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
                      <h6>$35,00</h6>
                      <p>Flamboyant Pink Top</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="/assets/images/product/12.jpg" alt="" />
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
                      <h6>$35,00</h6>
                      <p>Flamboyant Pink Top </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <div className="tag-new">new</div>
                      <img src="/assets/images/product/12.jpg" alt="" />
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
                      <h6>$35,00</h6>
                      <p>Black and White Stripes Dress</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="/assets/images/product/12.jpg" alt="" />
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
                      <h6>$35,00</h6>
                      <p>Flamboyant Pink Top </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="/assets/images/product/12.jpg" alt="" />
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
                      <h6>$35,00</h6>
                      <p>Flamboyant Pink Top </p>
                    </div>
                  </div>
                </div>
                <div className="text-center w-100 pt-3">
                  <button className="site-btn sb-line sb-dark">
                    LOAD MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Category section end --> */}
    </>
  );
};

export default category;
