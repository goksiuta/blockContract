import React, { Component } from 'react'
import '../../App.css';

class Summary extends Component {
  render() {
    return (
      <div className="contract-section">
        <div className="contract-header">
          <h2> Summary </h2>
          </div>
          <div className="contract-item" >
            <div className="contract-legend">Date</div>
            <div>5 May, 2018</div>
          </div>
          <div className="contract-item">
            <div className="contract-legend">Scope of Work</div>
            <div style={{width: "50%"}}>Create a WordPress blog for Ethereum blockchain developer in the San Francisco area...</div>
            <div className="show-more">Show More</div>
          </div>
          <div className="contract-item">
            <div className="contract-legend">Fees</div>
            <div>12.4532 ETH <span style={{color: "grey"}}>($5,580.00)</span></div>
          </div>
        </div>

    )
  }
}

export default Summary
