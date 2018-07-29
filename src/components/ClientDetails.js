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
              <legend>Formal type</legend>
              <div className="radioItem">
                  <input type="radio" id="huey" name="drone" checked />
                  <label for="huey">Company</label>
              </div>
              <div className="radioItem">
                  <input type="radio" id="dewey" name="drone" />
<<<<<<< HEAD
                  <label for="dewey">Individual</label>
=======
                  <label for="dewey">Private person</label>
>>>>>>> 7844f6c43848198768f7ee367f1b4d8443bb66b2
              </div>
          </div>
          <div className="list-item text-input">
            <legend>
              <label for="company" > Company name </label>
            </legend>
            <input type="text"  id="company" name="company" />
          </div>
          <div className="list-item text-input">
            <legend>
              <label for="address">Address</label>
            </legend>
            <input type="text" id="address" name="address" />
          </div>
          <div className="list-item text-input">
            <legend>
              <label for="taxid"> VAT, TAXID</label>
            </legend>
            <input type="text" id="taxid" name="taxid" />
          </div>


      </form>
      </div>

    );
  }
}

export default ClientDetailsForm;
