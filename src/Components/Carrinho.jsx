import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Carrinho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carrinho: [
        {
          produto: 'chuteiras',
          quantidade: 2,
          preco: '79,90',
        },
      ],
    };
    this.insereProduto = this.insereProduto.bind(this);
  }

  componentDidMount() {
    this.insereProduto();
  }

  insereProduto() {
    const { ...produto } = this.props;
    const { carrinho } = this.state;
    this.setState({ carrinho: [...carrinho, { ...produto }] });
  }

  render() {
    const { carrinho } = this.state;
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
            <li>{`${item.produto} R$: ${item.preco}`}</li>
          ))}
          {/* <li>{carrinho[1].produto} {carrinho[1].preco} </li> */}
        </ul>
      </div>
    );
  }
}

export default Carrinho;
