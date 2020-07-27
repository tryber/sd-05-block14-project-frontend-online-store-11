import React from 'react';
import { Component } from 'react';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';
import './ProductListing.css';
import ProductCard from './ProductCard';

// Tudo que está comentado será utilizado de uma forma ou outra em algum momento. Não apagar.

// Os códigos comentados abaixo são uma forma de usar API.
// Que veremos como será utilizado mais para frente.

class ProductListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      searchProduct: '',
      array: [],
    };
    //  this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  // Nao Apagar - Aqui é como se usa a API

  async componentDidMount() {
    const data = await getCategories();
    console.log(data);
    this.updateStateCategories(data);
  }

  async onClickHandler(id, produto) {
    const product = await getProductsFromCategoryAndQuery(id, produto);
    console.log(product.results);
    this.setState({ array: product.results });
  }

  updateStateCategories(data) {
    this.setState({ categories: data });
  }

  handleInputChange(event) {
    const inputText = event.target.value;
    this.setState({ searchProduct: inputText });
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="Product-List">
        <div>
          {categories.map((cat) => (
            <div key={cat.id}>
              <button
                data-testid="category"
                onClick={() => this.onClickHandler(cat.id, cat.name)}
              >
                {cat.name}
              </button>
              <br />
            </div>
          ))}
        </div>

        <div className="search-area">
          <input type="text" onChange={this.handleInputChange} />
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
          <h3>{this.state.searchProduct}</h3>

          <ProductCard items={this.state.array} />
        </div>
      </div>
    );
  }
}

export default ProductListing;
