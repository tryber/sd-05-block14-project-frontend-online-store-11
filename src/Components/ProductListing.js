import React, { Component } from 'react';
import * as api from '../services/api';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import './ProductListing.css';

class ProductListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      searchProduct: '',
      arrayFetch: [],
    };
    this.updateStateCategories = this.updateStateCategories.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async componentDidMount() {
    const data = await api.getCategories();
    this.updateStateCategories(data);
  }

  async onClickHandler(id, product) {
    const products = await api.getProductsFromCategoryAndQuery(id, product);
    this.setState({ arrayFetch: products.results });
  }

  updateStateCategories(param) {
    this.setState({ categories: param });
  }

  handleInputChange(event) {
    const inputText = event.target.value;
    this.setState({ searchProduct: inputText });
  }

  render() {
    const { categories, arrayFetch } = this.state;
    return (
      <div data-testid="category" className="left-side">
        <div className="categories-list">
          {categories.map((element) => (
            <button
              type="button"
              key={element.id}
              onClick={() => this.onClickHandler(element.id, element.name)}
            >
              {element.name}
            </button>
          ))}
        </div>
        <div className="right-side">
          <SearchBar />
          <ProductCard items={arrayFetch} />
        </div>
      </div>
    );
  }
}

export default ProductListing;
