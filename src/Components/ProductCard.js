import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import ShoppingCart from './Shopping-Cart';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detailsProduct: '' };
  }

  render() {
    return (
      <div className="card-container">
        {this.props.items.map((item) => (
          <div key={item.id} data-testid="product" className="card-info">
            <Link
              data-testid="product-detail-link"
              to={{
                pathname: `/details/${item.id}`,
                state: {
                  detailsId: item.id,
                  detailsTitle: item.title,
                  detailsThumbnail: item.thumbnail,
                  detailsPrice: item.price,
                },
              }}
            >
              <img src={item.thumbnail} alt={item.title} />
              <p>{`${item.title} - $ ${item.price}`}</p>
            </Link>
            <button
              data-testid="product-add-to-cart"
              onClick={() => ShoppingCart.adicionaProduto(item)}
              type="button"
            >
              adicinar
            </button>
          </div>
        ))}
      </div>
    );
  }
}
export default ProductCard;
