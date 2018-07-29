import React, { Component } from 'react';
import logo from './logo.svg';
// import '/App.css';
import TopNav from './components/TopNav'
import SideBar from './components/SideBar'

class App extends Component {
  render() {
    return (
      <div>
      <TopNav/>
      <SideBar/>
      </div> 
    );
  }
}

export default App;
