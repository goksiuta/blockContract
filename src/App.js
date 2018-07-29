import React, { Component } from 'react';
import logo from './logo.svg';
import '/App.css';
import TopNav from './components/TopNav'
import ClientDetailsForm from './components/ClientDetails'
import ScopeWork from './components/ScopeWork'
import FeesDates from './components/FeesDates'
import SideBar from './components/SideBar'

class App extends Component {
  render() {
    return (
      <div>
        <TopNav/>
        <SideBar/>
         <div>
          <ClientDetailsForm/>
          <ScopeWork />
          <FeesDates/>
         </div>
      </div> 
    );
  }
}

export default App;
