// - Import npm packages
import React from "react";
import { MdGridOn, MdFavoriteBorder, MdShoppingCart, MdPerson } from "react-icons/md";
// - Custom Components/Interfaces

// - Stylesheets

const MobileFooter = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <>
      <footer className="mobile-footer">
        <div className="mfooter-item">
          <div className="mfooter-item-icon">
            <MdGridOn />
          </div>
          <div className="mfooter-item-title">Home</div>
        </div>
        <div className="mfooter-item">
          <div className="mfooter-item-icon">
            <MdFavoriteBorder />
          </div>
          <div className="mfooter-item-title">Wishlist</div>
        </div>
        <div className="mfooter-item">
          <div className="mfooter-item-icon">
            <MdShoppingCart />
          </div>
          <div className="mfooter-item-title">Cart</div>
        </div>
        <div className="mfooter-item">
          <div className="mfooter-item-icon">
            <MdPerson />
          </div>
          <div className="mfooter-item-title">Dashboard</div>
        </div>
      </footer>
    </>
  );
};

export default MobileFooter;
