import React, { Component } from 'react'
import '../../App.css';

class Signatures extends Component {
  render() {
    return (
      <div className="contract-section">
        <div className="contract-header">
          <h2> Signatures </h2>
        </div>
          <div className="contract-item">
            <div className="contract-legend">Contractor (You)</div>
            <div className="contract-signature">
              <div className="checkbox"><img src=""/></div><div>Signed</div>
            </div>
            <div className="contract-address">0x23571754544Cc1a95d269B8D75bAFf4C17A8B223</div>
          </div>
          <div className="contract-item">
            <div className="contract-legend">Employer</div>
            <div className="contract-signature">
              <div className="checkbox"><img src=""/></div><div>Signed</div>
            </div>
            <div className="contract-address">0xC8a013451768a24177926f6E27f938909A2C493E</div>
          </div>
        </div>
    )
  }
}

export default Signatures
