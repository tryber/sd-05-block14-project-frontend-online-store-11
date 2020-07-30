import React from 'react';

// let status = 0;
// const statusCarrinho = async (...items) => {
//   status = await items.filter((qtd) => qtd.quantity > 0).length;
// };

class NavBarCarrinho extends React.Component {
  render() {
    return (
      <nav>
        <div data-testid="shopping-cart-size">
          <span className="" style={{ width: 30 }}>
            {this.props._CArrinhoqtdProdutos}
          </span>
          {/* <img
            data-testid="shopping-cart-button"
            src="../cart-1.png"
            alt="carrinho de compras"
            height="50px"
          /> */}
          Items
        </div>
      </nav>
    );
  }
}

export default NavBarCarrinho;
