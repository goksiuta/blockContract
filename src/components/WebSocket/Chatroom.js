import React, { Component } from 'react'
import '../../App.css';
import ChatBox from './ChatBox'
import io from 'socket.io-client'
import handleResponse from './API'
const socket = io('http://localhost:8100')

class Messages extends Component {
  constructor(props) {
    super(props)

      this.state = {
        message: { user1: null, user2: null },
        messages: []
      }

    handleResponse((err, msg) => {
      this.setState({ messages: [ ...this.state.messages, msg ] })
    })
  }

  handleSubmit = (user) => {
    socket.emit('message', {[user]: this.state.message[user]})
    this.setState({ message: { [user]: '' } })
  }

  handleKeyPress = (e, user) => {
    if (e.key === 'Enter') {
      socket.emit('message', {[user]: this.state.message[user]})
      this.setState({ message: { [user]: '' } })
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="Contract-container">
      <div className="contract-section">
        <div className="contract-header">
          <h2> Contractor </h2>
        </div>
          <ChatBox messages={this.state.messages} from='Contractor' />
          <div className="message-input">
            <input type="text"  id="message" name="message" placeholder="Type your message here..." value={this.state.message.user1} onChange={(event) => this.setState({ message: { user1: event.target.value }})} onKeyPress={(e) => this.handleKeyPress(e, 'user1')} />
            <button className="message-button" onClick={() => this.handleSubmit('user1')} >Send</button>

          </div>
        </div>
        <div className="contract-section">
          <div className="contract-header">
            <h2> Employer </h2>
          </div>
            <ChatBox messages={this.state.messages} from='Employer' />
            <div className="message-input">
              <input type="text"  id="message" name="message" placeholder="Type your message here..." value={this.state.message.user2} onChange={(event) => this.setState({ message: { user2: event.target.value }})} onKeyPress={(e) => this.handleKeyPress(e, 'user2')} />
              <button className="message-button" onClick={() => this.handleSubmit('user2')}>Send</button>

            </div>
          </div>
        </div>
    )
  }
}

export default Messages
