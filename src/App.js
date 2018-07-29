import React, { Component } from 'react';
import logo from './logo.svg';
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
        <div className="Main-container">
	        <SideBar/>
	         <div>
	          <ClientDetailsForm/>
	          <ScopeWork />
	          <FeesDates/>
            <div className="call-to-action">
	            <div className="primary-btn"><a href="">Create contract</a></div>
            </div>
	         </div>
	         <div className="sidebar"></div>
         </div>
      </div>
    );
  }
}

export default App;
