import React, { Component } from 'react';
import Web3 from 'web3'
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

class ModalContent extends Component {

  openMetaMask(e) {
    e.preventDefault()
    web3.eth.sendTransaction({
    from: '0x23571754544cc1a95d269b8d75baff4c17a8b223',
    to: '0xC8a013451768a24177926f6E27f938909A2C493E',
    value: '12453400000000000000'
    })
  }

  render() {
    return (
    //   <div style={{width: "600px", height: "500px"}}>
    //   <div><h2>Create Contract</h2></div>
    //   <div>Recipient Eth Address <input></input></div>
    //   <div>Message <textarea></textarea></div>
    //   <div>Fee: 12.4534 ETH</div>
    //   <div>Ethereum Network Fee: 0.003 ETH</div>
    //   <button className="primary-btn" onClick={this.props.closeModal}>Close Modal</button>
    // </div>
    <div className="modal-content">
        <div className="form-header">
          <h2 > Create contract </h2>
          <p onClick={this.props.closeModal} >x </p>
        </div>

        <form>
          <div className="list-item text-input">
            <legend>
              <label for="company" > Recipient ETH address </label>
            </legend>
            <input type="text"  id="company" name="company" />
          </div>
          <div className="list-item textarea-item">
            <legend>
              <label for="address">Address</label>
            </legend>

             <textarea className="create-contract-textarea"> 

          </textarea>
          </div>

          <div className="list-item textarea-item">
            <legend>
              <label for="company" > Fee <br /> <br />  Ethereuem network fee <br /> <br />  Total </label>
            </legend>
            <p> 12.4534 ETH <br /> <br />  0.003 ETH <br /> <br /> <span className="big-text">  12.4564 ETH </span> </p>
          </div>
          <div className="button-container">
            <div className="primary-btn">
                <a href="" onClick={this.openMetaMask}> Create with Metamask </a>
            </div>
          </div>



      </form>
      </div>
    );
  }
}

export default ModalContent;
