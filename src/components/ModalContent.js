import React, { Component } from 'react';

class ModalContent extends Component {

  render() {
    return (
      <div style={{width: "600px", height: "500px"}}>
      <div><h2>Create Contract</h2></div>
      <div>Recipient Eth Address <input></input></div>
      <div>Message <textarea></textarea></div>
      <div>Fee: 12.4534 ETH</div>
      <div>Ethereum Network Fee: 0.003 ETH</div>
      <button className="primary-btn" onClick={this.props.closeModal}>Close Modal</button>
    </div>
    );
  }
}

export default ModalContent;
