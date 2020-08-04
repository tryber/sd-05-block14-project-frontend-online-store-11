import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './style/EmptyCart.css';

class EmptyCart extends Component {
  render() {
    return (
      <div className="empty-cart-page">
        <main className="empty-cart" >
          <h2
            data-testid="shopping-cart-empty-message"
            className="empty-message"
          >Seu carrinho está vazio</h2>
          <img
            src="../empty_cart.png"
            alt="imagem de um carrinho vazio"
            height="120px"
            className="empty-img"
          />
          <Link to="/">
            <h2 className="ir-as-compras">Ir às compras!</h2>
          </Link>
        </main>
      </div>
    );
  }
}

export default EmptyCart;
