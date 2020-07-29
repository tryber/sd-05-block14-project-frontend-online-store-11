import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detailsProduct: '' };
  }

  render() {
    return (
      <div className="card-container">
        {this.props.items
          .map((item) => (

            <div
              key={item.id}
              data-testid="product"
              className="card-info"
            >
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
                <strong><p>{item.title}</p></strong>
                <p>${item.price}</p>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}
export default ProductCard;
