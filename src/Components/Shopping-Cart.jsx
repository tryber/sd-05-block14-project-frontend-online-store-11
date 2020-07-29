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
    // if (produto.length > 1) item = produto.pop();
    const { carrinho } = this.state;
    this.setState({ carrinho: [...carrinho, ...item] });

   // if (carrinho.length !== 0) this.setState({ carrinho: [...carrinho, { id: product.id, title: product.title, price: product.price }] });
    // else this.setState({ carrinho: [{ id: product.id, title: product.title, price: product.price }] });
  }

  render() {
    const { carrinho } = this.state;
    console.log(carrinho);
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
              <div>{item.title}</div><div>R$:{item.price}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


export default { Carrinho, adicionaProduto };
