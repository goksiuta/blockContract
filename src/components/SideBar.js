import React, { Component } from 'react';



class SideBar extends Component {
  render() {
    return (
      <div  className="sidebar">
      <div className="primary-btn"><a href="#">Preview</a></div>

      
      <ul>
      <li className="active"><a href="#">Client details</a></li> 
      <li><a href="#">Scope of work</a></li>
      <li><a href="#">Fees & Dates</a></li>
      </ul>
      </div>
    );
  }
}

export default SideBar;
