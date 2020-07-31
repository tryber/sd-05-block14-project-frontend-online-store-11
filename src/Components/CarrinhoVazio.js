import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import './CarrinhoVazio.css'

class CarrinhoVazio extends Component {
  render() {
    return (
      <div className="carrinho-vazio">
        <Link to="/">
          <h2 className="ir-as-compras">Ir às compras!</h2>
        </Link>
        <main className="empty-card" >
          <h2 data-testid="shopping-cart-empty-message" className="empty-message">Seu carrinho está vazio</h2>
          <img src="../cart-3.png" alt="imagem de um carrinho vazio" height="200px" className="empty-img"/>
        </main>
      </div>
    );
  }
}

export default CarrinhoVazio;
