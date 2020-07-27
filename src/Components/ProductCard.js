import React from 'react';
// import { Link } from 'react-router-dom';
// import { PropTypes } from 'prop-types';

class ProductCard extends React.Component {
  //  const { items } = this.props.items

  render() {
    return (
      <div>
        {this.props.items.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <img src={item.thumbnail} alt={item.title} />
          </div>
        ))}
      </div>
    );
  }
}
export default ProductCard;
