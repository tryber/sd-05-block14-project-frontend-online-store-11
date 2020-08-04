import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EachItem from './EachItem';
import EmptyCart from './EmptyCart';
import '../App.css';
import './style/ShoppingCart.css';

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
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
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

  aumentar(counter) {
    const { carrinho } = this.state;
    const index = carrinho.indexOf(counter);
    carrinho[index] = { ...carrinho[index] };
    carrinho[index].quantity += 1;
    this.setState({ carrinho });
    // console.log(carrinho[index]);
  }

  diminuir(counter) {
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
    if (carrinho.length === 0) { return (<EmptyCart />); }
    return (
      <div className="shopping-cart-page">
        <ul className="shopping-cart-items-container">
          {carrinho.map((item) => (
            <EachItem
              key={item.id}
              item={item}
              aumentar={this.aumentar}
              diminuir={this.diminuir}
              deletaItem={this.deletaItem}
            />
          ))}
          <div className="cart-links">
            <Link to="/">
              <button className="continuar-comprando">Continuar comprando</button>
            </Link>
            <Link to={{ pathname: '/checkout', state: { cart: this.state.carrinho } }}>
              <button className="fc" data-testid="checkout-products">Finalizar Compra</button>
            </Link>
          </div>
        </ul>
      </div>
    );
  }
}

// console.log(status) -retirei "export default status" por causa do codeclimate
export default { Carrinho, adicionaProduto };
