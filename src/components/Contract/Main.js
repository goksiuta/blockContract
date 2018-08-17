import React, { Component } from 'react'
import Summary from './Summary'
import Signatures from './Signatures'
import Messages from './Messages'
import ContractSidebar from './ContractSideBar'
import '../../App.css';


class Main extends Component {
  render() {
    return (
    <div className="Main-container">
      <ContractSidebar/>
      <div>
        <Summary/>
        <Signatures />
        <Messages />
      </div>
    </div>
    )
  }
}

export default Main
