import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const produto = {
  produto: 'calça',
  quantidade: 1,
  preco: '100,00',
};

class Carrinho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carrinho: [
        {
          id: 1,
          produto: 'chuteiras',
          quantidade: 2,
          preco: '79,90',
        },
        {
          id: 2,
          produto: 'camisa',
          quantidade: 2,
          preco: '99,90',
        },
      ],
    };
    this.insereProduto = this.insereProduto.bind(this);
  }

  componentDidMount() {
    this.insereProduto();
  }

  insereProduto() {
    const { carrinho } = this.state;
    this.setState({ carrinho: [...carrinho, { ...produto }] });
  }

  render() {
    const { carrinho } = this.state;
    console.log(carrinho);
    if (carrinho.length === 0) {
      return (
        <div className="carrinho-vazio">
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
          {carrinho.map((item) => (
            <li key={item.id}>
              <div>{`${item.produto} R$: ${item.preco}`}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Carrinho;
