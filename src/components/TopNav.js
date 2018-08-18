import React, { Component } from 'react';
import logo from '../img/logo-mark.svg';



class TopNav extends Component {
  render() {
    return (
      <nav>
        <div className="logo">
           <a href="/"><img src={logo} /></a>
        </div>
        <h3>  Development Services Agreement – 5 May, 2018 </h3>
        <div className="profile-avatar">
          Profile
        </div>

      </nav>
    );
  }
}

export default TopNav;
