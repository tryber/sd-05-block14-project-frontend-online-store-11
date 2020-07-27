import React from 'react';
import { Component } from 'react';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';
import './ProductListing.css';

// Tudo que está comentado será utilizado de uma forma ou outra em algum momento. Não apagar.

// Os códigos comentados abaixo são uma forma de usar API.
// Que veremos como será utilizado mais para frente.

class ProductListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  //  this.handleClick = this.handleClick.bind(this);
  }
  // Nao Apagar - Aqui é como se usa a API

  async componentDidMount() {
    const data = await getCategories();
    console.log(data);
    this.setState({ categories: data });
  }

  // async handleClick() {
  //   const product = await getProductsFromCategoryAndQuery('MLB1055', 'Motorola');
  //   console.log(product);
  //   return product;
  // }

  render() {
    const { categories } = this.state;

    return (
      <div className='Product-List'>
        {/* Não apagar  - Aqui é como se renderiza a  */}
        {/* lista. Apenas uma forma, não necessariamente a pedida nos requisitos */}
        <ul>
          {categories.map((cat) => (
            <div key={cat.id}>
              {/* <p>{cat.id}</p> */}
              <li data-testid="category">{cat.name}</li>
              {/* <button type="button" onClick={this.handleClick}>Add To Console Cart</button> */}
            </div>
          ))}
        </ul>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}

export default ProductListing;
