import React from 'react';

class NavBarCarrinho extends React.Component {
  render() {
    return (
      <nav>
        <div data-testid="shopping-cart-size">
          <span className="" style={{ width: 30 }}>
            {this.props.qtdProdutos} Items
          </span>
        </div>
      </nav>
    );
  }
}

export default NavBarCarrinho;
