import React, { Component } from 'react'
import '../../App.css';
import MessageBox from '../Contract/MessageBox'
import io from 'socket.io-client'

const socket = io('http://localhost:8100')

class Messages extends Component {
  render() {
    return (
      <div className="Contract-container">
      <div className="contract-section">
        <div className="contract-header">
          <h2> Messages </h2>
        </div>
          <MessageBox/>
          <div className="message-input">
            <input type="text"  id="message" name="message" placeholder="Type your message here..." />
            <button className="message-button">Send</button>

          </div>
        </div>
        <div className="contract-section">
          <div className="contract-header">
            <h2> Messages </h2>
          </div>
            <MessageBox/>
            <div className="message-input">
              <input type="text"  id="message" name="message" placeholder="Type your message here..." />
              <button className="message-button">Send</button>

            </div>
          </div>
        </div>
    )
  }
}

export default Messages
