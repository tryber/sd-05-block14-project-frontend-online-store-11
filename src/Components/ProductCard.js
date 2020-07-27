import React from 'react';
// import { Link } from 'react-router-dom';
// import { PropTypes } from 'prop-types';

class ProductCard extends React.Component {
  render() {
    return (
      <div>
        {this.props.items
          .map((item) => (
            <div key={item.id}>
              <div>
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          ))}
      </div>
    );
  }
}
export default ProductCard;
