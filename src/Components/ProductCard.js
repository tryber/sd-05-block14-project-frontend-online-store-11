import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import ShoppingCart from './ShoppingCart';
import '../App.css'

const ButtonC = (props) => (
  <div>
    <button
      data-testid="product-add-to-cart"
      onClick={() => ShoppingCart.adicionaProduto(props.item)}
      type="button"
    >
      adicionar ao carrinho
    </button>
  </div>
);

const FreteGratis = (props) => (
  (props.isFree) ? <p data-testid="free-shipping">Frete Grátis</p> : null
);

const Card = (props) => (
  props.items.map((item) => (
    <div key={item.id} data-testid="product" className="card-info">
      <Link
        data-testid="product-detail-link"
        to={{
          pathname: `/details/${item.id}`,
          state: {
            detailsIsProductAvailable: item.available_quantity,
            detailsId: item.id,
            detailsTitle: item.title,
            detailsThumbnail: item.thumbnail,
            detailsPrice: item.price,
            isFreeShipping: item.shipping.free_shipping,
          },
        }}
      >
        <img src={item.thumbnail} alt={item.title} className="img-product-card"/>
        <p>{`${item.title} - $ ${item.price}`}</p>
        <FreteGratis isFree={item.shipping.free_shipping} />

      </Link>
      <ButtonC item={item} />
    </div>
  ))
);

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detailsProduct: '' };
  }

  render() {
    return (
      <div className="card-container">
        <Card items={this.props.items} />
      </div>
    );
  }
}
export default ProductCard;
