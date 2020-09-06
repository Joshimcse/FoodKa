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
      <div id="mySidenav" style={{ width: "200px" }} className="sidenav"></div>
    );
  }
}
export default SideBar;
