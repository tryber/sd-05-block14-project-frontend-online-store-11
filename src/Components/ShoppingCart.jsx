import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CadaItem from './CadaItem';
import CarrinhoVazio from './CarrinhoVazio';
import '../App.css'
import './ShoppingCart.css'

const produto = [];
// let status = 0;


// const statusCarrinho = async (items) => {
//   status = await items.filter((qtd) => qtd.quantity > 0).length;
// };

const adicionaProduto = (item) => { produto.push(item); };

class Carrinho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carrinho: [],
      total: 0,
    };
    this.insereProduto = this.insereProduto.bind(this);
    this.aumentaQuantidade = this.aumentaQuantidade.bind(this);
    this.diminuiQuantidade = this.diminuiQuantidade.bind(this);
    this.deletaItem = this.deletaItem.bind(this);
  }

  // componentDidUpdate()  {
  //   status = this.state.carrinho.length
  // }


  componentDidMount() {
    console.log(produto);
    this.insereProduto(produto);
  }

  insereProduto(item) {
    const { carrinho } = this.state;
    const array = [];
    let produtoPronto;
    item.forEach((cada) => {
      const { free_shipping: freeShipping } = { ...cada.shipping };
      produtoPronto = { id: cada.id, title: cada.title, thumbnail: cada.thumbnail, price: cada.price, quantity: 1, shipping: freeShipping ? 'sim' : 'não' };
      array.push(produtoPronto);
      this.setState({ carrinho: [...carrinho, ...array] });
    });
  }

  aumentaQuantidade(counter) {
    const { carrinho } = this.state;
    const index = carrinho.indexOf(counter);
    carrinho[index] = { ...carrinho[index] };
    carrinho[index].quantity += 1;
    this.setState({ carrinho });
    // console.log(carrinho[index]);
  }

  diminuiQuantidade(counter) {
    const { carrinho } = this.state;
    const index = carrinho.indexOf(counter);
    carrinho[index] = { ...carrinho[index] };
    carrinho[index].quantity -= 1;
    this.setState({ carrinho });
    // console.log(carrinho[index]);
  }

  deletaItem(counterId) {
    const carrinho = this.state.carrinho.filter((pega) => pega.id !== counterId);
    this.setState({ carrinho });
  }

  render() {
    const { carrinho } = this.state;
    if (carrinho.length === 0) {
      return (
        <CarrinhoVazio />
      );
    }
    return (
      <div className="shopping-cart-page">
        <Link to="/">Continuar comprando</Link>
        <ul className="shopping-cart-items-container">
          {carrinho.map((item) => (
            <CadaItem
              key={item.id}
              item={item}
              aumentaQuantidade={this.aumentaQuantidade}
              diminuiQuantidade={this.diminuiQuantidade}
              deletaItem={this.deletaItem}
            />
          ))}
        </ul>
        <Link
          to={{
            pathname: '/checkout',
            state: { cart: this.state.carrinho },
          }}
        ><button data-testid="checkout-products">Finalizar Compra</button>
        </Link>
      </div>
    );
  }
}

// console.log(status) -retirei "export default status" por causa do codeclimate
export default { Carrinho, adicionaProduto };
