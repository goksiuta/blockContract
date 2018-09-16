import React, { Component } from 'react'
import '../../App.css';

class MessageBox extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="message-box">

        {this.props.messages && this.props.messages.map(msg => {
          return (<div className="msg-right">
            <div></div>
            <div className="message-contractor">
              <div className="message-text">{msg}</div>
            </div>
          </div>)
        })}

        <div className="msg-right">
          <div></div>
          <div className="message-contractor">
            <div className="message-text">Hey, I'm sending you the contract we talked about last week</div>
          </div>
        </div>
        <div className="msg-center">
          <div className="message-signed">
            <span style={{color: "#4957B8", fontWeight: "bold" }}>Employer </span>
            <span style={{color: "#717682"}}>signed agreement with 12.4534 ETH</span>
          </div>
        </div>
        <div className="msg-left">
          <div className="message-employer">
            All set, let's start. Let me know if you have any additional questions
          </div>
          <div></div>
        </div>
        <div className="msg-right">
          <div></div>
          <div className="message-contractor">
            Hey, website is ready you can check it here: <span style={{fontWeight:  "bold"}}>http://goksiuta.com/test1</span>
          </div>
        </div>
        <div className="msg-left">
          <div className="message-employer">
            Looks great, can you just make the logo a little bigger?
          </div>
          <div></div>
        </div>
      </div>
    )
  }
}

export default MessageBox
