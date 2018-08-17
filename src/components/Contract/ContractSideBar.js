import React, { Component } from 'react';
import '../../App.css';


class ContractSideBar extends Component {
  render() {
    return (
      <div  className="sidebar">
      <ul>
      <li className="active"><a href="#">Summary</a></li>
      <li><a href="#">Signatures</a></li>
      <li><a href="#">Messages</a></li>
      <li><a href="#">Dispute</a></li>
      </ul>
      </div>
    );
  }
}

export default ContractSideBar;
