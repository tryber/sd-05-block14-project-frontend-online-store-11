import React, { Component } from 'react';
import './App.css';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const data = await getCategories();
    this.setState({ categories: data });
  }

  // eslint-disable-next-line class-methods-use-this
  async handleClick() {
    const product = await getProductsFromCategoryAndQuery('MLB1055', 'Motorola');
    console.log(product);
    return product;
  }

  // async function updateData(a, b){
  //   let [ res1, res2 ] = await Promise.all(call1, call2);
  //   return  [ res1, res2 ]
  // }

  render() {
    const { categories } = this.state;
    return (
      <div className="App">
        {categories.map((cat) => (
          <div key={cat.id} style={{ border: 'solid 5px' }}>
            <p>{cat.id}</p>
            <p>{cat.name}</p>
            <button type="button" onClick={this.handleClick}>Add To Console Cart</button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
