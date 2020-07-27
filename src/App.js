import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductListing from './Components/ProductListing';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ProductListing} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
