import React, { Component } from 'react';
import logo from './logo.svg';
import TopNav from './components/TopNav'
import FormPage from './components/FormPage'
import DetailsPage from './components/DetailsPage'
import { Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Route component={TopNav} /> 
          <div>
            <Route exact path="/" component={() => <Redirect to="/create"/>} />
            <Route path="/create" component={FormPage} />
            <Route path="/track" component={DetailsPage} />
          </div>
      </div>
    );
  }
}

export default App;
