import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import ProductListing from './Components/ProductListing';
import ShoppingCart from './Components/Shopping-Cart';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header className="App-header">
          <Link to="/carrinho"><img data-testid="shopping-cart-button" src="../cart-1.png" alt="carrinho de compras" height="50px" /></Link>
        </header>
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route path="/carrinho/" component={ShoppingCart.Carrinho} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
