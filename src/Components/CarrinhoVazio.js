import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CarrinhoVazio extends Component {
  render() {
    return (
      <div className="carrinho-vazio">
        <Link to="/">
        Ir às compras!
        </Link>
        <main className="">
          <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
          <img src="../cart-3.png" alt="imagem de um carrinho vazio" width="300px" />
        </main>
      </div>
    );
  }
}

export default CarrinhoVazio;
