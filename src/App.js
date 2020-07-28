import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import ProductListing from './Components/ProductListing';
import Carrinho from './Components/Carrinho';

// array para simular os produtos adicionado ao carrinho
const produto = [
  {
    produto: 'camisa',
    quantidade: 1,
    preco: '99,90',
  },
  {
    produto: 'chuteiras',
    quantidade: 2,
    preco: '79,90',
  },
];

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <BrowserRouter>
        <header className="App-header">
          <Link to="/carrinho"><img data-testid="shopping-cart-button" src="../cart-1.png" alt="carrinho de compras" height="50px" /></Link>
        </header>
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route path="/carrinho/" render={(props) => <Carrinho {...props} produto={produto} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
