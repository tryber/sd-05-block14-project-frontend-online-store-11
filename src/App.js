import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductListing from './Components/ProductListing';
import DetailedView from './Components/DetailedView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ProductListing} />
          {/* <Route exact path="/" component={ProductListing} /> */}
          <Route path="/details/:id" component={DetailedView} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
