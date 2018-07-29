import React, { Component } from 'react';
import logo from '../img/logo-mark.svg';



class TextInput extends Component {
  render() {
    return (
          <label>
            Company name:
            <input type="text" name="name" />
          </label>

    );
  }
}

export default TextInput;
