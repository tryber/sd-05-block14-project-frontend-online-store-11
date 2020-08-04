import React, { Component } from 'react';
import '../App.css';
import './style/EachItem.css';

class EachItem extends Component {
  render() {
    const { aumentar, diminuir, deletaItem, item } = this.props;
    const { id, title, price, quantity, shipping, thumbnail } = item;
    return (
      <li key={id} className="each-item">
        <div className="img-cart-container"><img src={thumbnail} alt={title} /></div>
        <div className="info-cart"><p data-testid="shopping-cart-product-name">{title}</p>
          <p className="shopping-cart-price">{`R$ ${price}`}</p>
          <p className="free-shipping">{shipping === 'sim' ? 'Frete grátis' : null}</p>
        </div>
        <div className="right-side-cart">
          <div className="quantity-control">
            <button
              data-testid="product-decrease-quantity" onClick={() => diminuir(item)}
              className="qt-btns" type="button" disabled={quantity === 0 ? 'disabled' : ''}
            > - </button>
            <p data-testid="shopping-cart-product-quantity" className="qt-nb">{quantity}</p>
            <button
              data-testid="product-increase-quantity" onClick={() => aumentar(item)}
              className="qt-btns"
              type="button"
            > + </button>
            <div className="db-container">
              <button onClick={() => deletaItem(id)} type="button" className="db">remover</button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default EachItem;
