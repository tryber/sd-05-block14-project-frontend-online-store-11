import React, { Component } from 'react';
import './style/Checkout.css';
import '../App.css'

class Checkout extends Component {
  constructor(props) {
    super(props);
    const { cart } = props.location.state;
    this.state = {
      cart,
      total: 0,
    };
  }

  finalProductList(item) {
    this.state.total = this.state.total + (item.price * item.quantity);
    console.log(this.state.total);
    return (
      <li className="product-checkout-item" key={item.id}>
        
        <div className="product-info-checkout" >
          <img src={item.thumbnail} alt={item.title} />
          <div data-testid="shopping-cart-product-name" className="checkout-product-name">{item.title}</div>
          <div data-testid="shopping-cart-product-quantity">Unidades: {item.quantity}</div>
          <div className="checkout-price">R$: {item.price}</div>
        </div>
        
      </li>
    );
  }

  render() {
    return (
      <div className="checkout-page">
        <section className="checkout-products">
          <h3 className="checkout-title">Revise seus Produtos</h3>
          <ul className="final-product-list">
            {this.state.cart.map((item) => this.finalProductList(item))}
          </ul>
          <h3 className="total-price">Total: {(this.state.total).toFixed(2)}</h3>
        </section>

        <section className="checkout-client-info">
          <h3>Informações do Comprador</h3>
          <form className="checkout-form">
            <input data-testid="checkout-fullname" placeholder="Nome Completo" type="text" />
            <input data-testid="checkout-email" placeholder="Email" type="text" />
            <input data-testid="checkout-cpf" placeholder="CPF" type="text" />
            <input data-testid="checkout-phone" placeholder="Telefone Completo" type="text" />
            <input data-testid="checkout-cep" placeholder="CEP" type="text" />
            <input data-testid="checkout-address" placeholder="Endereço" type="text" />
            <div><button className="input-button" type="button">Enviar</button></div>
          </form>
        </section>
      </div>
    );
  }
}

export default Checkout;
