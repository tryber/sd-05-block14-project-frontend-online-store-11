import React, { Component } from 'react';
import './Checkout.css';
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
      <li key={item.id}>
        <img src={item.thumbnail} alt={item.title} />
        <div data-testid="shopping-cart-product-name">{item.title}</div>
        <div data-testid="shopping-cart-product-quantity">Unidades: {item.quantity}</div>
        <div>R$: {item.price}</div>
        <div>Frete grátis: {item.shipping}</div>
      </li>
    );
  }

  render() {
    return (
      <div className="checkout-page">
        <section className="checkout-products">
          <h3>Revise seus Produtos</h3>
          <ul className="final-product-list">
            {this.state.cart.map((item) => this.finalProductList(item))}
          </ul>
          <h4>Total: {(this.state.total).toFixed(2)}</h4>
        </section>

        <section className="checkout-info">
          <h3>Informações do Comprador</h3>
          <form>
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
