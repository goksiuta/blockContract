import React, { Component } from 'react';
import logo from './logo.svg';
import TopNav from './components/TopNav'
import Home from './components/Home'
import Main from './components/Contract/Main'
import Chatroom from './components/WebSocket/Chatroom'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


class App extends Component {


  render() {

    return (
      <Router>
      <div>
        <TopNav/>

        <Route exact path="/" component={Home} />
        <Route path="/contract" component={Main} />
        <Route path='/chatroom' component={Chatroom} />

      </div>
      </Router>
    );
  }
}

export default App;
