import React, { Component } from 'react'
import '../../App.css';

class MessageBox extends Component {
  render() {

    if (this.props.from === 'Contractor') {
      return (
        <div className="message-box">
          <div className="msg-center">
            <div className="message-signed">
              <span style={{color: "#4957B8", fontWeight: "bold" }}>Employer </span>
              <span style={{color: "#717682"}}>signed agreement with 12.4534 ETH</span>
            </div>
          </div>
          {this.props.messages && this.props.messages.map(msg => {
            if (msg.user1) {
              return (<div className="msg-right">
                <div></div>
                <div className="message-contractor">
                  <div className="message-text">{msg['user1']}</div>
                </div>
              </div>)
            } else if (msg.user2) {
              return (
                <div className="msg-left">
                  <div className="message-employer">
                    {msg['user2']}
                  </div>
                  <div></div>
                </div>
              )
            }
          })}
        </div>
        )
    }

    if (this.props.from === 'Employer') {
      return (
        <div className="message-box">
          <div className="msg-center">
            <div className="message-signed">
              <span style={{color: "#4957B8", fontWeight: "bold" }}>Employer </span>
              <span style={{color: "#717682"}}>signed agreement with 12.4534 ETH</span>
            </div>
          </div>
          {this.props.messages && this.props.messages.map(msg => {
            if (msg.user2) {
              return (<div className="msg-right">
                <div></div>
                <div className="message-contractor">
                  <div className="message-text">{msg['user2']}</div>
                </div>
              </div>)
            } else if (msg.user1) {
              return (
                <div className="msg-left">
                  <div className="message-employer">
                    {msg['user1']}
                  </div>
                  <div></div>
                </div>
              )
            }
          })}
        </div>
        )
    }
  }
}

export default MessageBox
