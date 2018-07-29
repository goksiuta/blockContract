import React, { Component } from "react";
import SideBar from "./SideBar";
import Summary from "./DetailsSummary";



class DetailsPage extends Component {
  render() {
    return (
      <div>
        <div className="Main-container">
          <SideBar />
          <div>
            <Summary/>
            <div className="" />
            </div>
          <div className="sidebar" />
        </div>
      </div>
    );
  }
}

export default DetailsPage;
