import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Checkout from './Components/Checkout';
import DetailedView from './Components/DetailedView';
import CartIcon from './Components/CartIcon';
import ProductListing from './Components/ProductListing';
import ShoppingCart from './Components/ShoppingCart';
import './index.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header className="App-header">
          <Link to="/" className="logo">
            <img
              src="https://logodownload.org/wp-content/uploads/2016/08/Mercado-Livre-logo.png"
              height="100px"
              alt="logo"
            />
          </Link>
          <Link to="/carrinho" className="cart-icon">
            <img
              data-testid="shopping-cart-button"
              src="../cart-1.png"
              alt="carrinho de compras"
              height="50px"
            />
          </Link>
          <CartIcon qtdProdutos={ShoppingCart.status} />
        </header>
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route path="/details/:id" component={DetailedView} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/carrinho" component={ShoppingCart.Carrinho} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
