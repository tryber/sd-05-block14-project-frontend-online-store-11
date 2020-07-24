import React, { Component } from 'react';
import './App.css';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const data = await getCategories();
    this.setState({ categories: data });
    const product = await getProductsFromCategoryAndQuery(
      'MLB1055',
      'Motorola',
    );
    console.log(product);
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="App">
        {categories.map((cat) => (
          <div key={cat.id} style={{ border: 'solid 5px' }}>
            <p>{cat.id}</p>
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
