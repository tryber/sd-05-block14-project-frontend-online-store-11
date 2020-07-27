import React from 'react';

class ProductCard extends React.Component {
  render() {
    return (
      <div>
        {this.props.items
          .map((item) => (
            <div key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          ))}
      </div>
    );
  }
}
export default ProductCard;
