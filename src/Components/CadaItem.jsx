import React, { Component } from "react";

class CadaItem extends Component {
  render() {
    const { aumentaQuantidade, diminuiQuantidade, deletaItem, item } = this.props;
    const { id, title, price, quantity, shipping } = item;
    return (
      <li key={id}>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p data-testid="shopping-cart-product-quantity">Unidades:{quantity}</p>
        <p>{`R$:${price}`}</p>wf

        <div>
          <button data-testid="product-increase-quantity" onClick={() => aumentaQuantidade(item)} type="button"> mais </button>
          <button
            data-testid="product-decrease-quantity"
            onClick={() => diminuiQuantidade(item)}
            type="button"
            disabled={quantity === 0 ? 'disabled' : ''}
          >
            menos
          </button>
        </div>
        <p>{`Frete grátis: ${shipping}`}</p>
        <div>
          <button onClick={() => deletaItem(id)} type="button"> Excluir</button>
        </div>

      </li>
    );
  }
}

export default CadaItem;
