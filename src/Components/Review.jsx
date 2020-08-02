import React, { Component } from 'react';
import '../App.css'
import './style/Review.css'

class Review extends Component {
  render() {
    return (
      <div className="review-container">
        <h3 className="review-container-title">Avaliações</h3>
        <form className="review-form">
            <input className="input-email" placeholder="Email" type="text" />
            <textarea
              data-testid="product-detail-evaluation"
              className="input-textarea"
              placeholder="Mensagem"
              rows="5"cols="60"
            />
          <div><button className="input-button" type="button">Avaliar</button></div>
        </form>
      </div>
    );
  }
}

export default Review;
