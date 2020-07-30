import React from 'react';

class NavBarCarrinho extends React.Component {
  render() {
    return (
      <nav>
        <div data-testid="shopping-cart-size">
          <span className="" style={{ width: 30 }}>
            {this.props._CArrinhoqtdProdutos}
          </span>
          
          Items
        </div>
      </nav>
    );
  }
}

export default NavBarCarrinho;