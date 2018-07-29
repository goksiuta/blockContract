import React, { Component } from 'react';

class ModalContent extends Component {

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
              <label for="company" > Fee <br /> <br />  Ethereuem network free <br /> <br />  Total </label> 
            </legend>
            <p> 12.4534 ETH <br /> <br />  0.003 ETH <br /> <br /> <span className="big-text">  12.4564 ETH </span> </p>
          </div>
          <div className="button-container">
            <div className="primary-btn"> 
                <a href=""> Create with Metamask </a>
            </div>
          </div>


          
      </form>
      </div>
    );
  }
}

export default ModalContent;
