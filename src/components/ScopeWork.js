import React, { Component } from 'react';
import logo from '../img/logo-mark.svg';
import '../App.css';



class ScopeWork extends Component {
  render() {
    return (
      <div className="form-section">
        <div className="form-header">
          <h2> Scope of Work </h2>
          <h5> Services to be delivered based on contract </h5>
        </div>

        <form>

            <textarea>
            e.g. Create WordPress blog for the Ethereum chain developer in San Francisco area…
          </textarea>

      </form>
      </div>

    );
  }
}

export default ScopeWork;
