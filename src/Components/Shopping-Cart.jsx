import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const produto = [];

const adicionaProduto = (item) => { produto.push(item); };

class Carrinho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carrinho: [],
      total: 0,
    };
    this.insereProduto = this.insereProduto.bind(this);
  }

  componentDidMount() {
    this.insereProduto(produto);
  }

  insereProduto(item) {
    const { carrinho } = this.state;
    console.log(item);
    let produtoPronto = {};
    // const produtoPronto = { id: cada.id, title: cada.title, price: cada.price, quantity: 1 };
    const array = [];
    if (carrinho.length === 0) {
      item.forEach((cada) => {
        const { free_shipping } = { ...cada.shipping };
        produtoPronto = { id: cada.id, title: cada.title, price: cada.price, quantity: 1, shipping: free_shipping ? 'sim' : 'não' };
        // if (array.includes(produtoPronto)) {
        //   const index = array.indexOf(produtoPronto);
        //   array[index].quantity += 1;

        // this.incrementaProduto(achouProduto);
        // }
        array.push(produtoPronto);
        // this.incrementaProduto(produtoPronto);
      });
      this.setState({ carrinho: [...array], total: 0 });
    }
  }

  // incrementaProduto(counter) {
  //   const { carrinho } = this.state;
  //   if (carrinho.length !== 0) {
  //     const index = carrinho.indexOf(counter);
  //     carrinho[index].quantity += 1;
  //   }
  //   this.setState({ carrinho: [...carrinho, counter] });
  // }

  render() {
    const { carrinho } = this.state;
    if (carrinho.length === 0) {
      return (
        <div className="carrinho-vazio">
          <Link to="/">Ir as compras!</Link>
          <div className="">
            <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
            <img src="../cart-3.png" alt="imagem de um carrinho vazio" width="300px" />
          </div>
        </div>
      );
    }
    return (
      <div>
        <Link to="/">Continuar comprando</Link>
        <ul>
          {this.state.carrinho.map((item) => (
            <li key={item.id}>
              <div data-testid="shopping-cart-product-name">{item.title}</div>
              <div>
              {console.log(item.id)}
                Unidades:
                {item.quantity}
              </div>
              <div>
                R$:
                {item.price}
              </div>
              <div>
                Gratis:
                {item.shipping}
              </div>

            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default { Carrinho, adicionaProduto };
