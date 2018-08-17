import React, { Component } from 'react'
import Summary from './Summary'
import Signatures from './Signatures'
import Messages from './Messages'
import ContractSidebar from './ContractSideBar'
import Dispute from './Dispute'
import '../../App.css';


class Main extends Component {
  render() {
    return (
    <div className="Contract-container">
      <ContractSidebar/>
      <div>
        <Summary/>
        <Signatures />
        <Messages />
        <Dispute />
      </div>
      <div className="sidebar"></div>
    </div>
    )
  }
}

export default Main
