import React, { Component } from 'react';
import logo from '../img/logo-mark.svg';
import '../App.css';



class FeesDates extends Component {
  render() {
    return (
      <div className="form-section">
        <div className="form-header">
          <h2> Fees & Dates </h2>
          <h5> Who is ordering services listed in the contract </h5>
        </div>

        <form>
          <div className="list-item text-input">
            <legend>
              Deadline
            </legend>
            <input type="text" name="name" />
          </div>
          <div className="list-item text-input">
            <legend>
              Number of iterations
            </legend>
            <input type="text" name="name" />
          </div>
          <div className="list-item text-input">
            <legend>
              Iteration time
            </legend>
            <input type="text" name="name" />
          </div>

      </form>
      </div>

    );
  }
}

export default FeesDates;
