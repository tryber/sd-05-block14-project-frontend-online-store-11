import React, { Component } from 'react';
import Productisting from '../components/ProductListing'
import SearchBar from '../components/SearchBar';
import './home.css'

class Home extends Component {
  render() {
    return (
      <section className="home-page">
        <Productisting />
        <SearchBar />
      </section>
    )
  }
}

export default Home;