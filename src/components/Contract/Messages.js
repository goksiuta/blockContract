import React, { Component } from 'react'
import '../../App.css';
import MessageBox from './MessageBox'

class Messages extends Component {
  render() {
    return (
      <div className="contract-section">
        <div className="contract-header">
          <h2> Messages </h2>
        </div>
          <MessageBox/>
          <div className="list-item text-input">
            <input type="text"  id="message" name="message" placeholder="Type your message here..." />
            <button className="message-button">Send</button>

          </div>
        </div>
    )
  }
}

export default Messages
