import React, { Component } from 'react';
import logo from '../img/logo-mark.svg';
import '../App.css';



class Summary extends Component {
  render() {
    return (
      <div className="form-section">
        <div className="form-header">
          <h2> Summary </h2>
        </div>
        <form>
          <div className="list-item text-input">
            <legend>
              <label for="company" > Date </label>
            </legend>
            5 May, 2018
          </div>
          <div className="list-item text-input">
            <legend>
              <label for="address">Scope of work</label>
            </legend>
            Create WordPress blog for the Ethereum chain developer in San Francisco area…
          </div>
          <div className="list-item text-input">
            <legend>
              <label for="taxid"> Fees</label>
            </legend>
            12.4532 ETH ($5 580.00)
          </div>


      </form>
      </div>

    );
  }
}

export default Summary;
