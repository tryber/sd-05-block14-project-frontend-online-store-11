import React, { Component } from 'react';
import '../App.css'
import './style/EachItem.css'

class EachItem extends Component {
  render() {
    const { aumentaQuantidade, diminuiQuantidade, deletaItem, item } = this.props;
    const { id, title, price, quantity, shipping, thumbnail } = item;
    return (
      <li key={id} className="each-item">
        <div className="img-cart-container"><img src={thumbnail} alt={title} /></div>
          <div className="info-cart">
            <p data-testid="shopping-cart-product-name">{title}</p>
            <p className="shopping-cart-price">{`R$ ${price}`}</p>
            <p className="free-shipping">{shipping === "sim" ? `Frete grátis` : null}</p>
        </div>
        
        <div className="right-side-cart">
          <div className="quantity-control">
            <button
              data-testid="product-decrease-quantity"
              onClick={() => diminuiQuantidade(item)}
              className="quantity-buttons"
              type="button"
              disabled={quantity === 0 ? 'disabled' : ''}
            >
              -
          </button>
          <p 
            data-testid="shopping-cart-product-quantity" 
            className="quantity-number">{quantity}
          </p>
            <button
              data-testid="product-increase-quantity"
              onClick={() => aumentaQuantidade(item)}
              className="quantity-buttons"
              type="button"
            > +
            </button>
            <div className="delete-button-container"><button onClick={() => deletaItem(id)} type="button" className="delete-button">remover</button></div>
          </div>
        </div>
      </li>
    );
  }
}

export default EachItem;
