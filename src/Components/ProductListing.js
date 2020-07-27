//product list 

import React, { Component } from 'react';
import * as api from '../services/api';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard'

class ProductListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      searchProduct: '',
      arrayFetch: [],
    }
    this.updateStateCategories = this.updateStateCategories.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  updateStateCategories(param) {
    this.setState({ categories: param })
  }

  async componentDidMount() {
    const data = await api.getCategories();
    this.updateStateCategories(data)
  }

  async onClickHandler(id, product) {
    const products = await api.getProductsFromCategoryAndQuery(id, product);
    this.setState({ arrayFetch: products.results })
  }

  handleInputChange(event) {
    const inputText = event.target.value;
    this.setState({ searchProduct: inputText })
  }

  render() {
    const { categories, arrayFetch } = this.state;
    return (
      <div data-testid="category">
        {categories.map((element) => (
          <div className={element.id}>
            <a onClick={() => this.onClickHandler(element.id, element.name)}>
              {element.name}
            </a>
          </div>
        ))}
        <SearchBar />
        <ProductCard items={arrayFetch} />
      </div>
    )
  }
}


export default ProductListing;