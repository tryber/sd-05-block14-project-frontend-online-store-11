import React, { Component } from 'react';
import ProductCard from './ProductCard';
import './Checkout.css';
import * as query from '../__mocks__/query';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsExemplo: query.results,
      total: 'R$ 50000000',
    };
  }

  render() {
    return (
      <div className="checkout-page">
        <section className="checkout-products">
          <h3>Revise seus Produtos</h3>

          {/* produtos que virão do carrinho */}
          <ProductCard items={this.state.itemsExemplo} />

          <p>Total: {this.state.total}</p>
        </section>

        <section className="checkout-info">
          <h3>Informações do Comprador</h3>
          <form>
            <input data-testid="checkout-fullname" placeholder="Nome Completo" type="text" />
            <input data-testid="checkout-email" placeholder="Email" type="text" />
            <input data-testid="checkout-cpf" placeholder="CPF" type="text" />
            <input data-testid="checkout-phone" placeholder="Telefone Completo" type="text" />
            <input data-testid="checkout-cep" placeholder="CEP" type="text" />
            <input data-testid="checkout-adress" placeholder="Endereço" type="text" />
            <div><button className="input-button" type="button">Enviar</button></div>
          </form>
        </section>
      </div>
    );
  }
}

export default Checkout;
