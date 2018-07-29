import React, { Component } from 'react';
import logo from '../img/logo-mark.svg';
import { Link } from 'react-router-dom';


class TopNav extends Component {
  render() {
    return (
      <nav>
        <Link to="/create">
          <div className="logo">
             <img src={logo} />
          </div>
          </Link>

        <h3>  Development Services Agreement – 5 May, 2018 </h3>
        <div className="profile-avatar">
          Profile
        </div>

      </nav>
    );
  }
}

export default TopNav;
