import React, { Component } from 'react';
import logo from '../img/logo-mark.svg';
import '../App.css';



class ClientDetailsForm extends Component {
  render() {
    return (
      <div className="form-section">
        <div className="form-header">
          <h2> Client Detail </h2>
          <h5> Who is ordering services listed in contract </h5>
        </div>

        <form>
          <div className="radioInput list-item">
              <legend>Select a maintenance drone</legend>
              <div className="radioItem">
                  <input type="radio" id="huey" name="drone" checked />
                  <label for="huey">Huey</label>
              </div>
              <div className="radioItem">
                  <input type="radio" id="dewey" name="drone" />
                  <label for="dewey">Dewey</label>
              </div>
          </div>
          <div className="list-item text-input">
            <legend>
              Company name
            </legend>
            <input type="text" name="name" />
          </div>
          <div className="list-item text-input">
            <legend>
              Address
            </legend>
            <input type="text" name="name" />
          </div>
          <div className="list-item text-input">
            <legend>
              VAT, TAXID
            </legend>
            <input type="text" name="name" />
          </div>
      </form>
      </div>

    );
  }
}

export default ClientDetailsForm;
