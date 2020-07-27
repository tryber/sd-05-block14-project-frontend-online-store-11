import React, { Component } from 'react';
import './Searchbar.css'

class SearchBar extends Component {
  render() {
    return (
    <div className="search-area">
      <input type="text" placeholder="Digite algum termo de pesquisa ou escolha uma categoria." />
    </div>
    )
  }
}


export default SearchBar;
