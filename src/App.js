import React, { Component } from 'react';
import logo from './logo.svg';
// import '/App.css';
import TopNav from './components/TopNav'
import ClientDetailsForm from './components/ClientDetails'
import ScopeWork from './components/ScopeWork'
import FeesDates from './components/FeesDates'

class App extends Component {
  render() {
    return (
      <div>
        <ClientDetailsForm/>
        <ScopeWork />
        <FeesDates/>
      </div>
    );
  }
}

export default App;
