import React from "react";

import "./index.css";

class SideBar extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="mySidenav" style={{ width: "300px" }} className="sidenav2">
        <div className="shoppingCartButton"></div>
      </div>
    );
  }
}
export default SideBar;
