import React from 'react';
import './ProductCard.css';
import ShoppingCart from './Shopping-Cart';

class ProductCard extends React.Component {
  render() {
    return (
      <div className="card-container">
        {this.props.items
          .map((item) => (
            <div key={item.id} className="card-info">
              <img src={item.thumbnail} alt={item.title} />
              <strong><p>{item.title}</p></strong>
              <p>${item.price}</p>
              <button onClick={() => ShoppingCart.adicionaProduto(item)} type="button">adicinar</button>
              {/* inseri esta tag de botao aqui */}
            </div>
          ))}
      </div>
    );
  }
}
export default ProductCard;
